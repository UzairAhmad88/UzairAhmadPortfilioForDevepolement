# Knowledge Architecture, Discovery & Graph Engine

**Project:** Personal Developer Portfolio / Personal Engineering & Research Platform  
**Phase:** 34 — Final Engineering Documentation & Maintainability System  
**Engine Implementation:** `src/lib/knowledge/` & `src/lib/discovery/`  

---

## 1. Overview & System Purpose

The platform treats portfolio items not as isolated static documents, but as an **interconnected knowledge graph**. The Knowledge Architecture unifies four distinct functional subsystems:

1. **The Personal Knowledge Engine (`src/lib/knowledge/engine.ts`):** In-memory relationship graph resolving pathways and contextual recommendations across all entities.
2. **The Discovery Search Engine (`src/lib/discovery/index.ts`):** Client-side instant multi-facet token search index with real-time filtering and XSS-safe query highlighting.
3. **The Interactive Knowledge Graph (`src/pages/knowledge-graph.astro`):** 2D/3D physics-based force graph visualizer with a 100% accessible HTML semantic table fallback.
4. **Knowledge Clusters & Pathways (`src/pages/knowledge/index.astro`):** Curated thematic clusters grouping related research, case studies, and engineering notes.

---

## 2. Knowledge Engine Architecture & Algorithm

### Relationship Lifecycle Pipeline
```text
Entity Created in src/data/
        ↓
Assigned Stable Canonical ID
        ↓
Explicit Relationships Declared (technologies, relatedResearch, relatedNotes)
        ↓
Validation Suite Enforces Non-Dangling References (npm test)
        ↓
Knowledge Engine Graph Construction (Nodes & Typed Edges)
        ↓
Contextual Recommendations Computed (Similarity Weights)
        ↓
Rendered on Project, Research, and Tech Detail Pages
```

### Edge Types & Semantic Relationships
- **`uses`:** Project or Lab experiment utilizes a canonical Technology (e.g., `curasphere-hms` *uses* `postgresql`).
- **`informs`:** Research Inquiry provides theoretical foundations for a Case Study (e.g., `signal-research` *informs* `deep-learning-stock-return-prediction`).
- **`validates`:** Lab Workbench provides empirical verification for a Research Inquiry (e.g., `fractional-diff-cli` *validates* `signal-research`).
- **`documents`:** Engineering Note records implementation decisions of a Project (e.g., `async-sqlalchemy-session-lifecycle` *documents* `curasphere-hms`).
- **`extends`:** A project builds upon prior architectural patterns.

---

## 3. Discovery Search Engine Architecture

### Index Generation & Search Performance
- **Static Compilation:** During Astro SSG compilation, `src/lib/discovery/index.ts` traverses all projects, research items, notes, lab workbenches, and technologies to construct an optimized client-side search JSON payload (`search-index.json`).
- **Client Search Runtime:** Fast token-based filtering with sub-5ms query response times.
- **Multi-Facet Filtering:** Supports filtering simultaneously by Content Type (`project`, `research`, `note`, `lab`, `technology`), Stack Category, and Research Topic.
- **Safety Invariant:** Search query highlighting sanitizes user input through HTML entity encoding and strict regex escaping to prevent XSS injection attacks.

---

## 4. Accessibility & Fallback Standards

- **Visual Graph:** The canvas/WebGL visualizer is an enhancement. The site never relies on visual canvas rendering for essential navigation.
- **Accessible Text Alternative:** `/knowledge-graph` includes a fully navigable, keyboard-accessible semantic HTML data table detailing every node, type, URL, and connected edge.
