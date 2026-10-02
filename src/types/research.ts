export type ResearchStatus = 'Exploring' | 'Experimenting' | 'Building' | 'Completed' | 'Archived';

export type ResearchDomain = 
  | 'Quantitative Finance'
  | 'Machine Learning & Time-Series'
  | 'Multi-Agent Systems'
  | 'Systems Architecture';

export interface ResearchFinding {
  status: 'Confirmed' | 'Partial' | 'Inconclusive' | 'Active';
  description: string;
}

export interface ResearchReference {
  citation: string;
  url?: string;
}

export interface ResearchItem {
  id: string;
  slug: string;
  badge: 'Exploring' | 'Experimenting' | 'Building';
  title: string;
  summary: string;
  domain: ResearchDomain;
  status: ResearchStatus;
  publishedAt?: string;
  updatedAt?: string;
  question: string;
  context: string;
  hypothesis: string;
  approach?: string;
  methodology: string[];
  mathematicalFormulation?: string;
  dataSources?: string[];
  experiments?: string[];
  findings?: ResearchFinding[];
  limitations: string[];
  conclusion?: string;
  nextSteps?: string[];
  references?: ResearchReference[];
  relatedProjects?: string[]; // Corresponding project slugs
  relatedResearch?: string[];
  githubUrl?: string;
  featured?: boolean;
}
