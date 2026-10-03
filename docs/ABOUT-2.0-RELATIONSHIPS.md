# About 2.0 System — Cross-Platform Relationships Specification

## 1. Relational Map

The About page serves as the narrative hub connecting all specialized platform systems:

```
                            ABOUT 2.0 PAGE (/about)
                                       │
      ┌────────────────┬───────────────┼───────────────┬────────────────┐
      ▼                ▼               ▼               ▼                ▼
   PROJECTS        RESEARCH           LAB            NOTES          TIMELINE
 (/work/[slug]) (/research/[slug]) (/lab/[slug]) (/notes/[slug])   (/timeline)
      │                │               │               │                │
      └────────────────┴───────────────┼───────────────┴────────────────┘
                                       ▼
                             KNOWLEDGE GRAPH & DISCOVERY
                             (/knowledge & /discover)
```

---

## 2. Integrated System Endpoints

| Platform System | Relational Role on About Page | Target Endpoint |
|---|---|---|
| **Work / Projects** | Featured showcase of verified full-stack & quant systems | `/work` and `/work/[slug]` |
| **Research Platform** | Focus area evidence and empirical model inquiry links | `/research` and `/research/[slug]` |
| **Lab Workbench** | Practical algorithmic experiment links | `/lab` and `/lab/[slug]` |
| **Engineering Notes** | Deep-dive concurrency and debugging references | `/notes` and `/notes/[slug]` |
| **How I Build** | Comprehensive methodology exploration | `/how-i-build` |
| **Currently (Phase 04)** | Dynamic workbench snapshot (Building, Learning, Exploring) | Embedded summary on `/about` |
| **Project Archive (Phase 18)** | Historical gateway to legacy software | `/archive` |
| **Engineering Timeline (Phase 19)** | Gateway to complete chronological milestone record | `/timeline` |
| **Contact (Phase 22 Preview)** | Collaboration and technical inquiry CTA | `/contact` |
