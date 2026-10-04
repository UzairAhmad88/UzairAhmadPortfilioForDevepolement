# Knowledge Graph System & Relational Integrity

## 1. Graph Model & Topology

The Knowledge Graph (`src/lib/knowledge/graphBuilder.ts`) builds an in-memory relational graph connecting all platform entities:
- **Node Types**: `project`, `research`, `lab`, `note`, `technology`.
- **Node ID Format**: `<type>:<slug>` (e.g. `project:market-regime-engine`, `lab:gmm-regime-stability-probe`).
- **Edge Types**:
  - `USED_IN`: Technology utilized by an entity.
  - `RELATED_TO`: General bidirectional connection between projects, research, and lab items.
  - `PROMOTED_TO`: Prototype promoted to full production project.
  - `VALIDATES`: Empirical workbench experiment supporting theoretical research.
  - `DOCUMENTS`: Technical note explaining lessons from an experiment.

---

## 2. Structural Validation Invariants

The validator `validateKnowledgeGraph(graph)` verifies:
1. `isValid === true`: Zero missing target nodes or dangling edge references.
2. `invalidEdgeIds.length === 0`: Every edge resolves cleanly.
3. `totalNodes >= 30` and `totalEdges >= 50`.
4. Continuous automated enforcement via `tests/unit/knowledge-graph.test.ts`.
