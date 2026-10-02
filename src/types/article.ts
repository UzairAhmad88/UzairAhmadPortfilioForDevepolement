export type ArticleType = 'Technical Explanation' | 'Deep Dive' | 'Tutorial' | 'Analysis' | 'Study Note';

export type ArticleTopic = 
  | 'Quantitative Finance'
  | 'Time Series & Forecasting'
  | 'Machine Learning'
  | 'Software Architecture'
  | 'Multi-Agent Systems';

export interface ArticleReference {
  citation: string;
  url?: string;
}

export interface ContentSection {
  heading: string;
  body: string;
  codeSnippet?: string;
  codeLang?: string;
  mathFormula?: string;
}

export interface Article {
  slug: string;
  title: string;
  summary: string;
  topic: ArticleTopic;
  type: ArticleType;
  publishedAt: string;
  updatedAt?: string;
  readingTimeMinutes: number;
  tags: string[];
  contentSections: ContentSection[];
  references?: ArticleReference[];
  relatedProjects?: string[];
  relatedResearch?: string[];
  featured?: boolean;
}
