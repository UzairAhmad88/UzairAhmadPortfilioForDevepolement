# Lab Relationship Integration Matrix

## 1. Relationship Semantics

The platform supports explicit relationship predicates linking Lab experiments with other platform entities:

| Relationship Type | Source | Target | Semantic Meaning |
|:---|:---|:---|:---|
| `PROMOTED_TO` | Lab | Project | The experiment served as the core prototype that evolved into a production project. |
| `EXPLORES` / `PROTOTYPES` | Lab | Project | The experiment evaluates a sub-component, architectural pattern, or ingest layer for the project. |
| `VALIDATES` | Lab | Research | The experiment provides empirical benchmarking or proof-of-concept for a research inquiry. |
| `DOCUMENTS` | Note | Lab | The engineering note explains mathematical or implementation lessons derived from the experiment. |
| `USED_IN` | Technology | Lab | The technology is utilized as an active part of the experiment's implementation. |

---

## 2. Canonical Cross-System Relationship Matrix

| Lab Item (`slug`) | Connected Projects | Connected Research | Connected Notes | Key Technologies |
|:---|:---|:---|:---|:---|
| **`streaming-orderbook-sse`** | `deep-learning-stock-return-prediction` | `signal-research` | `zero-layout-shift-ssg-design-tokens` | `typescript`, `fastapi`, `python` |
| **`gmm-regime-detection`** | `market-regime-engine` (Promoted) | `market-regimes` | `gmm-state-flipping-variance-ordering` | `python`, `scikit-learn`, `numpy`, `pandas` |
| **`langgraph-state-machine`** | `multi-agent-prospect-intelligence` | `agentic-systems` | `deterministic-state-graph-pydantic-guardrails` | `python`, `langgraph`, `pydantic` |
| **`wasm-parquet-parser`** | `deep-learning-stock-return-prediction` | `signal-research` | `zero-layout-shift-ssg-design-tokens` | `typescript`, `web-technologies` |
| **`fractional-differentiation`** | `deep-learning-stock-return-prediction` | `signal-research` | `fractional-differentiation-memory-stationarity` | `python`, `numpy`, `pandas` |
| **`design-token-parser`** | `personal-portfolio-v2` | — | `zero-layout-shift-ssg-design-tokens` | `typescript`, `html5-css3`, `astro` |

---

## 3. Bidirectional Verification

| Source Entity | Target Entity | Direction | Verification Status |
|:---|:---|:---|:---|
| `lab:streaming-orderbook-sse` | `project:deep-learning-stock-return-prediction` | Bidirectional | **VERIFIED** |
| `lab:gmm-regime-detection` | `project:market-regime-engine` | Bidirectional (`PROMOTED_TO`) | **VERIFIED** |
| `lab:langgraph-state-machine` | `project:multi-agent-prospect-intelligence` | Bidirectional | **VERIFIED** |
| `lab:wasm-parquet-parser` | `project:deep-learning-stock-return-prediction` | Bidirectional | **VERIFIED** |
| `lab:fractional-differentiation` | `project:deep-learning-stock-return-prediction` | Bidirectional | **VERIFIED** |
| `lab:design-token-parser` | `project:personal-portfolio-v2` | Bidirectional | **VERIFIED** |
| `lab:gmm-regime-detection` | `research:market-regimes` | Bidirectional | **VERIFIED** |
| `lab:langgraph-state-machine` | `research:agentic-systems` | Bidirectional | **VERIFIED** |
| `lab:fractional-differentiation` | `note:fractional-differentiation-memory-stationarity` | Bidirectional | **VERIFIED** |
| `lab:gmm-regime-detection` | `note:gmm-state-flipping-variance-ordering` | Bidirectional | **VERIFIED** |
| `lab:langgraph-state-machine` | `note:deterministic-state-graph-pydantic-guardrails` | Bidirectional | **VERIFIED** |

---

## 4. Anti-Fabrication Rule

All relationships above represent actual technical connections in the platform's codebase and architecture. No synthetic associations have been created to fill empty slots.
