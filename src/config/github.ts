export interface GitHubConfig {
  username: string;
  profileUrl: string;
  enabled: boolean;
  apiStrategy: 'build-time-fallback' | 'manual-sync' | 'static-cache';
  cacheStrategy: 'file-system-cache' | 'in-memory-baseline';
  lastSyncedAt: string;
  apiUrl: string;
  userAgent: string;
  defaultBranch: string;
}

export const githubConfig: GitHubConfig = {
  username: 'UzairAhmad88',
  profileUrl: 'https://github.com/UzairAhmad88',
  enabled: true,
  apiStrategy: 'build-time-fallback',
  cacheStrategy: 'file-system-cache',
  lastSyncedAt: '2026-10-04T00:00:00Z',
  apiUrl: 'https://api.github.com',
  userAgent: 'UzairAhmad-Portfolio-Intelligence/1.0',
  defaultBranch: 'main',
};
