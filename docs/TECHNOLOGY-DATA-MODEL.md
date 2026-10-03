# Technology Data Model Specification

## 1. Schema Overview
The Technology data model is defined in `src/types/technology.ts` and populated in `src/data/technologies.ts`.

---

## 2. TypeScript Contracts

```typescript
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
  id: string;                      // Canonical URL-safe slug ('python', 'pytorch')
  name: string;                    // Canonical display name ('Python', 'PyTorch')
  categories: TechnologyCategory[];// Multi-category classifications
  tagline: string;                 // Concise editorial summary
  description: string;             // Detailed architectural usage context
  primaryRole: string;             // Specific engineering responsibility
  status: TechnologyStatus;        // Factual usage status (core/recurring/etc.)
  methodologySteps?: string[];     // Associated stages in How I Build system
  projectSlugs: string[];          // Valid slugs in src/data/projects.ts
  researchSlugs?: string[];        // Valid slugs in src/data/research.ts
  aliases?: string[];              // Normalized aliases ('ReactJS', 'React.js')
  website?: string;                // Official external link
  documentationUrl?: string;       // Official documentation reference
}

export interface TechnologyCategoryMeta {
  id: TechnologyCategory;
  name: string;
  description: string;
  order: number;
}
```

---

## 3. Data Integrity & Validation Rules
- **Unique Slugs:** `id` values are lowercase, hyphenated, and strictly unique.
- **Evidence Integrity:** Every slug in `projectSlugs` and `researchSlugs` must exist in `src/data/projects.ts` and `src/data/research.ts`.
- **No Self-Ratings:** Zero numeric skill percentages (`80%`, `95%`), star ratings, or arbitrary competence labels.
- **Normalization:** Known aliases (`ReactJS`, `NodeJS`, `TS`, `sklearn`) resolve to canonical entities via `getTechnologyById(id)`.
