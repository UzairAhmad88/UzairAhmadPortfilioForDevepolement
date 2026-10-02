import type { GithubApiRepository, NormalizedRepository } from './types.ts';
import { normalizeRepository } from './normalizer.ts';

const DEFAULT_USERNAME = 'UzairAhmad88';
const GITHUB_API_BASE = 'https://api.github.com';

// Fallback baseline repositories for offline builds or API rate limit events
export const BASELINE_GITHUB_REPOSITORIES: GithubApiRepository[] = [
  {
    id: 84729101,
    node_id: 'R_kgDOM1234',
    name: 'Deep-Learning-Based-Stock-Return-Prediction---Quantitative-Trading-System-ByUzaii',
    full_name: 'UzairAhmad88/Deep-Learning-Based-Stock-Return-Prediction---Quantitative-Trading-System-ByUzaii',
    private: false,
    html_url: 'https://github.com/UzairAhmad88/Deep-Learning-Based-Stock-Return-Prediction---Quantitative-Trading-System-ByUzaii',
    description: 'Multi-horizon quantitative trading and return forecasting pipeline built in PyTorch.',
    fork: false,
    url: 'https://api.github.com/repos/UzairAhmad88/Deep-Learning-Based-Stock-Return-Prediction---Quantitative-Trading-System-ByUzaii',
    created_at: '2024-08-10T12:00:00Z',
    updated_at: '2025-01-15T18:30:00Z',
    pushed_at: '2025-01-15T18:30:00Z',
    git_url: 'git://github.com/UzairAhmad88/Deep-Learning-Based-Stock-Return-Prediction---Quantitative-Trading-System-ByUzaii.git',
    ssh_url: 'git@github.com:UzairAhmad88/Deep-Learning-Based-Stock-Return-Prediction---Quantitative-Trading-System-ByUzaii.git',
    clone_url: 'https://github.com/UzairAhmad88/Deep-Learning-Based-Stock-Return-Prediction---Quantitative-Trading-System-ByUzaii.git',
    homepage: null,
    size: 4500,
    stargazers_count: 5,
    watchers_count: 5,
    language: 'Python',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    forks_count: 1,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: { key: 'mit', name: 'MIT License', spdx_id: 'MIT', url: null },
    topics: ['pytorch', 'quantitative-finance', 'machine-learning', 'python'],
    default_branch: 'main',
  },
  {
    id: 84729102,
    node_id: 'R_kgDOM1235',
    name: 'Develop-Market-Regime--Engine-byUzaii',
    full_name: 'UzairAhmad88/Develop-Market-Regime--Engine-byUzaii',
    private: false,
    html_url: 'https://github.com/UzairAhmad88/Develop-Market-Regime--Engine-byUzaii',
    description: 'Unsupervised statistical clustering engine for financial market volatility regime detection.',
    fork: false,
    url: 'https://api.github.com/repos/UzairAhmad88/Develop-Market-Regime--Engine-byUzaii',
    created_at: '2024-10-05T09:15:00Z',
    updated_at: '2025-02-01T14:20:00Z',
    pushed_at: '2025-02-01T14:20:00Z',
    git_url: 'git://github.com/UzairAhmad88/Develop-Market-Regime--Engine-byUzaii.git',
    ssh_url: 'git@github.com:UzairAhmad88/Develop-Market-Regime--Engine-byUzaii.git',
    clone_url: 'https://github.com/UzairAhmad88/Develop-Market-Regime--Engine-byUzaii.git',
    homepage: null,
    size: 2100,
    stargazers_count: 3,
    watchers_count: 3,
    language: 'Python',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    forks_count: 0,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: { key: 'mit', name: 'MIT License', spdx_id: 'MIT', url: null },
    topics: ['scikit-learn', 'clustering', 'quantitative-finance'],
    default_branch: 'main',
  },
  {
    id: 84729103,
    node_id: 'R_kgDOM1236',
    name: '-CuraSphere-HMS-DevelopbyUzaii',
    full_name: 'UzairAhmad88/-CuraSphere-HMS-DevelopbyUzaii',
    private: false,
    html_url: 'https://github.com/UzairAhmad88/-CuraSphere-HMS-DevelopbyUzaii',
    description: 'Modern, responsive Healthcare Management System with role-based access control and patient records.',
    fork: false,
    url: 'https://api.github.com/repos/UzairAhmad88/-CuraSphere-HMS-DevelopbyUzaii',
    created_at: '2024-06-12T16:00:00Z',
    updated_at: '2024-12-18T11:45:00Z',
    pushed_at: '2024-12-18T11:45:00Z',
    git_url: 'git://github.com/UzairAhmad88/-CuraSphere-HMS-DevelopbyUzaii.git',
    ssh_url: 'git@github.com:UzairAhmad88/-CuraSphere-HMS-DevelopbyUzaii.git',
    clone_url: 'https://github.com/UzairAhmad88/-CuraSphere-HMS-DevelopbyUzaii.git',
    homepage: 'https://vercel.com/imuzairahmad8-6603s-projects',
    size: 8900,
    stargazers_count: 4,
    watchers_count: 4,
    language: 'TypeScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    forks_count: 2,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: { key: 'mit', name: 'MIT License', spdx_id: 'MIT', url: null },
    topics: ['react', 'typescript', 'hms', 'tailwindcss'],
    default_branch: 'main',
  },
  {
    id: 84729104,
    node_id: 'R_kgDOM1237',
    name: 'Resturent-Managment-System---POS',
    full_name: 'UzairAhmad88/Resturent-Managment-System---POS',
    private: false,
    html_url: 'https://github.com/UzairAhmad88/Resturent-Managment-System---POS',
    description: 'High-throughput Point of Sale and inventory control software for dining operations.',
    fork: false,
    url: 'https://api.github.com/repos/UzairAhmad88/Resturent-Managment-System---POS',
    created_at: '2024-03-20T10:00:00Z',
    updated_at: '2024-09-10T15:00:00Z',
    pushed_at: '2024-09-10T15:00:00Z',
    git_url: 'git://github.com/UzairAhmad88/Resturent-Managment-System---POS.git',
    ssh_url: 'git@github.com:UzairAhmad88/Resturent-Managment-System---POS.git',
    clone_url: 'https://github.com/UzairAhmad88/Resturent-Managment-System---POS.git',
    homepage: null,
    size: 3200,
    stargazers_count: 2,
    watchers_count: 2,
    language: 'JavaScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    forks_count: 0,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    topics: ['pos', 'javascript', 'inventory-management'],
    default_branch: 'main',
  },
  {
    id: 84729105,
    node_id: 'R_kgDOM1238',
    name: 'Hayatabad-Gym-BYMe',
    full_name: 'UzairAhmad88/Hayatabad-Gym-BYMe',
    private: false,
    html_url: 'https://github.com/UzairAhmad88/Hayatabad-Gym-BYMe',
    description: 'Modern, accessible web platform for premier fitness facility brand and membership inquiries.',
    fork: false,
    url: 'https://api.github.com/repos/UzairAhmad88/Hayatabad-Gym-BYMe',
    created_at: '2023-11-15T08:30:00Z',
    updated_at: '2024-04-05T12:10:00Z',
    pushed_at: '2024-04-05T12:10:00Z',
    git_url: 'git://github.com/UzairAhmad88/Hayatabad-Gym-BYMe.git',
    ssh_url: 'git@github.com:UzairAhmad88/Hayatabad-Gym-BYMe.git',
    clone_url: 'https://github.com/UzairAhmad88/Hayatabad-Gym-BYMe.git',
    homepage: null,
    size: 1500,
    stargazers_count: 1,
    watchers_count: 1,
    language: 'HTML',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    forks_count: 0,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    topics: ['html5', 'css3', 'responsive-design'],
    default_branch: 'main',
  },
  {
    id: 84729106,
    node_id: 'R_kgDOM1239',
    name: 'UzairAhmadPortfilioForDevepolement',
    full_name: 'UzairAhmad88/UzairAhmadPortfilioForDevepolement',
    private: false,
    html_url: 'https://github.com/UzairAhmad88/UzairAhmadPortfilioForDevepolement',
    description: 'Personal professional developer and quantitative engineering website built with Astro and TypeScript.',
    fork: false,
    url: 'https://api.github.com/repos/UzairAhmad88/UzairAhmadPortfilioForDevepolement',
    created_at: '2025-01-01T00:00:00Z',
    updated_at: '2026-10-02T22:00:00Z',
    pushed_at: '2026-10-02T22:00:00Z',
    git_url: 'git://github.com/UzairAhmad88/UzairAhmadPortfilioForDevepolement.git',
    ssh_url: 'git@github.com:UzairAhmad88/UzairAhmadPortfilioForDevepolement.git',
    clone_url: 'https://github.com/UzairAhmad88/UzairAhmadPortfilioForDevepolement.git',
    homepage: 'https://uzairahmad.vercel.app',
    size: 6200,
    stargazers_count: 8,
    watchers_count: 8,
    language: 'Astro',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    forks_count: 1,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: { key: 'mit', name: 'MIT License', spdx_id: 'MIT', url: null },
    topics: ['astro', 'typescript', 'portfolio', 'seo'],
    default_branch: 'main',
  },
];

/**
 * Fetches all public repositories for the configured GitHub account.
 * Automatically falls back to verified baseline data if offline or rate-limited.
 */
export async function listGithubRepositories(
  username: string = DEFAULT_USERNAME,
  token?: string
): Promise<{ repositories: NormalizedRepository[]; isOfflineFallback: boolean; rateLimitRemaining?: number }> {
  const headers: Record<string, string> = {
    Accept: 'application/vnd.github.v3+json',
    'User-Agent': 'UzairAhmad-Portfolio-Sync/1.0',
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 6000);

    const response = await fetch(`${GITHUB_API_BASE}/users/${username}/repos?per_page=100&sort=updated`, {
      headers,
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    const rateLimit = response.headers.get('x-ratelimit-remaining');
    const rateLimitRemaining = rateLimit ? parseInt(rateLimit, 10) : undefined;

    if (!response.ok) {
      // Fallback on HTTP errors (e.g. 403 rate limit or 404)
      return {
        repositories: BASELINE_GITHUB_REPOSITORIES.map(normalizeRepository),
        isOfflineFallback: true,
        rateLimitRemaining,
      };
    }

    const data = (await response.json()) as GithubApiRepository[];
    return {
      repositories: data.map(normalizeRepository),
      isOfflineFallback: false,
      rateLimitRemaining,
    };
  } catch {
    // Fallback on network timeout or DNS failure
    return {
      repositories: BASELINE_GITHUB_REPOSITORIES.map(normalizeRepository),
      isOfflineFallback: true,
    };
  }
}
