export type SourceType = 'LIVE_GITHUB' | 'CACHED_GITHUB' | 'MANUAL' | 'CURATED';

export type ProvenanceState = 'Verified' | 'Cached' | 'Manual' | 'Unavailable';

export type RepositoryClassification =
  | 'portfolio'
  | 'research'
  | 'experiment'
  | 'academic'
  | 'utility'
  | 'learning'
  | 'template'
  | 'archive'
  | 'fork'
  | 'personal'
  | 'infrastructure'
  | 'not-for-portfolio'
  | 'unknown';

export type CurationLifecycleState =
  | 'discovered'
  | 'reviewed'
  | 'classified'
  | 'curated'
  | 'published'
  | 'excluded'
  | 'archived';

export type SyncStatus =
  | 'DISCOVERED'
  | 'REVIEWED'
  | 'CURATED'
  | 'PUBLISHED'
  | 'UPDATE_AVAILABLE'
  | 'UNCHANGED'
  | 'UNAVAILABLE';

export interface GitHubApiLicense {
  key: string;
  name: string;
  spdx_id: string;
  url: string | null;
}

export interface GitHubApiRepository {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  html_url: string;
  description: string | null;
  fork: boolean;
  url: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  homepage: string | null;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: string | null;
  has_issues: boolean;
  has_projects: boolean;
  has_downloads: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  forks_count: number;
  archived: boolean;
  disabled: boolean;
  open_issues_count: number;
  license: GitHubApiLicense | null;
  topics?: string[];
  default_branch: string;
}

export interface GitHubRepository {
  id: string;
  name: string;
  fullName: string;
  owner: string;
  url: string;
  htmlUrl: string;
  description: string;
  visibility: 'public' | 'private';
  archived: boolean;
  fork: boolean;
  defaultBranch: string;
  language: string;
  languages?: string[];
  detectedTechnologies: string[];
  topics: string[];
  stars: number;
  forks: number;
  watchers: number;
  createdAt: string;
  updatedAt: string;
  pushedAt: string;
  license: string | null;
  homepage: string | null;
  readmeAvailable: boolean;
  size: number;
  openIssues: number;
  sourceType: SourceType;
  fetchedAt: string;
  provenance: ProvenanceState;
}

export interface GitHubEvidence {
  repositoryUrl: string;
  repositoryName: string;
  fullName: string;
  public: boolean;
  archived: boolean;
  fork: boolean;
  lastVerifiedAt: string;
  readmeAvailable: boolean;
  defaultBranch: string;
  language: string;
  license: string | null;
  topics: string[];
  provenance: ProvenanceState;
  sourceType: SourceType;
  codeUrl: string;
  releaseUrl?: string;
  issuesUrl?: string;
  commitsUrl?: string;
  description?: string;
}

export interface GitHubCurationEntry {
  repositoryFullName: string;
  classification: RepositoryClassification;
  projectId?: string;
  researchId?: string;
  labId?: string;
  noteId?: string;
  publish: boolean;
  displayName: string;
  curationState: CurationLifecycleState;
  notes?: string;
  featured?: boolean;
  curatedAt: string;
  canonicalSlug?: string;
}

export interface RepositorySyncResult {
  repository: GitHubRepository;
  syncStatus: SyncStatus;
  curationState: CurationLifecycleState;
  matchedProjectSlug?: string;
  matchedResearchSlug?: string;
  matchedLabSlug?: string;
  possibleVercelDeployment?: string;
  updateDetails?: string;
  requiresReview: boolean;
  warnings?: string[];
}

export interface GitHubSyncReport {
  timestamp: string;
  username: string;
  totalDiscovered: number;
  publishedCount: number;
  updateAvailableCount: number;
  newDiscoveredCount: number;
  unchangedCount: number;
  archivedCount: number;
  unmatchedCount: number;
  results: RepositorySyncResult[];
  warnings: string[];
}
