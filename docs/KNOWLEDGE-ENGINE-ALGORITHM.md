# Knowledge Engine Context Resolution Algorithm

## 1. Deterministic Multi-Tier Priority Resolution
When `resolveKnowledgeContext(nodeIdOrSlug, typeHint)` executes:

```text
Step 1: Entity Lookup (O(1) via Map/Find)
  │
Step 2: Collect Connected Edges & Nodes
  │     └─ Segment into relatedProjects, relatedResearch, relatedNotes, relatedLab, relatedTechnologies
  │
Step 3: Pathway Membership Filter
  │     └─ Identify curated pathways containing the target node
  │
Step 4: Deterministic Next Exploration Selection (Max 5 items)
  │     ├─ Priority 1 (Explicit Edges): Direct graph connections with human-readable labels
  │     └─ Priority 2 (Sequential Pathway Next Steps): Next chronological/methodological node
  │
Step 5: Output Immutable KnowledgeContext
```

---

## 2. Invariants
- **Zero Non-Deterministic Sorting:** Result ordering is fixed by edge declaration order and pathway sequence.
- **Zero Hidden AI Embeddings:** Calculated purely in TypeScript without floating-point similarity vectors.
