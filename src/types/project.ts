import type { ProjectVisualization } from './visualization';
import type { ProjectArchiveMetadata, ArchiveState } from './archive';

export * from './archive';


export type ProjectCategory = 'quant' | 'ai' | 'engineering' | 'product';

export type ProjectType = 'Product' | 'System' | 'Research' | 'Academic' | 'Prototype' | 'Experiment';

export type ProjectDomain = 
  | 'Quantitative Finance'
  | 'Machine Learning & AI'
  | 'Full-Stack Engineering'
  | 'Systems & Automation'
  | 'Multi-Agent Intelligence';

export type ProjectStatus = 'completed' | 'active' | 'research' | 'academic' | 'prototype' | 'archived';

export type PresentationLevel = 'A' | 'B' | 'C' | 'D'; // A: Flagship Case Study, B: Detailed Project, C: Standard Entry, D: Archive

export type RepositoryStatus = 'public' | 'private' | 'archived' | 'not_applicable';

export type DeploymentStatus = 'production' | 'preview' | 'not_deployed' | 'unknown' | 'failed';

export type ProjectSource = 'manual' | 'github' | 'vercel' | 'github+vercel';

export type ProjectContext = 
  | 'Personal Engineering'
  | 'Independent Research'
  | 'Academic (FYP)'
  | 'Academic Project'
  | 'Client Platform'
  | 'Open Source'
  | 'Prototype / Experiment';

export interface ProjectEvidenceItem {
  label: string;
  url?: string;
  type: 'github' | 'live' | 'demo' | 'case-study' | 'documentation';
  verified: boolean;
}

export interface ProjectDNAMetadata {
  type: string;
  status: string;
  rawStatus: ProjectStatus;
  archiveState?: ArchiveState;
  year?: string;
  timeline?: string;
  role?: string;
  context?: string;
  technologies: string[];
  evidence: ProjectEvidenceItem[];
  deployment?: string;
  domain?: string;
  architecturePattern?: string;
}

export interface TechnicalDecision {
  decision: string;
  context?: string;
  rationale: string;
  tradeOff?: string;
}

export interface TechnicalChallenge {
  challenge: string;
  solution: string;
}

export interface ProjectResult {
  status: 'Implemented' | 'Measured' | 'Experimental';
  description: string;
}

export interface ProjectCaseStudy {
  overview?: string;
  context?: string;
  objectives?: string[];
  role?: string;
  team?: string;
  timeline?: string;
  approach?: string;
  architectureDiagram?: string;
  architectureNotes?: string;
  visualizations?: ProjectVisualization[];
  implementationHighlights?: string[];
  challenges?: TechnicalChallenge[];
  keyDecisions?: TechnicalDecision[];
  results?: ProjectResult[];
  outcomes?: string[];
  limitations?: string[];
  lessonsLearned?: string[];
  futureWork?: string[];
}

export interface ProjectSourceMetadata {
  github?: boolean;
  vercel?: boolean;
  manuallyVerified?: boolean;
  lastSyncedAt?: string;
  lastKnownPushedAt?: string;
  defaultBranch?: string;
  stars?: number;
  forks?: number;
  openIssues?: number;
  license?: string;
}

export interface Project {
  id?: string;
  slug: string;
  title: string;
  shortDescription?: string;
  category: ProjectCategory[];
  projectType: string;
  domain?: ProjectDomain;
  type?: ProjectType;
  status: ProjectStatus;
  presentationLevel?: PresentationLevel;
  problem: string;
  solution?: string;
  system?: string;
  product?: string;
  outcome?: string;
  featured?: boolean;
  featuredSubheading?: string;
  isLatest?: boolean;
  year?: number | string;
  publishedAt?: string;
  updatedAt?: string;
  
  // Archive & Historical Layer
  archive?: ProjectArchiveMetadata;
  
  // Provenance & Source Evidence
  source?: ProjectSource;
  githubUrl?: string;
  githubRepo?: string;
  vercelUrl?: string;
  liveUrl?: string;
  documentationUrl?: string;
  repositoryStatus?: RepositoryStatus;
  deploymentStatus?: DeploymentStatus;
  repositoryUpdatedAt?: string;
  deploymentUpdatedAt?: string;
  sourceMetadata?: ProjectSourceMetadata;
  
  image?: string;
  technologies?: string[];
  tools?: string[];
  role?: string;
  team?: string;
  timeline?: string;
  context?: ProjectContext;
  deployment?: string;
  order?: number;
  relatedProjects?: string[];
  relatedResearch?: string[];
  relatedNotes?: string[];
  relatedLab?: string[];
  originatedFromLab?: string;
  caseStudy?: ProjectCaseStudy;
  dna?: Partial<ProjectDNAMetadata>;
}


