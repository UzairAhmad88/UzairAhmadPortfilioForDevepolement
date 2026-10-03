/**
 * VERCEL INTELLIGENCE DATA TYPES
 * Phase 16 — Deployment & Production Evidence Models
 */

export type VercelDeploymentState = 'READY' | 'BUILDING' | 'ERROR' | 'CANCELED' | 'QUEUED' | 'UNKNOWN';

export type VercelDeploymentTarget = 'production' | 'preview' | 'development';

export type VercelSourceType = 'LIVE_VERCEL' | 'CACHED_VERCEL' | 'MANUAL' | 'CURATED';

export type VercelProvenanceState = 'LIVE_VERIFIED' | 'CACHED' | 'MANUAL' | 'UNAVAILABLE';

export interface VercelGitSource {
  provider: 'github' | 'gitlab' | 'bitbucket' | string;
  repository: string; // e.g. "UzairAhmad88/UzairAhmadPortfilioForDevepolement"
  branch?: string;
  commitSha?: string;
  commitMessage?: string;
}

export interface VercelDeployment {
  id: string;
  projectId: string;
  projectName: string;
  deploymentId: string;
  url: string; // e.g. "https://uzairahmad.vercel.app"
  inspectorUrl?: string;
  state: VercelDeploymentState;
  target: VercelDeploymentTarget;
  environment: string; // e.g. "production"
  framework: string | null;
  createdAt: number;
  readyAt?: number;
  creator?: string;
  gitSource?: VercelGitSource;
  source: VercelSourceType;
  fetchedAt: string;
}

export interface VercelProject {
  id: string;
  name: string;
  accountId?: string;
  framework: string | null;
  createdAt: number;
  updatedAt: number;
  productionDeployment?: VercelDeployment;
  latestDeployments: VercelDeployment[];
  gitRepository?: string;
  domains: string[];
  fetchedAt: string;
  source: VercelSourceType;
}

export interface VercelEvidence {
  projectName: string;
  deploymentUrl: string;
  production: boolean;
  target: VercelDeploymentTarget;
  deploymentState: VercelDeploymentState;
  framework: string | null;
  environment: string;
  provenance: VercelProvenanceState;
  lastVerifiedAt: string;
  source: VercelSourceType;
  matchedPortfolioSlug?: string;
  matchedResearchId?: string;
  matchedLabId?: string;
  matchedGitHubRepo?: string;
  gitBranch?: string;
  gitCommit?: string;
  isCustomDomain?: boolean;
  isOfflineFallback?: boolean;
  evidenceChainNotes?: string;
}

export interface VercelCurationEntry {
  vercelProjectId: string;
  vercelProjectName: string;
  portfolioProjectId?: string;
  researchId?: string;
  labId?: string;
  preferredDeploymentUrl?: string;
  target: VercelDeploymentTarget;
  displayLabel?: string;
  publish: boolean;
  notes?: string;
  gitRepository?: string;
  verifiedAt: string;
}

export interface VercelMatchingResult {
  matchStatus: 'VERIFIED_MATCH' | 'SUGGESTED_MATCH' | 'UNMATCHED' | 'CONFLICT';
  vercelProjectName: string;
  vercelProjectId: string;
  matchedPortfolioSlug?: string;
  matchedResearchId?: string;
  matchedLabId?: string;
  matchedGitHubRepo?: string;
  reason: string;
  confidence: number;
}

export interface VercelSyncReportItem {
  vercelProjectId: string;
  vercelProjectName: string;
  deploymentUrl: string;
  target: VercelDeploymentTarget;
  state: VercelDeploymentState;
  matchedItem: string;
  matchType: 'PORTFOLIO' | 'RESEARCH' | 'LAB' | 'VERCEL_ONLY';
  provenance: VercelProvenanceState;
  notes?: string;
}

export interface VercelSyncReport {
  timestamp: string;
  isDryRun: boolean;
  projectsDiscovered: number;
  deploymentsDiscovered: number;
  productionDeployments: number;
  previewDeployments: number;
  verifiedMappingsCount: number;
  unmatchedVercelProjectsCount: number;
  portfolioOnlyProjectsCount: number;
  unavailableDeploymentsCount: number;
  warnings: string[];
  items: VercelSyncReportItem[];
}
