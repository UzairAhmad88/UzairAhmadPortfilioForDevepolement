export type ProjectCategory = 'quant' | 'ai' | 'engineering' | 'product';

export type ProjectStatus = 'completed' | 'active' | 'research' | 'archived';

export interface ProjectCaseStudy {
  overview?: string;
  context?: string;
  objectives?: string[];
  role?: string;
  timeline?: string;
  approach?: string;
  architectureDiagram?: string;
  architectureNotes?: string;
  implementationHighlights?: string[];
  challenges?: { challenge: string; solution: string }[];
  keyDecisions?: { decision: string; rationale: string }[];
  outcomes?: string[];
  lessonsLearned?: string[];
}

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory[];
  projectType: string;
  problem: string;
  solution?: string;
  system?: string;
  product?: string;
  outcome?: string;
  featured?: boolean;
  featuredSubheading?: string;
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  technologies?: string[];
  tags?: string[];
  role?: string;
  timeline?: string;
  status?: ProjectStatus;
  order?: number;
  caseStudy?: ProjectCaseStudy;
}
