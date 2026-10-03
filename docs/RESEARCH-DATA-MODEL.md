# Research Data Model & TypeScript Schemas

## Schema Overview

The Research Platform is strictly typed in `src/types/research.ts` and centralized in `src/data/research.ts`.

```ts
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
  technologies?: string[]; // Canonical IDs from Phase 09 (e.g., 'python', 'pytorch')
  relatedProjects?: string[]; // Canonical project slugs from Phase 05
  relatedResearch?: string[]; // Slugs of related research items
  references?: ResearchReference[];
  githubUrl?: string;
  featured?: boolean;
}
```

---

## Field Descriptions & Validation Rules

| Field | Type | Requirement | Description |
| :--- | :--- | :--- | :--- |
| `id` / `slug` | `string` | Mandatory | Unique URL-safe identifier (e.g. `signal-research`). |
| `question` | `string` | Mandatory | The prominent inquiry anchoring the investigation. |
| `hypothesis` | `string` | Mandatory | Working falsifiable premise before experimental testing. |
| `experimentsList` | `ResearchExperiment[]` | Mandatory | Array of controlled empirical tests with observed results. |
| `findings` | `ResearchFinding[]` | Mandatory | Structured findings tagged with epistemic status. |
| `interpretation` | `string` | Mandatory | Explicit technical synthesis separate from raw results. |
| `limitations` | `string[]` | Mandatory | Documented sample, regime, or compute constraints. |
| `openQuestions` | `string[]` | Mandatory | Unresolved questions under active ongoing investigation. |
| `technologies` | `string[]` | Mandatory | Valid canonical technology IDs from Phase 09. |
| `relatedProjects` | `string[]` | Optional | Valid project slugs from Phase 05 demonstrating application. |
