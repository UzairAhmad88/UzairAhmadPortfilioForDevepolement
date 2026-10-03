# KNOWLEDGE GRAPH SYSTEM & RELATIONAL LAYER
## Uzair Ahmad — Personal Engineering & Research Platform

---

## 1. Executive Summary & Purpose

The **Knowledge Graph System** (Phase 13) elevates the platform from an assortment of isolated pages into an interconnected, deterministic engineering knowledge network.

In a traditional developer portfolio:
- A project is an island.
- A research inquiry exists in a vacuum.
- A lab experiment is an unlinked script.
- A technical note is an isolated blog post.
- A technology is merely a badge on a homepage.

In this platform:
- Every **Project** connects to its underlying **Technologies**, **Research Inquiries**, **Lab Prototypes**, **Engineering Notes**, and **Methodology Steps**.
- Every **Research Inquiry** connects to empirical software implementations, validation experiments, and lessons learned.
- Every **Lab Experiment** connects to projects that graduated from it, algorithms tested, and discovery logs.
- Every **Engineering Note** documents real architecture decisions and technical tradeoffs from actual projects.
- Every **Technology** shows honest, verified references across the entire codebase.

---

## 2. Core Philosophy: Data Relationships First, Visual Graph Second

1. **Deterministic Build-Time Derivation:** The graph is constructed at build time directly from canonical sources of truth (`src/data/projects.ts`, `src/data/research.ts`, `src/data/lab.ts`, `src/data/notes.ts`, `src/data/technologies.ts`, `src/data/methodology.ts`).
2. **Zero Fabrication:** No artificial edges are introduced to make a visual graph look denser. Relationships reflect verified engineering connections.
3. **No AI Buzzwords:** The system is a deterministic relational graph engine, not a generative AI gimmick.
4. **Accessible by Default:** Visual SVG renderings are paired with an authoritative textual matrix and accessible relationship lists for screen readers and mobile viewports.
5. **No Quality Ranking:** The graph models relationships, not importance tiers, leaderboards, or vanity metrics.

---

## 3. High-Level Entity Flow

```
[LAB EXPERIMENT]
      │
      ▼ (ORIGINATED_FROM / PROMOTED_TO)
  [PROJECT] ──(USED_IN)──► [TECHNOLOGY]
      │                        │
      ▼ (DOCUMENTS)            │ (EXPLORES)
[ENGINEERING NOTE]             ▼
      │                   [RESEARCH]
      └─────────(INFORMED_BY)──┘
```

---

## 4. System Capabilities

- **Bidirectional Relational Traversal:** Ability to inspect direct incoming and outgoing connections for any entity with semantic labels (`USED_IN`, `EXPLORES`, `ORIGINATED_FROM`, `PROMOTED_TO`, `DOCUMENTS`, `INFORMED_BY`, `RELATED_TO`, `IMPLEMENTS`, `VALIDATES`, `USES_METHOD`).
- **Focus Mode & Deep-Linking:** URL state synchronization (`/knowledge?focus=project:slug` or `/knowledge?focus=technology:id`) with smooth focusing and inspector activation.
- **Universal Related Component (`RelatedKnowledgeGrid.astro`):** Drop-in component embedded across all detail pages (`/work/[slug]`, `/research/[slug]`, `/lab/[slug]`, `/notes/[slug]`, `/technology/[slug]`).
- **Automated Validation Suite:** Automated build-time validation ensuring zero dangling edges, zero missing nodes, and orphan detection.
