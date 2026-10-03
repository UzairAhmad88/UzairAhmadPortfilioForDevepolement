# Lab Data Model & TypeScript Contracts

**Uzair Ahmad — Personal Engineering & Research Platform**  
**Phase 12 Specification**

---

## 1. Centralized TypeScript Interface

Located at `src/types/lab.ts`:

```typescript
import type { ProjectVisualization } from './visualization';

export type LabType =
  | 'Experiment'
  | 'Prototype'
  | 'Proof of Concept'
  | 'Technical Exploration'
  | 'Algorithm Experiment'
  | 'Data Experiment'
  | 'AI/ML Experiment'
  | 'Quant Experiment'
  | 'Architecture Experiment'
  | 'UI Experiment'
  | 'Tool'
  | 'Sandbox';

export type LabStatus =
  | 'Exploring'
  | 'Active'
  | 'Prototype'
  | 'Validating'
  | 'Paused'
  | 'Completed'
  | 'Archived'
  | 'Abandoned'
  | 'Idea';

export type ExperimentState = 'actual' | 'concept' | 'prototype' | 'planned';

export type ExperimentResultOutcome =
  | 'Confirmed'
  | 'Partially supported'
  | 'Not supported'
  | 'Inconclusive'
  | 'Demonstrated technically'
  | 'Requires further testing'
  | 'Abandoned'
  | 'No meaningful result yet';

export interface LabExternalReference {
  title: string;
  url: string;
  note?: string;
}

export interface LabCodeSnippet {
  language: string;
  title?: string;
  code: string;
  caption?: string;
}

export interface LabItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  type: LabType;
  status: LabStatus;
  state: ExperimentState;
  date: string;
  updatedAt?: string;
  year: string;
  technologies: string[]; // Canonical IDs from Phase 09
  topics: string[];
  featured?: boolean;
  coverImage?: string;
  thumbnail?: string;

  // Experimental Core
  question: string;
  intent?: string;
  hypothesis?: string;
  context: string;
  motivation?: string;
  experiment: string;
  implementation?: string;
  technicalDecisions?: string[];
  observations: string[];
  result: string;
  resultOutcome: ExperimentResultOutcome;
  limitations?: string[];
  nextStep?: string;
  lessonsLearned?: string[];

  // Evidence & Artifacts
  repositoryUrl?: string;
  liveDemoUrl?: string;
  documentationUrl?: string;
  externalReferences?: LabExternalReference[];
  visualizations?: ProjectVisualization[];
  codeSnippets?: LabCodeSnippet[];

  // Cross-System Relationships
  relatedProjects?: string[];     // Project slugs
  relatedResearch?: string[];     // Research slugs
  relatedNotes?: string[];        // Note slugs
  relatedTechnologies?: string[]; // Canonical tech IDs
  promotedToProject?: string;     // Project slug if promoted
}
```

---

## 2. Cross-System Entity Extensions

1. **`Project` (`src/types/project.ts`):**
   - `relatedLab?: string[]` — Slugs of related Lab experiments.
   - `originatedFromLab?: string` — Lab slug if this project evolved directly from a prototype.
2. **`ResearchItem` (`src/types/research.ts`):**
   - `relatedLab?: string[]` — Slugs of Lab experiments conducting empirical tests for this inquiry.
3. **`EngineeringNote` (`src/types/note.ts`):**
   - `relatedLab?: string[]` — Slugs of Lab experiments where debugging/architecture observations occurred.
4. **`Technology` (`src/types/technology.ts`):**
   - `labSlugs?: string[]` — Slugs of Lab experiments validating the technology.

---

## 3. Data Integrity & Validation

1. **Unique IDs and Slugs:** Guaranteed uniqueness across `src/data/lab.ts`.
2. **Bidirectional Referential Integrity:** Tested by `tests/unit/lab.test.ts`. Every referenced project slug, research slug, note slug, and technology ID must resolve to an existing entity.
3. **No Fabricated Data:** Prohibits artificial quality metrics, fake stars, or hypothetical benchmark figures.
