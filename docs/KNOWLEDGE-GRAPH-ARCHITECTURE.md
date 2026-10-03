# KNOWLEDGE GRAPH ARCHITECTURE & LIFECYCLE
## Uzair Ahmad — Personal Engineering & Research Platform

---

## 1. System Architecture Diagram

```
┌────────────────────────────────────────────────────────────────────────┐
│                        CANONICAL DATA SOURCES                          │
│                                                                        │
│   src/data/projects.ts         src/data/research.ts                    │
│   src/data/lab.ts              src/data/notes.ts                       │
│   src/data/technologies.ts     src/data/methodology.ts                 │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│                 KNOWLEDGE GRAPH BUILDER ENGINE                         │
│                    (src/lib/knowledge/graphBuilder.ts)                 │
│                                                                        │
│   • Extracts canonical nodes with typed prefixes                       │
│   • Normalizes technology string tokens to canonical IDs               │
│   • Constructs typed directed edges with semantic relationship types   │
│   • Deduplicates bidirectional edges via deterministic hashing         │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
                  ┌─────────────────┴─────────────────┐
                  │                                   │
                  ▼                                   ▼
┌───────────────────────────────────┐   ┌────────────────────────────────┐
│      GRAPH VALIDATION ENGINE      │   │    GRAPH QUERY UTILITIES       │
│  (validateKnowledgeGraph)         │   │                                │
│                                   │   │  • getNodeById                 │
│   • Zero broken endpoints check   │   │  • getNodeBySlug               │
│   • Orphan detection              │   │  • getDirectEdges              │
│   • Relational integrity report   │   │  • getConnectedNodes           │
│                                   │   │  • getFocusedGraph(id, depth)  │
└───────────────────────────────────┘   └────────────────┬───────────────┘
                                                         │
                        ┌────────────────────────────────┴────────────────────────────────┐
                        │                                                                 │
                        ▼                                                                 ▼
┌───────────────────────────────────────────────┐   ┌─────────────────────────────────────────────┐
│       PAGE-LEVEL INTEGRATION                  │   │        DEDICATED EXPLORATION PAGE           │
│                                               │   │                                             │
│  <RelatedKnowledgeGrid /> embedded in:        │   │  /knowledge & /knowledge-graph              │
│  • /work/[slug]                               │   │  • Interactive SVG network map              │
│  • /research/[slug]                           │   │  • Live Node Inspector side-drawer          │
│  • /lab/[slug]                                │   │  • Real-time search & type filter pills     │
│  • /notes/[slug]                              │   │  • Accessible Structured Relationship       │
│  • /technology/[slug]                         │   │    Directory                                │
└───────────────────────────────────────────────┘   └─────────────────────────────────────────────┘
```

---

## 2. Build-Time Static Generation

The knowledge graph is computed once at build time during Static Site Generation (SSG).
- **Zero Runtime Overhead:** No external graph database (Neo4j, Memgraph, etc.) is required.
- **Fast First Paint:** Clean static HTML with serialized JSON data payload for instant client-side interaction.
- **Edge Deployment Ready:** Compatible with Vercel edge deployment with sub-2s initial page loads.
