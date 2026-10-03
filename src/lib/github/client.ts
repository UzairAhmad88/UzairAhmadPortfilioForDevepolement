import type { GitHubApiRepository, GitHubRepository } from '../../types/github.ts';
import { githubConfig } from '../../config/github.ts';
import { baselineApiRepositories } from '../../data/github/repositories.ts';
import { normalizeRepository } from './normalizer.ts';

/**
 * Result of listing GitHub repositories
 */
export interface FetchRepositoriesResult {
  repositories: GitHubRepository[];
  rawRepositories: GitHubApiRepository[];
  isOfflineFallback: boolean;
  rateLimitRemaining?: number;
  rateLimitReset?: number;
  error?: string;
}

/**
 * Fetches all public repositories for the configured GitHub account.
 * Automatically falls back to verified baseline data if offline or rate-limited.
 */
export async function listGithubRepositories(
  options: {
    username?: string;
    token?: string;
    timeoutMs?: number;
  } = {}
): Promise<FetchRepositoriesResult> {
  const username = options.username || githubConfig.username;
  const token = options.token || (typeof process !== 'undefined' ? process.env.GITHUB_TOKEN : undefined);
  const timeoutMs = options.timeoutMs || 8000;

  const headers: Record<string, string> = {
    Accept: 'application/vnd.github.v3+json',
    'User-Agent': githubConfig.userAgent,
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

    const response = await fetch(
      `${githubConfig.apiUrl}/users/${username}/repos?per_page=100&sort=updated`,
      {
        headers,
        signal: controller.signal,
      }
    );

    clearTimeout(timeoutId);

    const rateLimit = response.headers.get('x-ratelimit-remaining');
    const rateReset = response.headers.get('x-ratelimit-reset');
    const rateLimitRemaining = rateLimit ? parseInt(rateLimit, 10) : undefined;
    const rateLimitReset = rateReset ? parseInt(rateReset, 10) : undefined;

    if (!response.ok) {
      return {
        repositories: baselineApiRepositories.map((r) => normalizeRepository(r, 'CACHED_GITHUB', 'Cached')),
        rawRepositories: baselineApiRepositories,
        isOfflineFallback: true,
        rateLimitRemaining,
        rateLimitReset,
        error: `GitHub API responded with status ${response.status}: ${response.statusText}`,
      };
    }

    const data = (await response.json()) as GitHubApiRepository[];
    return {
      repositories: data.map((r) => normalizeRepository(r, 'LIVE_GITHUB', 'Verified')),
      rawRepositories: data,
      isOfflineFallback: false,
      rateLimitRemaining,
      rateLimitReset,
    };
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : 'Network error or timeout';
    return {
      repositories: baselineApiRepositories.map((r) => normalizeRepository(r, 'CACHED_GITHUB', 'Cached')),
      rawRepositories: baselineApiRepositories,
      isOfflineFallback: true,
      error: errorMessage,
    };
  }
}
