# PROJECT VISUALIZATION DATA MODEL (PHASE 07)
## TypeScript Schemas, Node Role Taxonomy & Connector Contracts

> **Platform:** Uzair Ahmad — Personal Engineering & Research Platform  
> **Status:** Active / Production Specification  
> **Phase:** 07 — Project Visualization System  

---

## 1. TYPESCRIPT INTERFACES (`src/types/visualization.ts`)

```typescript
export type VisualizationType = 
  | 'architecture'
  | 'pipeline'
  | 'state-graph'
  | 'system-flow'
  | 'process-flow';

export type VisualizationStatus = 'actual' | 'prototype' | 'conceptual';

export type NodeRole = 
  | 'input' 
  | 'process' 
  | 'model' 
  | 'guardrail' 
  | 'storage' 
  | 'output' 
  | 'router';

export interface VisualizationNode {
  id: string;
  label: string;
  subLabel?: string;
  role?: NodeRole;
  badge?: string;
  details?: string[];
}

export interface VisualizationConnector {
  from: string;
  to: string;
  label?: string;
  type?: 'directed' | 'bidirectional' | 'fallback';
}

export interface ProjectVisualization {
  id: string;
  type: VisualizationType;
  title: string;
  caption?: string;
  status: VisualizationStatus;
  description?: string;
  sourceEvidence?: string;
  nodes: VisualizationNode[];
  connectors?: VisualizationConnector[];
  textAlternative?: string;
}
```

---

## 2. NODE ROLE TAXONOMY

Each node is categorized into an explicit functional role that drives its architectural semantics and visual accent styling:

1. **`input` (Ingestion & Feed):**  
   External market feeds, client browser requests, raw tick logs, or prompt parameters.
2. **`process` (Transformation & State):**  
   Stationarized feature transformations, rolling moment calculations, or Express controller routes.
3. **`model` (Model & Inference):**  
   PyTorch deep learning neural layers, LangGraph LLM agent graphs, or unsupervised GMM/HMM clustering engines.
4. **`guardrail` (Guardrail & Contract):**  
   Deterministic validation layers (Pydantic, JSON Schema, JWT Auth guards) ensuring schema consistency and preventing hallucinations.
5. **`storage` (Persistence & Cache):**  
   PostgreSQL relational databases, local state stores, or memory caches.
6. **`output` (Evaluation & Presentation):**  
   Walk-forward risk backtest metrics, live interactive decision dashboards, or ticket dispatch outputs.
7. **`router` (Orchestrator & Router):**  
   State graph routers, orchestrators, and conditional branching nodes.

---

## 3. INTEGRATION WITH CASE STUDY MODEL

Defined in `src/types/project.ts`:
```typescript
export interface ProjectCaseStudy {
  // ...
  visualizations?: ProjectVisualization[];
  architectureDiagram?: string;
  architectureNotes?: string;
}
```
All visualizations are embedded directly in `src/data/projects.ts`, maintaining strict data/UI separation.
