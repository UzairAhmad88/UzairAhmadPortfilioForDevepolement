/**
 * VERCEL API CLIENT MODULE
 * Phase 16 — Server/Build-time Vercel REST Client with Offline Fallback
 *
 * Security Note:
 * - VERCEL_TOKEN is ONLY accessed at build-time or in CLI sync scripts.
 * - Client-side browser execution never reads or exposes tokens.
 */

import { vercelConfig } from '../../config/vercel.ts';
import type { VercelProject, VercelDeployment } from '../../types/vercel.ts';
import { normalizeVercelProject, normalizeVercelDeployment } from './normalizer.ts';
import { cachedVercelProjects } from '../../data/vercel/projects.ts';

export interface FetchProjectsOptions {
  token?: string;
  teamId?: string;
  timeoutMs?: number;
  useCacheFallback?: boolean;
}

/**
 * Fetches user or team projects from Vercel REST API with graceful offline fallback.
 */
export async function fetchVercelProjects(
  options: FetchProjectsOptions = {}
): Promise<{ projects: VercelProject[]; fromCache: boolean; error?: string }> {
  const token = options.token || (typeof process !== 'undefined' ? process.env?.VERCEL_TOKEN : undefined);
  const timeoutMs = options.timeoutMs || vercelConfig.defaultTimeoutMs;
  const useCacheFallback = options.useCacheFallback !== false;

  if (!token) {
    if (useCacheFallback) {
      return {
        projects: cachedVercelProjects,
        fromCache: true,
        error: 'No VERCEL_TOKEN provided. Using cached ground-truth deployment records.',
      };
    }
    return {
      projects: [],
      fromCache: false,
      error: 'Authentication required. Set VERCEL_TOKEN environment variable.',
    };
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const url = new URL('/v9/projects', vercelConfig.apiUrl);
    if (options.teamId || vercelConfig.teamSlug) {
      url.searchParams.set('teamId', options.teamId || vercelConfig.teamSlug || '');
    }

    const res = await fetch(url.toString(), {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!res.ok) {
      const errorMsg = `Vercel API error (${res.status} ${res.statusText})`;
      if (useCacheFallback) {
        return {
          projects: cachedVercelProjects,
          fromCache: true,
          error: `${errorMsg}. Falling back to cached projects.`,
        };
      }
      return { projects: [], fromCache: false, error: errorMsg };
    }

    const data = await res.json();
    const rawProjects = Array.isArray(data.projects) ? data.projects : [];
    const normalized = rawProjects.map((p: any) => normalizeVercelProject(p, 'LIVE_VERCEL'));

    return {
      projects: normalized,
      fromCache: false,
    };
  } catch (err: any) {
    clearTimeout(timeoutId);
    const isAbort = err?.name === 'AbortError';
    const message = isAbort
      ? `Request timed out after ${timeoutMs}ms`
      : err?.message || 'Network request failed';

    if (useCacheFallback) {
      return {
        projects: cachedVercelProjects,
        fromCache: true,
        error: `${message}. Using cached ground-truth deployment records.`,
      };
    }

    return {
      projects: [],
      fromCache: false,
      error: message,
    };
  }
}

/**
 * Fetches recent deployments for a specific Vercel project.
 */
export async function fetchProjectDeployments(
  projectId: string,
  options: FetchProjectsOptions = {}
): Promise<{ deployments: VercelDeployment[]; fromCache: boolean; error?: string }> {
  const token = options.token || (typeof process !== 'undefined' ? process.env?.VERCEL_TOKEN : undefined);
  const timeoutMs = options.timeoutMs || vercelConfig.defaultTimeoutMs;

  if (!token) {
    const cached = cachedVercelProjects.find((p) => p.id === projectId || p.name === projectId);
    return {
      deployments: cached?.latestDeployments || (cached?.productionDeployment ? [cached.productionDeployment] : []),
      fromCache: true,
      error: 'No VERCEL_TOKEN provided. Using cached deployment list.',
    };
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const url = new URL('/v6/deployments', vercelConfig.apiUrl);
    url.searchParams.set('projectId', projectId);
    url.searchParams.set('limit', String(vercelConfig.maxDeploymentsPerProject));

    const res = await fetch(url.toString(), {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!res.ok) {
      const cached = cachedVercelProjects.find((p) => p.id === projectId || p.name === projectId);
      return {
        deployments: cached?.latestDeployments || [],
        fromCache: true,
        error: `Vercel API error (${res.status}). Used cached fallback.`,
      };
    }

    const data = await res.json();
    const rawDeployments = Array.isArray(data.deployments) ? data.deployments : [];
    const normalized = rawDeployments.map((d: any) => normalizeVercelDeployment(d, 'LIVE_VERCEL'));

    return {
      deployments: normalized,
      fromCache: false,
    };
  } catch (err: any) {
    clearTimeout(timeoutId);
    const cached = cachedVercelProjects.find((p) => p.id === projectId || p.name === projectId);
    return {
      deployments: cached?.latestDeployments || [],
      fromCache: true,
      error: `${err?.message || 'Network error'}. Used cached fallback.`,
    };
  }
}
