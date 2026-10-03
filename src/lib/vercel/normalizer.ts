/**
 * VERCEL NORMALIZER MODULE
 * Phase 16 — Normalization and Sanitization of Deployment Data
 */

import type {
  VercelDeploymentState,
  VercelDeploymentTarget,
  VercelDeployment,
  VercelProject,
  VercelSourceType,
} from '../../types/vercel.ts';

export function normalizeDeploymentState(rawState?: string | null): VercelDeploymentState {
  if (!rawState) return 'UNKNOWN';
  const upper = rawState.trim().toUpperCase();
  if (upper === 'READY' || upper === 'BUILD_READY' || upper === 'DEPLOYED') return 'READY';
  if (upper === 'BUILDING' || upper === 'INITIALIZING' || upper === 'DEPLOYING') return 'BUILDING';
  if (upper === 'ERROR' || upper === 'FAILED' || upper === 'DEPLOYMENT_ERROR') return 'ERROR';
  if (upper === 'CANCELED' || upper === 'CANCELLED') return 'CANCELED';
  if (upper === 'QUEUED') return 'QUEUED';
  return 'UNKNOWN';
}

export function normalizeDeploymentTarget(rawTarget?: string | null): VercelDeploymentTarget {
  if (!rawTarget) return 'preview';
  const lower = rawTarget.trim().toLowerCase();
  if (lower === 'production' || lower === 'prod') return 'production';
  if (lower === 'development' || lower === 'dev') return 'development';
  return 'preview';
}

export function sanitizeUrl(rawUrl?: string | null): string {
  if (!rawUrl) return '';
  const trimmed = rawUrl.trim();
  
  // Guard against javascript:, data:, vbscript: or other dangerous URI schemes
  if (/^(javascript:|data:|vbscript:|file:)/i.test(trimmed)) {
    return '';
  }

  // Ensure https prefix
  if (trimmed.startsWith('http://')) {
    return trimmed.replace(/^http:\/\//i, 'https://');
  }
  if (!trimmed.startsWith('https://')) {
    return `https://${trimmed}`;
  }
  return trimmed;
}

export function formatFrameworkName(framework?: string | null): string {
  if (!framework) return 'Web Application';
  const lower = framework.toLowerCase().trim();
  switch (lower) {
    case 'astro':
      return 'Astro';
    case 'nextjs':
    case 'next':
      return 'Next.js';
    case 'react':
      return 'React';
    case 'vite':
      return 'Vite';
    case 'remix':
      return 'Remix';
    case 'vue':
    case 'vuejs':
      return 'Vue.js';
    case 'svelte':
    case 'sveltekit':
      return 'SvelteKit';
    case 'nuxt':
    case 'nuxtjs':
      return 'Nuxt';
    case 'gatsby':
      return 'Gatsby';
    case 'fastapi':
    case 'python':
      return 'Python / Web';
    default:
      return framework.charAt(0).toUpperCase() + framework.slice(1);
  }
}

export function normalizeVercelDeployment(
  raw: any,
  source: VercelSourceType = 'LIVE_VERCEL'
): VercelDeployment {
  const url = sanitizeUrl(raw.url || (raw.alias && raw.alias[0]));
  const state = normalizeDeploymentState(raw.readyState || raw.state);
  const target = normalizeDeploymentTarget(raw.target || (raw.environment === 'production' ? 'production' : 'preview'));

  return {
    id: String(raw.id || raw.uid || `dpl_${Date.now()}`),
    projectId: String(raw.projectId || raw.project_id || ''),
    projectName: String(raw.name || raw.projectName || ''),
    deploymentId: String(raw.id || raw.uid || ''),
    url,
    inspectorUrl: raw.inspectorUrl ? sanitizeUrl(raw.inspectorUrl) : undefined,
    state,
    target,
    environment: raw.environment || target,
    framework: raw.framework || null,
    createdAt: Number(raw.createdAt || raw.created || Date.now()),
    readyAt: raw.ready ? Number(raw.ready) : undefined,
    creator: raw.creator?.username || raw.creator?.name || undefined,
    gitSource: raw.meta ? {
      provider: raw.meta.githubCommitRepo || raw.meta.gitProvider || 'github',
      repository: raw.meta.githubRepo || raw.meta.githubCommitRepo || '',
      branch: raw.meta.githubCommitRef || raw.meta.githubCommitBranch || '',
      commitSha: raw.meta.githubCommitSha || '',
      commitMessage: raw.meta.githubCommitMessage || '',
    } : undefined,
    source,
    fetchedAt: new Date().toISOString(),
  };
}

export function normalizeVercelProject(
  raw: any,
  source: VercelSourceType = 'LIVE_VERCEL'
): VercelProject {
  const latestDeployments: VercelDeployment[] = Array.isArray(raw.latestDeployments)
    ? raw.latestDeployments.map((d: any) => normalizeVercelDeployment(d, source))
    : [];

  let productionDeployment: VercelDeployment | undefined;
  if (raw.targets?.production) {
    productionDeployment = normalizeVercelDeployment(
      { ...raw.targets.production, name: raw.name, projectId: raw.id },
      source
    );
  } else if (latestDeployments.length > 0) {
    const prodMatch = latestDeployments.find((d) => d.target === 'production' && d.state === 'READY');
    if (prodMatch) productionDeployment = prodMatch;
  }

  const gitRepository = raw.link?.repo
    ? `${raw.link.org || ''}/${raw.link.repo}`.replace(/^\//, '')
    : undefined;

  const domains = Array.isArray(raw.domains)
    ? raw.domains.map((d: any) => (typeof d === 'string' ? d : d.name)).filter(Boolean)
    : [];

  return {
    id: String(raw.id || `prj_${Date.now()}`),
    name: String(raw.name || ''),
    accountId: raw.accountId ? String(raw.accountId) : undefined,
    framework: raw.framework || null,
    createdAt: Number(raw.createdAt || Date.now()),
    updatedAt: Number(raw.updatedAt || Date.now()),
    productionDeployment,
    latestDeployments,
    gitRepository,
    domains,
    fetchedAt: new Date().toISOString(),
    source,
  };
}
