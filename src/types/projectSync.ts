/**
 * PROJECT SYNCHRONIZATION TYPES & SCHEMAS
 * Phase 17 — Personal Engineering & Research Platform
 *
 * Establishes formal lifecycle, mapping, identity, and change models connecting
 * Portfolio (Curated Source of Truth), GitHub (Code Evidence), and Vercel (Deployment Evidence).
 */

export type ProjectLifecycleState =
  | 'DISCOVERED'
  | 'REVIEWED'
  | 'CLASSIFIED'
  | 'MAPPED'
  | 'CURATED'
  | 'PUBLISHED'
  | 'EXCLUDED'
  | 'CONFLICT'
  | 'STALE';

export type MappingStatus =
  | 'UNMATCHED'
  | 'SUGGESTED'
  | 'VERIFIED'
  | 'CONFLICT'
  | 'UNAVAILABLE';

export type MatchConfidence =
  | 'EXACT'
  | 'STRONG'
  | 'POSSIBLE'
  | 'AMBIGUOUS';

export interface ProjectIdentity {
  projectId: string;
  projectSlug: string;
  title: string;
  githubRepositoryId?: string | number;
  githubRepositoryFullName?: string;
  vercelProjectId?: string;
  primaryProductionDeploymentId?: string;
  liveUrl?: string;
  repositoryUrl?: string;
  lifecycleState: ProjectLifecycleState;
  mappingStatus: MappingStatus;
}

export interface SyncConflict {
  id: string;
  type:
    | 'REPO_MISMATCH'
    | 'DEPLOYMENT_MISMATCH'
    | 'DUPLICATE_MAPPING'
    | 'URL_INCONSISTENCY'
    | 'UNAVAILABLE_SOURCE'
    | 'STATE_CONFLICT';
  projectId: string;
  description: string;
  requiresHumanReview: boolean;
  severity: 'CRITICAL' | 'WARNING' | 'NOTICE';
  detectedAt: string;
}

export interface ProjectSyncGitHubSummary {
  repositoryId?: string | number;
  fullName?: string;
  verified: boolean;
  lastFetchedAt?: string;
  isPrivate?: boolean;
  isArchived?: boolean;
  pushedAt?: string;
  primaryLanguage?: string;
}

export interface ProjectSyncVercelSummary {
  projectId?: string;
  projectName?: string;
  deploymentId?: string;
  deploymentUrl?: string;
  target?: string;
  state?: string;
  verified: boolean;
  lastFetchedAt?: string;
  framework?: string;
}

export interface ProjectSyncRecord {
  identity: ProjectIdentity;
  github?: ProjectSyncGitHubSummary;
  vercel?: ProjectSyncVercelSummary;
  syncStatus: ProjectLifecycleState;
  mappingStatus: MappingStatus;
  lastCheckedAt: string;
  warnings: string[];
  conflicts: SyncConflict[];
  evidenceChain: {
    hasPortfolio: boolean;
    hasGitHub: boolean;
    hasVercel: boolean;
    isFullyLinked: boolean;
  };
}

export interface ProjectChangeSet {
  newGithubRepos: string[];
  changedGithubRepos: string[];
  newVercelProjects: string[];
  changedVercelDeployments: string[];
  conflictsFound: SyncConflict[];
  potentialMappings: Array<{
    projectId: string;
    suggestedRepo?: string;
    suggestedVercel?: string;
    confidence: MatchConfidence;
    reason: string;
  }>;
}

export interface ProjectSyncReport {
  timestamp: string;
  isDryRun: boolean;
  schemaVersion: string;
  portfolioProjectsCount: number;
  githubRepositoriesCount: number;
  vercelProjectsCount: number;
  verifiedMappingsCount: number;
  suggestedMappingsCount: number;
  conflictsCount: number;
  unavailableSourcesCount: number;
  staleRecordsCount: number;
  records: ProjectSyncRecord[];
  changes: ProjectChangeSet;
  reviewActions: string[];
}

export interface ProjectSyncCurationEntry {
  projectId: string;
  projectSlug: string;
  githubRepositoryFullName?: string;
  githubRepositoryId?: string | number;
  vercelProjectId?: string;
  vercelProjectName?: string;
  preferredLiveUrl?: string;
  publishGithubEvidence: boolean;
  publishDeploymentEvidence: boolean;
  notes?: string;
  verifiedAt: string;
}
