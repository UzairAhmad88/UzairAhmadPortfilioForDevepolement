# 📊 Signature Interaction Data Model

## Core Data Schema

### 1. `EngineeringLensId`
```ts
export type EngineeringLensId = 
  | 'architecture'
  | 'constraints'
  | 'implementation'
  | 'evidence'
  | 'tradeoffs'
  | 'connections';
```

### 2. `EngineeringLensMetadata`
```ts
export interface EngineeringLensMetadata {
  id: EngineeringLensId;
  name: string;
  tagline: string;
  badge: string;
  icon: string;
  description: string;
  question: string;
}
```

### 3. `SignatureInteractionPayload`
```ts
export interface SignatureInteractionPayload {
  projectSlug: string;
  projectTitle: string;
  domain: string;
  category: string;
  status: string;
  shortDescription: string;
  lenses: {
    architecture: LensArchitectureContent;
    constraints: LensConstraintsContent;
    implementation: LensImplementationContent;
    evidence: LensEvidenceContent;
    tradeoffs: LensTradeoffsContent;
    connections: LensConnectionsContent;
  };
}
```

---

## Canonical Mapping Rules
- `lenses.architecture`: Maps `caseStudy.architectureNotes`, `caseStudy.approach`, and execution pipeline stages.
- `lenses.constraints`: Maps `project.problem`, formal causality and variance bounds, and operational latency budgets.
- `lenses.implementation`: Maps `project.technologies` to canonical `technologies.ts` records and renders code/schema contracts.
- `lenses.evidence`: Resolves results from `caseStudy.results`, verifies against `src/lib/github/evidence.ts` and `src/lib/vercel/evidence.ts`.
- `lenses.tradeoffs`: Maps `caseStudy.keyDecisions`, `caseStudy.challenges`, `caseStudy.limitations`, and `caseStudy.lessonsLearned`.
- `lenses.connections`: Resolves bidirectional links to `researchItems`, `labItems`, `engineeringNotes`, and `project.archive` lineage.
