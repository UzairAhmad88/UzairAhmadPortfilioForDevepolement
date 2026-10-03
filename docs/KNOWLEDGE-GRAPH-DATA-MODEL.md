# KNOWLEDGE GRAPH DATA MODEL & SCHEMA SPECIFICATION
## Uzair Ahmad — Personal Engineering & Research Platform

---

## 1. Schema Definitions (`src/types/knowledge.ts`)

The Knowledge Graph layer operates on typed entities (`KnowledgeNode`) and directed relational links (`KnowledgeEdge`).

```typescript
export type KnowledgeNodeType =
  | 'project'
  | 'research'
  | 'lab'
  | 'note'
  | 'technology'
  | 'methodology';

export type KnowledgeRelationshipType =
  | 'USED_IN'          // Technology used in Project/Lab/Research
  | 'EXPLORES'         // Research explores a problem/tech
  | 'ORIGINATED_FROM'  // Project originated from a Lab experiment
  | 'PROMOTED_TO'      // Lab experiment graduated to a Project
  | 'DOCUMENTS'        // Note documents a lesson/failure from a Project/Lab/Research/Tech
  | 'INFORMED_BY'      // Project/Research informed by Note or Research
  | 'RELATED_TO'       // General meaningful relationship
  | 'IMPLEMENTS'       // Project implements a research inquiry/lab prototype
  | 'VALIDATES'        // Experiment validates a model/assumption
  | 'USES_METHOD';     // Entity utilizes a methodology step

export interface KnowledgeNode {
  id: string;          // Prefixed unique ID (e.g., 'project:deep-learning-stock-return-prediction')
  rawId: string;       // Original entity ID
  type: KnowledgeNodeType;
  title: string;
  slug: string;
  href: string;
  summary?: string;
  badge?: string;
  metadata?: Record<string, any>;
}

export interface KnowledgeEdge {
  id: string;          // Unique edge identifier
  source: string;      // Source node ID
  target: string;      // Target node ID
  relationship: KnowledgeRelationshipType;
  label: string;       // Human-readable relationship label
  bidirectional?: boolean;
  metadata?: Record<string, any>;
}

export interface KnowledgeGraph {
  nodes: KnowledgeNode[];
  edges: KnowledgeEdge[];
  generatedAt: string;
}

export interface GraphValidationReport {
  totalNodes: number;
  totalEdges: number;
  nodesByType: Record<KnowledgeNodeType, number>;
  edgesByRelationship: Record<KnowledgeRelationshipType, number>;
  orphanedNodeIds: string[];
  invalidEdgeIds: string[];
  warnings: string[];
  isValid: boolean;
}

export interface FocusedGraphView {
  focusNode: KnowledgeNode;
  directEdges: KnowledgeEdge[];
  connectedNodes: KnowledgeNode[];
  secondaryNodes?: KnowledgeNode[];
  secondaryEdges?: KnowledgeEdge[];
  groupedByType: Record<KnowledgeNodeType, KnowledgeNode[]>;
}
```

---

## 2. Canonical Identity Namespacing

To prevent collision across systems, every node is prefixed by its entity domain:
- `project:<slug>` (e.g., `project:deep-learning-stock-return-prediction`)
- `research:<slug>` (e.g., `research:signal-research`)
- `lab:<slug>` (e.g., `lab:fractional-diff-cli`)
- `note:<slug>` (e.g., `note:async-sqlalchemy-session-lifecycle`)
- `technology:<id>` (e.g., `technology:python`)
- `methodology:<id>` (e.g., `methodology:step-1`)

Edge IDs are constructed deterministically:
`edge:<sourceNodeId>-><targetNodeId>:<relationshipType>`
Example: `edge:project:curasphere-hms->technology:fastapi:USED_IN`
