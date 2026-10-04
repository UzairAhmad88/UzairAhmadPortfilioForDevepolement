# Lab Visual Artifact Data Model & Schema Specification

**Project:** Personal Engineering & Research Platform  
**File Reference:** `src/types/labArtifact.ts` & `src/data/labArtifacts.ts`  
**Status:** Validated & Frozen  

---

## 1. TypeScript Interface Schema

```typescript
export type ArtifactType =
  | 'ARCHITECTURE'
  | 'SYSTEM_FLOW'
  | 'DATA_FLOW'
  | 'PIPELINE'
  | 'EXPERIMENT_FLOW'
  | 'ALGORITHM'
  | 'STATE_GRAPH'
  | 'UI_SCREENSHOT'
  | 'TECHNICAL_SCREENSHOT'
  | 'CHART'
  | 'GRAPH'
  | 'CODE_OUTPUT'
  | 'COMPARISON'
  | 'BEFORE_AFTER';

export type EvidenceState =
  | 'actual'
  | 'prototype'
  | 'concept'
  | 'simulation'
  | 'planned';

export interface ArtifactNode {
  id: string;
  label: string;
  subLabel?: string;
  role?: 'input' | 'process' | 'model' | 'guardrail' | 'storage' | 'output' | 'router';
  badge?: string;
  details?: string[];
}

export interface ComparisonTrack {
  name: string;
  metricA: string;
  metricB: string;
  delta: string;
  verdict?: 'advantage' | 'neutral' | 'drawback';
}

export interface ArtifactVisualPayload {
  kind: 'nodes' | 'chart' | 'comparison' | 'code-output' | 'custom-svg';
  nodes?: ArtifactNode[];
  comparisonTracks?: ComparisonTrack[];
  chartData?: ChartDataPoint[];
}

export interface LabVisualArtifact {
  id: string;
  experimentSlug: string;
  type: ArtifactType;
  title: string;
  subtitle?: string;
  description: string;
  evidenceState: EvidenceState;
  sourceEvidence?: string;
  
  // Interpretation & Context
  whatThisShows: string;
  whatToNotice?: string;
  caption: string;
  textAlternative: string;

  // Visual Payload
  visual: ArtifactVisualPayload;

  // Metadata & Cross-System Relations
  date?: string;
  technologies?: string[];
  relatedProject?: string;
  relatedResearch?: string;
  relatedNote?: string;
}
```

---

## 2. Relational Integrity Contracts

- **Experiment Relation:** `artifact.experimentSlug` must exist in `src/data/lab.ts`.
- **Project Relation:** If defined, `artifact.relatedProject` must exist in `src/data/projects.ts`.
- **Research Relation:** If defined, `artifact.relatedResearch` must exist in `src/data/research.ts`.
- **Note Relation:** If defined, `artifact.relatedNote` must exist in `src/data/notes.ts`.
- **Technology Relations:** If defined, all `artifact.technologies` must exist in `src/data/technologies.ts`.
- **Zero Fabrication Guarantee:** No `rating`, `qualityScore`, or fake quantitative metrics are allowed in artifact payloads.
