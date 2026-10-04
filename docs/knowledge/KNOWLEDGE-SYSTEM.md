# Knowledge Architecture: Graph vs. Engine vs. Discovery

## 1. System Distinctions

The platform divides knowledge management into three distinct, non-overlapping systems:

```
┌─────────────────────────────────────────────────────────────┐
│ 1. KNOWLEDGE GRAPH (src/lib/knowledge/graphBuilder.ts)      │
│    - Topology of typed nodes and directed edges             │
│    - Relational validation & acyclic lineage                │
└──────────────────────────────┬──────────────────────────────┘
                               │ Ingested by
┌──────────────────────────────▼──────────────────────────────┐
│ 2. KNOWLEDGE ENGINE (src/components/knowledge/)             │
│    - Deterministic 1-hop / 2-hop neighborhood exploration   │
│    - "What to Explore Next" contextual pathways             │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ 3. DISCOVERY SEARCH ENGINE (src/lib/discovery/)             │
│    - Full-text search index across titles, questions, text  │
│    - Multi-facet tokenized matching with alias expansion    │
└─────────────────────────────────────────────────────────────┘
```

---

## 2. Invariant Boundaries

- **Knowledge Graph**: Models structural connections (`USED_IN`, `VALIDATES`, `DOCUMENTS`, `PROMOTED_TO`).
- **Knowledge Engine**: Renders contextual recommendations based on graph connectivity.
- **Discovery**: Powers the global search bar on `/discover` and `/search`.
- **Anti-Pattern Prohibited**: Zero artificial machine-learning heuristics or user tracking algorithms are used.
