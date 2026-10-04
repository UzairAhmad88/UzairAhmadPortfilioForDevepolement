# Lab Knowledge Graph Integration

## 1. Overview

The **Knowledge Graph** (`src/lib/knowledge/graphBuilder.ts`) builds an in-memory, strongly typed relational representation of all entities on the platform. The Lab system is fully integrated as a first-class node category.

---

## 2. Lab Node Specification

Each Lab item produces a `KnowledgeNode` conforming to:

```typescript
interface KnowledgeNode {
  id: string;          // format: "lab:<slug>"
  type: 'lab';        // entity discriminator
  title: string;       // human-readable title
  slug: string;        // canonical URL slug
  href: string;        // canonical path: "/lab/<slug>"
  summary: string;     // excerpt of question & methodology
  technologies: string[]; // canonical tech IDs
  topics: string[];    // domain topic tags
  metadata: {
    status: string;    // 'Completed' | 'In Progress' | 'Prototype'
    date: string;      // ISO format YYYY-MM-DD
    type: string;      // ExperimentType
  };
}
```

---

## 3. Node Inventory

| Node ID | Node Title | Canonical Route | Degree (Edges) |
|:---|:---|:---|:---|
| `lab:streaming-orderbook-sse` | Streaming Orderbook SSE | `/lab/streaming-orderbook-sse` | 5 |
| `lab:gmm-regime-detection` | GMM Market Regime Detection | `/lab/gmm-regime-detection` | 7 |
| `lab:langgraph-state-machine` | LangGraph State Machine Architecture | `/lab/langgraph-state-machine` | 6 |
| `lab:wasm-parquet-parser` | WebAssembly In-Browser Parquet Parser | `/lab/wasm-parquet-parser` | 5 |
| `lab:fractional-differentiation` | Fractional Differentiation for Financial Time Series | `/lab/fractional-differentiation` | 6 |
| `lab:design-token-parser` | Design Token AST Parser & CSS Generator | `/lab/design-token-parser` | 5 |

---

## 4. Graph Edge Mapping

```
[lab:gmm-regime-detection]
  ├── (USED_IN) ──► [technology:python]
  ├── (USED_IN) ──► [technology:scikit-learn]
  ├── (USED_IN) ──► [technology:numpy]
  ├── (USED_IN) ──► [technology:pandas]
  ├── (PROMOTED_TO) ──► [project:market-regime-engine]
  ├── (VALIDATES) ──► [research:market-regimes]
  └── (DOCUMENTS) ◄── [note:gmm-state-flipping-variance-ordering]
```

```
[lab:langgraph-state-machine]
  ├── (USED_IN) ──► [technology:python]
  ├── (USED_IN) ──► [technology:langgraph]
  ├── (USED_IN) ──► [technology:pydantic]
  ├── (PROTOTYPES) ──► [project:multi-agent-prospect-intelligence]
  ├── (VALIDATES) ──► [research:agentic-systems]
  └── (DOCUMENTS) ◄── [note:deterministic-state-graph-pydantic-guardrails]
```

```
[lab:fractional-differentiation]
  ├── (USED_IN) ──► [technology:python]
  ├── (USED_IN) ──► [technology:numpy]
  ├── (USED_IN) ──► [technology:pandas]
  ├── (EXPLORES) ──► [project:deep-learning-stock-return-prediction]
  ├── (VALIDATES) ──► [research:signal-research]
  └── (DOCUMENTS) ◄── [note:fractional-differentiation-memory-stationarity]
```

---

## 5. Structural Validation Invariants

The `validateKnowledgeGraph(graph)` function validates the graph structure against five core invariants:
1. **Zero Dangling Edges**: Every `source` and `target` in every edge corresponds to a registered `KnowledgeNode`.
2. **Deterministic Identifiers**: Node IDs are collision-free and uniquely prefixed.
3. **Valid Edge Predicates**: Only allowable relationship verbs (`USED_IN`, `RELATED_TO`, `PROMOTED_TO`, etc.) are generated.
4. **No Fabricated Nodes**: Nodes correspond 1:1 with canonical data records in `src/data/`.
5. **Acyclic Lineage**: Lineage references (`promotedToProject`) form strict directed acyclic graphs.

---

## 6. Verification Status

Ran structural validation via `npm test`:
- Total Nodes: $\ge 30$
- Total Edges: $\ge 50$
- Invalid Edges: **0**
- Validation Result: **PASS**
