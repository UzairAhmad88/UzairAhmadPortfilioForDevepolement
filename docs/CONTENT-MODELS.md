# Content Models Specification

**Platform:** Uzair Ahmad — Personal Engineering & Research Platform  
**Phase:** 03 — Information Architecture + Content Architecture  
**Status:** Canonical Reference  

---

## 1. Project Content Model (`src/types/project.ts`)

```typescript
export interface Project {
  // Core Identity
  id?: string;
  slug: string;
  title: string;
  shortDescription?: string;
  
  // Taxonomies
  type?: 'Product' | 'System' | 'Research' | 'Academic' | 'Prototype' | 'Experiment';
  category: ('quant' | 'ai' | 'engineering' | 'product')[];
  domain?: string;
  topics?: string[];
  status: 'completed' | 'active' | 'research' | 'academic' | 'prototype' | 'archived';
  presentationLevel?: 'A' | 'B' | 'C' | 'D';
  
  // Editorial Overview
  problem: string;
  solution?: string;
  system?: string;
  product?: string;
  outcome?: string;
  featured?: boolean;
  featuredSubheading?: string;
  
  // Technical Specifications
  technologies?: string[];
  tools?: string[];
  role?: string;
  team?: string;
  timeline?: string;
  order?: number;
  
  // Provenance & Source Evidence
  source?: 'manual' | 'github' | 'vercel' | 'github+vercel';
  githubUrl?: string;
  githubRepo?: string;
  vercelUrl?: string;
  liveUrl?: string;
  documentationUrl?: string;
  repositoryStatus?: 'public' | 'private' | 'archived' | 'not_applicable';
  deploymentStatus?: 'production' | 'preview' | 'not_deployed' | 'unknown' | 'failed';
  
  // Relational Connections
  relatedProjects?: string[];   // Slugs of connected projects
  relatedResearch?: string[];   // Slugs of corresponding research inquiries
  relatedNotes?: string[];      // Slugs of relevant technical notes
  
  // Deep Case Study Engine
  caseStudy?: ProjectCaseStudy;
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
  challenges?: { challenge: string; solution: string }[];
  keyDecisions?: { decision: string; context?: string; rationale: string; tradeOff?: string }[];
  results?: { status: 'Implemented' | 'Measured' | 'Experimental'; description: string }[];
  outcomes?: string[];
  limitations?: string[];
  lessonsLearned?: string[];
  futureWork?: string[];
}
```

---

## 2. Research Content Model (`src/types/research.ts`)

```typescript
export interface ResearchItem {
  id: string;
  slug: string;
  badge: 'Exploring' | 'Experimenting' | 'Building';
  title: string;
  summary: string;
  
  // Taxonomies
  domain: 'Quantitative Finance' | 'Machine Learning & Time-Series' | 'Multi-Agent Systems' | 'Systems Architecture';
  topics?: string[];
  status: 'Exploring' | 'Experimenting' | 'Building' | 'Completed' | 'Archived';
  readingTime?: string;
  
  // Scientific Method Engine
  question: string;
  context: string;
  hypothesis: string;
  approach?: string;
  methodology: string[];
  mathematicalFormulation?: string;
  dataSources?: string[];
  experiments?: string[];
  findings?: { status: 'Confirmed' | 'Partial' | 'Inconclusive' | 'Active'; description: string }[];
  limitations: string[];
  conclusion?: string;
  nextSteps?: string[];
  references?: { citation: string; url?: string }[];
  
  // Relational Connections
  relatedProjects?: string[];   // Slugs of implemented project engines
  relatedResearch?: string[];   // Slugs of adjacent inquiries
  relatedNotes?: string[];
  githubUrl?: string;
  featured?: boolean;
}
```

---

## 3. Lab Entry Content Model (`src/types/lab.ts`)

```typescript
export interface LabEntry {
  slug: string;
  title: string;
  summary: string;
  type: 'Experiment' | 'Prototype' | 'Exploration' | 'Proof of Concept';
  topics: string[];
  status: 'Experiment' | 'Prototype' | 'Promoted to Work' | 'Archived';
  date: string;
  technologies: string[];
  
  // Lab Narrative
  objective: string;
  experimentDetails: string;
  result: string;
  keyLesson?: string;
  
  // Direct Evidence
  repositoryUrl?: string;
  demoUrl?: string;
  relatedWorkSlug?: string;
  relatedResearchSlug?: string;
}
```
