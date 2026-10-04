# Knowledge Truth Audit (Phase 32)

## 1. Relational Integrity & Causality Verification

The Knowledge Engine (`src/lib/knowledge/engine.ts`) models relationships between Projects, Research Inquiries, Engineering Notes, Lab Workbench items, and Technologies. Every edge was audited to prevent false causality or ungrounded historical assertions:

| Source Entity | Target Entity | Relationship Type | Grounding Evidence | Integrity Status |
| :--- | :--- | :--- | :--- | :--- |
| **`stock-return-prediction`** | `signal-research` | `RESEARCHED_IN` | Mathematical fractional differencing and stationarity feature research directly power the PyTorch prediction pipeline. | VERIFIED |
| **`stock-return-prediction`** | `fractional-diff-cli` | `ORIGINATED_FROM_LAB` | Algorithm was first prototyped as an isolated CLI tool before integration into the deep learning pipeline. | VERIFIED |
| **`stock-return-prediction`** | `fractional-differentiation-memory-stationarity` | `DOCUMENTED_IN_NOTE` | Technical note documents the mathematical justification and ADF test thresholds. | VERIFIED |
| **`market-regime-engine`** | `market-regimes` | `RESEARCHED_IN` | Unsupervised GMM clustering research directly establishes the volatility regime detection engine. | VERIFIED |
| **`market-regime-engine`** | `gmm-regime-stability-probe` | `ORIGINATED_FROM_LAB` | Empirical probe tested covariance matrix stability before full engine implementation. | VERIFIED |
| **`market-regime-engine`** | `gmm-state-flipping-variance-ordering` | `DOCUMENTED_IN_NOTE` | Engineering note explains the variance-ordering fix for label flipping. | VERIFIED |
| **`multi-agent-prospect-intelligence`** | `agentic-systems` | `RESEARCHED_IN` | Bounded execution graph research forms the core of the Final Year Project architecture. | VERIFIED |
| **`multi-agent-prospect-intelligence`** | `multi-agent-pydantic-state-machine` | `ORIGINATED_FROM_LAB` | Lab prototype benchmarked finite state machines with Pydantic validation. | VERIFIED |
| **`multi-agent-prospect-intelligence`** | `deterministic-state-graph-pydantic-guardrails` | `DOCUMENTED_IN_NOTE` | Engineering note details cycle prevention and runtime validation contracts. | VERIFIED |
| **`curasphere-hms`** | `rbac-relational-integrity-emr-systems` | `DOCUMENTED_IN_NOTE` | Note records the multi-role relational security model implemented in CuraSphere. | VERIFIED |

---

## 2. Inferred Relationships & Domain Clusters
- **Curated Clusters**: Grouped strictly by technical affinity (`Quantitative Systems & Financial Engineering`, `Artificial Intelligence & Agentic Systems`, `Distributed Web & Platform Engineering`, `Applied Algorithmic Research & Tooling`).
- **No False Causal Links**: Technologies shared across projects (e.g. Python used in both Stock Prediction and Multi-Agent Prospect Intelligence) are documented as shared technology usage (`USES`), **not** as direct architectural parentage.
- **Bi-Directional Consistency**: All forward links (`relatedResearch`, `relatedNotes`, `relatedLab`) resolve cleanly with reciprocal references in target entities.
