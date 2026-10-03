/**
 * VERCEL INTELLIGENCE CONFIGURATION
 * Phase 16 — Personal Engineering & Research Platform
 *
 * Strict Rule: Never expose VERCEL_TOKEN to browser runtime or client bundles.
 * All API synchronizations occur during build-time or manual CLI tasks.
 */

export interface VercelConfig {
  readonly enabled: boolean;
  readonly username: string;
  readonly teamSlug?: string;
  readonly apiUrl: string;
  readonly apiStrategy: 'STATIC_CACHE' | 'BUILD_SYNC' | 'MANUAL';
  readonly cacheStrategy: 'STATIC_FALLBACK' | 'MEMORY' | 'FILESYSTEM';
  readonly lastSyncedAt: string;
  readonly defaultTimeoutMs: number;
  readonly maxDeploymentsPerProject: number;
}

export const vercelConfig: VercelConfig = {
  enabled: true,
  username: 'UzairAhmad88',
  teamSlug: 'imuzairahmad8-6603s-projects',
  apiUrl: 'https://api.vercel.com',
  apiStrategy: 'STATIC_CACHE',
  cacheStrategy: 'STATIC_FALLBACK',
  lastSyncedAt: '2026-10-04T02:00:00Z',
  defaultTimeoutMs: 10000,
  maxDeploymentsPerProject: 5,
};
