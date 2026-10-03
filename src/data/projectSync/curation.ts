/**
 * PROJECT SYNC CURATION REGISTRY
 * Phase 17 — Personal Engineering & Research Platform
 *
 * Explicit, human-verified mappings between Portfolio Projects, GitHub Repositories, and Vercel Deployments.
 *
 * Source-of-Truth Hierarchy:
 * - PORTFOLIO CONTENT: Curated narrative, problem, solution, architecture, and tradeoffs.
 * - GITHUB: Code and repository evidence.
 * - VERCEL: Deployment and hosting evidence.
 *
 * Automated synchronizations NEVER overwrite this registry.
 */

import type { ProjectSyncCurationEntry } from '../../types/projectSync.ts';

export const projectSyncCurationRegistry: ProjectSyncCurationEntry[] = [
  {
    projectId: 'stock-return-prediction',
    projectSlug: 'deep-learning-stock-return-prediction',
    githubRepositoryFullName: 'UzairAhmad88/Deep-Learning-Based-Stock-Return-Prediction---Quantitative-Trading-System-ByUzaii',
    publishGithubEvidence: true,
    publishDeploymentEvidence: false,
    notes: 'Flagship quantitative machine learning research project. Public GitHub repository, local CUDA execution.',
    verifiedAt: '2026-10-04T02:00:00Z',
  },
  {
    projectId: 'multi-agent-prospect-intelligence',
    projectSlug: 'multi-agent-prospect-intelligence',
    githubRepositoryFullName: 'UzairAhmad88/Multi-Modal-Quantitative-AI-Development',
    vercelProjectId: 'prj_multi_agent_prospect',
    vercelProjectName: 'multi-agent-prospect-intelligence-demo',
    preferredLiveUrl: 'https://multi-agent-prospect-demo.vercel.app',
    publishGithubEvidence: true,
    publishDeploymentEvidence: true,
    notes: 'Final Year Project (FYP) multi-agent system. Public code repository and interactive preview demonstrator.',
    verifiedAt: '2026-10-04T02:00:00Z',
  },
  {
    projectId: 'curasphere-hms',
    projectSlug: 'curasphere-hms',
    githubRepositoryFullName: 'UzairAhmad88/-CuraSphere-HMS-DevelopbyUzaii',
    vercelProjectId: 'prj_curasphere_hms',
    vercelProjectName: 'curasphere-hms',
    preferredLiveUrl: 'https://vercel.com/imuzairahmad8-6603s-projects',
    publishGithubEvidence: true,
    publishDeploymentEvidence: true,
    notes: 'Enterprise healthcare management platform. Public GitHub repository and verified Vercel production deployment.',
    verifiedAt: '2026-10-04T02:00:00Z',
  },
  {
    projectId: 'market-regime-engine',
    projectSlug: 'market-regime-engine',
    githubRepositoryFullName: 'UzairAhmad88/Develop-Market-Regime--Engine-byUzaii',
    publishGithubEvidence: true,
    publishDeploymentEvidence: false,
    notes: 'Unsupervised volatility clustering engine. Public repository, algorithmic research engine.',
    verifiedAt: '2026-10-04T02:00:00Z',
  },
  {
    projectId: 'restaurant-pos',
    projectSlug: 'restaurant-pos',
    githubRepositoryFullName: 'UzairAhmad88/Resturent-Managment-System---POS',
    publishGithubEvidence: true,
    publishDeploymentEvidence: false,
    notes: 'Offline-first restaurant POS system. Public repository.',
    verifiedAt: '2026-10-04T02:00:00Z',
  },
  {
    projectId: 'hayatabad-gym',
    projectSlug: 'hayatabad-gym',
    githubRepositoryFullName: 'UzairAhmad88/Hayatabad-Gym-BYMe',
    publishGithubEvidence: true,
    publishDeploymentEvidence: false,
    notes: 'Fitness brand platform. Public repository.',
    verifiedAt: '2026-10-04T02:00:00Z',
  },
  {
    projectId: 'portfolio-website',
    projectSlug: 'portfolio-website',
    githubRepositoryFullName: 'UzairAhmad88/UzairAhmadPortfilioForDevepolement',
    vercelProjectId: 'prj_uzairahmad_portfolio',
    vercelProjectName: 'uzairahmad',
    preferredLiveUrl: 'https://uzairahmad.vercel.app',
    publishGithubEvidence: true,
    publishDeploymentEvidence: true,
    notes: 'Canonical portfolio platform repository and verified production deployment.',
    verifiedAt: '2026-10-04T02:00:00Z',
  },
];

/**
 * Retrieves a curated sync entry by project ID or slug.
 */
export function getProjectSyncCuration(projectIdOrSlug: string): ProjectSyncCurationEntry | undefined {
  if (!projectIdOrSlug) return undefined;
  const target = projectIdOrSlug.toLowerCase();
  return projectSyncCurationRegistry.find(
    (c) => c.projectId.toLowerCase() === target || c.projectSlug.toLowerCase() === target
  );
}

/**
 * Retrieves a curated sync entry by GitHub repository full name.
 */
export function getProjectSyncCurationByRepo(repoFullName: string): ProjectSyncCurationEntry | undefined {
  if (!repoFullName) return undefined;
  const target = repoFullName.toLowerCase();
  return projectSyncCurationRegistry.find(
    (c) => c.githubRepositoryFullName?.toLowerCase() === target
  );
}
