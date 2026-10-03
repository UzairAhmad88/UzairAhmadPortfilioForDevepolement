export type NoteType = 
  | 'Technical Note'
  | 'Debugging Note'
  | 'Architecture Note'
  | 'Decision Note'
  | 'Learning Note'
  | 'Implementation Note'
  | 'UX Note';

export type NoteTopic = 
  | 'Backend Architecture'
  | 'Quantitative Computing'
  | 'Machine Learning'
  | 'Multi-Agent Systems'
  | 'Frontend & Performance'
  | 'Software Architecture';

export type NoteStatus = 'PUBLISHED' | 'ARCHIVED' | 'DRAFT';

export interface NoteSection {
  heading: string;
  body: string;
  codeSnippet?: string;
  codeLang?: string;
  codeTitle?: string;
  mathFormula?: string;
}

export interface NoteSource {
  title: string;
  url?: string;
  author?: string;
  year?: number;
  type?: 'documentation' | 'paper' | 'standard' | 'book' | 'article';
}

export interface EngineeringNote {
  id: string;
  slug: string;
  title: string;
  summary: string;
  type: NoteType;
  status: NoteStatus;
  topic: NoteTopic;
  
  // Structured investigative narrative
  context?: string;
  problem?: string;
  observedError?: string;
  investigation?: string;
  solution?: string;
  tradeoffs?: string[];
  lessons?: string[];
  
  // Sectional body content
  sections: NoteSection[];
  
  // Cross-system relationships
  technologies: string[]; // Canonical IDs from Phase 09
  relatedProjects?: string[]; // Canonical project slugs from Phase 05
  relatedResearch?: string[]; // Canonical research slugs from Phase 10
  sources?: NoteSource[];
  
  // Metadata & Timestamps
  publishedAt: string;
  updatedAt?: string;
  readingTimeMinutes: number;
  featured?: boolean;
}
