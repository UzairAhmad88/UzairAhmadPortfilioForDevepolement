# Project Data Model Specification

This document defines the complete TypeScript interfaces, validation contracts, and field definitions governing all project content.

---

## 1. Complete Interface Reference

```typescript
export type ProjectCategory = 'quant' | 'ai' | 'engineering' | 'product';

export type ProjectType = 'Product' | 'System' | 'Research' | 'Academic' | 'Prototype' | 'Experiment';

export type ProjectDomain = 
  | 'Quantitative Finance'
  | 'Machine Learning & AI'
  | 'Full-Stack Engineering'
  | 'Systems & Automation'
  | 'Multi-Agent Intelligence';

export type ProjectStatus = 'completed' | 'active' | 'research' | 'academic' | 'prototype' | 'archived';

export type PresentationLevel = 'A' | 'B' | 'C' | 'D';

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
  implementationHighlights?: string[];
  challenges?: TechnicalChallenge[];
  keyDecisions?: TechnicalDecision[];
  results?: ProjectResult[];
  outcomes?: string[];
  limitations?: string[];
  lessonsLearned?: string[];
  futureWork?: string[];
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
  githubUrl?: string;
  liveUrl?: string;
  documentationUrl?: string;
  image?: string;
  technologies?: string[];
  tools?: string[];
  role?: string;
  team?: string;
  timeline?: string;
  order?: number;
  relatedProjects?: string[];
  relatedResearch?: string[];
  caseStudy?: ProjectCaseStudy;
}
```
