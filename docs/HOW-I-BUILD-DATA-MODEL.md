# How I Build Data Model Specification

## 1. Architecture & Schema Overview
The methodology data model is structured in `src/types/methodology.ts` and instantiated in `src/data/methodology.ts`.

---

## 2. Type Contracts

```typescript
export interface MethodologyStep {
  id: string;             // Unique identifier ('understand', 'model', etc.)
  number: string;         // Visual zero-padded index ('01', '02', etc.)
  title: string;          // Human-readable title
  tagline: string;        // Concise focus phrase
  shortDescription: string;
  description: string;
  questions: string[];    // Array of key questions asked during this phase
  practices: string[];    // Array of engineering practices applied
  artifacts: string[];    // Concrete outputs produced
  projectSlugs: string[]; // Valid slugs in src/data/projects.ts
}

export interface EngineeringDecisionPattern {
  id: string;
  title: string;
  context: string;
  decision: string;
  alternatives: string[];
  rationale: string;
  tradeoffs: string[];
  projectSlugs: string[];
}

export interface BuildPrinciple {
  id: string;
  title: string;
  statement: string;
  description: string;
  evidenceSlugs: string[];
}

export interface ProjectPathFlow {
  id: string;
  name: string;
  domain: string;
  projectSlug: string;
  description: string;
  steps: string[];
}

export interface MethodologyManifest {
  headline: string;
  subheading: string;
  philosophy: string;
  steps: MethodologyStep[];
  decisionPatterns: EngineeringDecisionPattern[];
  principles: BuildPrinciple[];
  pathFlows: ProjectPathFlow[];
}
```

---

## 3. Relationship & Integrity Rules
- `projectSlugs` and `evidenceSlugs` must strictly match real project slugs in `src/data/projects.ts`.
- Zero manual count typing: project counts and linkages are derived dynamically.
- Zero fake metrics or skill bars (e.g. no "React 95%", no arbitrary success percentages).
- All helper functions (`getMethodologyStep`, `getDecisionsForProject`, `getStepsForProject`) operate statically with zero runtime network overhead.
