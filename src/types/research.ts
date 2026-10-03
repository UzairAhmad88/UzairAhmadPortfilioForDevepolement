export type ResearchStatus = 
  | 'Exploring' 
  | 'Experimenting' 
  | 'Building' 
  | 'Completed' 
  | 'Inconclusive' 
  | 'Archived';

export type ResearchDomain = 
  | 'Quantitative Finance'
  | 'Machine Learning & Time-Series'
  | 'Multi-Agent Systems'
  | 'Systems Architecture';

export type ExperimentStatus = 
  | 'Planned' 
  | 'Running' 
  | 'Completed' 
  | 'Inconclusive' 
  | 'Failed';

export interface ResearchExperiment {
  id: string;
  title: string;
  objective: string;
  method?: string;
  variables?: string[];
  results?: string[];
  interpretation?: string;
  status: ExperimentStatus;
}

export interface ResearchFinding {
  status: 'Confirmed' | 'Partial' | 'Inconclusive' | 'Active';
  description: string;
  metric?: string;
}

export interface ResearchReference {
  citation: string;
  url?: string;
  author?: string;
  year?: number;
  type?: 'paper' | 'book' | 'documentation' | 'dataset' | 'code';
}

export interface ResearchMethodStage {
  stage: string;
  title: string;
  description: string;
  tools?: string[];
}

export interface ResearchItem {
  id: string;
  slug: string;
  badge: 'Exploring' | 'Experimenting' | 'Building' | 'Completed';
  title: string;
  summary: string;
  domain: ResearchDomain;
  status: ResearchStatus;
  publishedAt?: string;
  updatedAt?: string;
  
  // Core scientific inquiry
  question: string;
  context: string;
  motivation?: string;
  hypothesis: string;
  approach?: string;
  
  // Structured methodology & formulation
  methodology: string[];
  methodologyStages?: ResearchMethodStage[];
  mathematicalFormulation?: string;
  dataSources?: string[];
  
  // Empirical testing & evidence
  experiments?: string[];
  experimentsList?: ResearchExperiment[];
  findings?: ResearchFinding[];
  interpretation?: string;
  
  // Epistemic uncertainty & limits
  limitations: string[];
  openQuestions?: string[];
  conclusion?: string;
  nextSteps?: string[];
  
  // Cross-system relationships
  technologies?: string[]; // Canonical IDs from Phase 09 (e.g., 'python', 'pytorch', 'pandas')
  relatedProjects?: string[]; // Canonical project slugs from Phase 05
  relatedResearch?: string[]; // Slugs of related research items
  relatedNotes?: string[]; // Slugs of related engineering notes from Phase 11
  relatedLab?: string[]; // Slugs of related lab experiments from Phase 12
  references?: ResearchReference[];
  githubUrl?: string;
  featured?: boolean;
}
