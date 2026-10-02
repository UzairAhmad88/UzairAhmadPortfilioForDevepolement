export type RepositoryClassification = 
  | 'PORTFOLIO'
  | 'RESEARCH'
  | 'EXPERIMENT'
  | 'ACADEMIC'
  | 'UTILITY'
  | 'TEMPLATE'
  | 'ARCHIVED'
  | 'NOT_FOR_PORTFOLIO';

export type SyncStatus = 
  | 'DISCOVERED'
  | 'REVIEWED'
  | 'CURATED'
  | 'PUBLISHED'
  | 'UPDATE_AVAILABLE'
  | 'UNCHANGED';

export interface GithubApiRepository {
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
  license: {
    key: string;
    name: string;
    spdx_id: string;
    url: string | null;
  } | null;
  topics?: string[];
  default_branch: string;
}

export interface NormalizedRepository {
  id: string;
  name: string;
  fullName: string;
  owner: string;
  description: string;
  htmlUrl: string;
  homepageUrl: string | null;
  primaryLanguage: string;
  detectedTechnologies: string[];
  topics: string[];
  classification: RepositoryClassification;
  isArchived: boolean;
  isPrivate: boolean;
  isFork: boolean;
  defaultBranch: string;
  createdAt: string;
  updatedAt: string;
  pushedAt: string;
  stars: number;
  forks: number;
  openIssues: number;
  licenseName: string | null;
}

export interface ProjectSourceMapping {
  githubRepo: string; // e.g. "UzairAhmad88/Deep-Learning-Based-Stock-Return-Prediction---Quantitative-Trading-System-ByUzaii"
  portfolioSlug: string; // e.g. "deep-learning-stock-return-prediction"
  vercelProjectName?: string; // e.g. "stock-prediction-ui"
  liveUrl?: string;
  classification: RepositoryClassification;
  syncStatus: SyncStatus;
}

export interface RepositorySyncResult {
  repository: NormalizedRepository;
  syncStatus: SyncStatus;
  matchedProjectSlug?: string;
  possibleVercelDeployment?: string;
  updateDetails?: string;
  requiresReview: boolean;
}

export interface SyncReport {
  timestamp: string;
  totalDiscovered: number;
  publishedCount: number;
  updateAvailableCount: number;
  newDiscoveredCount: number;
  unchangedCount: number;
  results: RepositorySyncResult[];
}
