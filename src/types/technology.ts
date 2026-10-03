export type TechnologyCategory =
  | 'languages'
  | 'ai-ml'
  | 'data-quant'
  | 'frontend'
  | 'backend'
  | 'databases'
  | 'tools-devops';

export type TechnologyStatus =
  | 'core'
  | 'recurring'
  | 'specialized'
  | 'research';

export interface Technology {
  id: string;
  name: string;
  categories: TechnologyCategory[];
  tagline: string;
  description: string;
  primaryRole: string;
  status: TechnologyStatus;
  methodologySteps?: string[];
  projectSlugs: string[];
  researchSlugs?: string[];
  noteSlugs?: string[];
  aliases?: string[];
  website?: string;
  documentationUrl?: string;
}

export interface TechnologyCategoryMeta {
  id: TechnologyCategory;
  name: string;
  description: string;
  order: number;
}
