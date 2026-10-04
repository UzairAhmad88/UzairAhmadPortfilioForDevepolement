# Lab Archive & Lifecycle Curation

## 1. Lifecycle Policy for Experimental Work

The platform recognizes that experimental work moves through four distinct lifecycle phases:

```
[Exploring / Concept] ──► [Prototype / Active] ──► [Completed / Validated] ──► [Promoted / Archived]
```

### Policy Rules:
1. **Never Silently Delete**: If an experiment concludes or is superseded by a full project, it is retained as historical evidence rather than purged.
2. **Promoted Experiments**: Experiments that evolve into production applications (e.g. `gmm-regime-stability-probe` $\rightarrow$ `market-regime-engine`) retain explicit bidirectional lineage flags (`promotedToProject`).
3. **Archived / Historical State**: Inactive experiments that still provide educational or reference value remain discoverable under the Archive and Lab filters with explicit status markers.

---

## 2. Lab Lifecycle Inventory

| Lab Slug | Lifecycle State | Promotion Target | Archival Status | Preservation Rationale |
|:---|:---|:---|:---|:---|
| **`fractional-diff-cli`** | Completed | `deep-learning-stock-return-prediction` | Active Workbench | Documents optimal fixed-window fractional differencing mathematical proof. |
| **`streaming-orderbook-sse`** | Active Prototype | `deep-learning-stock-return-prediction` | Active Workbench | Serves as live architectural reference for SSE market feeds. |
| **`gmm-regime-stability-probe`** | Validating Prototype | `market-regime-engine` | Active Workbench | Documents deterministic variance sorting algorithm and lookback constraints. |
| **`multi-agent-pydantic-state-machine`** | Completed | `multi-agent-prospect-intelligence` | Active Workbench | Core reference for Pydantic type-guarded LangGraph state machines. |
| **`css-subgrid-editorial-alignment`** | Completed | Standardized Component | Active Workbench | Benchmark reference proving 0.00 CLS and zero-JS layout equalization. |
| **`stochastic-volatility-heston-calibration`** | Exploring Concept | — | Active Workbench | Documents Carr-Madan FFT inversion and Feller condition regularization challenges. |

---

## 3. Archive Integration

All Lab experiments are accessible through:
- `/lab` with dedicated status filters (`Completed`, `Active`, `Validating`, `Exploring`).
- `/archive` with chronological indexing and historical context.
- `/search` with full-text searchability.
