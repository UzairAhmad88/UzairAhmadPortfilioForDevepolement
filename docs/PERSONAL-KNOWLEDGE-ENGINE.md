# Personal Knowledge Engine (Phase 30 Specification)

## 1. Primary Objective
The Personal Knowledge Engine transforms the platform from a collection of isolated pages into a coherent, interconnected, and deterministic **body of engineering and research knowledge**. It synthesizes canonical projects, hypotheses, mathematical formulations, workbench experiments, technical post-mortems, and technology stacks into contextual exploration pathways.

---

## 2. Core Architectural Distinction
- **Knowledge Graph (Phase 13):** Relationship data structure (`KnowledgeNode[]`, `KnowledgeEdge[]`).
- **Discovery (Phase 14):** Instant client-side search and faceted findability.
- **Personal Knowledge Engine (Phase 30):** Semantic interpretation layer that derives contextual pathways, topic normalization, and deterministic next-step recommendations from canonical data without duplicating content.

```text
┌────────────────────────────────────────────────────────┐
│             Canonical Sources of Truth                 │
│  Projects · Research · Notes · Lab · Tech · Timeline   │
└───────────────────────────┬────────────────────────────┘
                            │
                            ▼
┌────────────────────────────────────────────────────────┐
│              Knowledge Graph Layer (Phase 13)          │
│            nodes: KnowledgeNode[], edges: Edge[]       │
└───────────────────────────┬────────────────────────────┘
                            │
                            ▼
┌────────────────────────────────────────────────────────┐
│         Personal Knowledge Engine (Phase 30)           │
│  - resolveKnowledgeContext(nodeId)                     │
│  - curatedKnowledgePaths: KnowledgePath[]              │
│  - curatedKnowledgeClusters: KnowledgeCluster[]        │
│  - normalizeTopic(topic)                               │
└────────────────────────────────────────────────────────┘
```
