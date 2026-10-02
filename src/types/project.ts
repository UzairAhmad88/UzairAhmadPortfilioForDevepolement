export type ProjectCategory = 'quant' | 'ai' | 'engineering' | 'product';

export type ProjectStatus = 'completed' | 'active' | 'research' | 'archived';

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
  status?: ProjectStatus;
  order?: number;
}
