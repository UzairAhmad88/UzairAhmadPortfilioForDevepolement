/**
 * VERCEL INTELLIGENCE SUBSYSTEM
 * Phase 16 — Deployment & Production Evidence Layer
 *
 * Core Exports:
 * - Types & Data Models
 * - Curation Registry & Baseline Cache
 * - Normalizer, Validator, Client, Matcher, Evidence, and Sync Engines
 * - Backwards-compatible legacy helpers
 */

export * from '../../types/vercel.ts';
export * from '../../config/vercel.ts';
export * from '../../data/vercel/curation.ts';
export * from '../../data/vercel/projects.ts';
export * from './normalizer.ts';
export * from './validator.ts';
export * from './client.ts';
export * from './matcher.ts';
export * from './evidence.ts';
export * from './sync.ts';

import type { VercelDeploymentState } from '../../types/vercel.ts';
import { getVercelEvidenceForProject } from './evidence.ts';

// Legacy Type Aliases for Backward Compatibility
export type VercelDeploymentStatus = VercelDeploymentState;

export interface VerifiedVercelDeployment {
  projectName: string;
  productionUrl: string;
  status: VercelDeploymentStatus;
  lastDeployedAt?: string;
  matchedGitHubRepo?: string;
}

// Backwards-compatible legacy list
export const KNOWN_VERCEL_DEPLOYMENTS: VerifiedVercelDeployment[] = [
  {
    projectName: 'uzairahmad',
    productionUrl: 'https://uzairahmad.vercel.app',
    status: 'READY',
    matchedGitHubRepo: 'UzairAhmad88/UzairAhmadPortfilioForDevepolement',
  },
  {
    projectName: 'curasphere-hms',
    productionUrl: 'https://vercel.com/imuzairahmad8-6603s-projects',
    status: 'READY',
    matchedGitHubRepo: 'UzairAhmad88/-CuraSphere-HMS-DevelopbyUzaii',
  },
];

/**
 * Finds a matching verified Vercel deployment for a given GitHub repository or portfolio slug.
 * Maintained for backward compatibility with existing systems (e.g. GitHub Intelligence).
 */
export function findVercelDeployment(
  githubRepoFullName?: string,
  portfolioSlug?: string
): VerifiedVercelDeployment | undefined {
  const evidence = getVercelEvidenceForProject(portfolioSlug, githubRepoFullName);
  if (evidence && evidence.deploymentUrl) {
    return {
      projectName: evidence.projectName,
      productionUrl: evidence.deploymentUrl,
      status: evidence.deploymentState,
      lastDeployedAt: evidence.lastVerifiedAt,
      matchedGitHubRepo: evidence.matchedGitHubRepo,
    };
  }

  // Fallback to legacy array if unmatched
  if (githubRepoFullName) {
    const matched = KNOWN_VERCEL_DEPLOYMENTS.find(
      (d) => d.matchedGitHubRepo?.toLowerCase() === githubRepoFullName.toLowerCase()
    );
    if (matched) return matched;
  }

  if (portfolioSlug) {
    const matchedBySlug = KNOWN_VERCEL_DEPLOYMENTS.find(
      (d) => d.projectName.toLowerCase() === portfolioSlug.toLowerCase()
    );
    if (matchedBySlug) return matchedBySlug;
  }

  return undefined;
}
