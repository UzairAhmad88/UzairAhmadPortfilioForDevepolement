# Research Taxonomy & Classification Guide

## 1. Controlled Research Domains

| Domain | Description | Scope & Focus |
| :--- | :--- | :--- |
| **Quantitative Finance** | Mathematical modeling of asset price distributions, stationarity transformations, volatility surfaces, and multi-horizon market forecasting. | Fractional calculus, ADF/KPSS testing, realized volatility moments, Garman-Klass variance. |
| **Machine Learning & Time-Series** | Recurrent and attention-based neural network architectures trained on sequential historical data. | LSTM, GRU, sequence length tuning, gradient stability, walk-forward cross-validation. |
| **Multi-Agent Systems** | Directed state graphs, runtime JSON schema validation, and deterministic guardrails for autonomous LLMs. | LangGraph topologies, Pydantic runtime boundaries, circuit breakers, structured extraction. |
| **Systems Architecture** | High-performance, distributed, and deterministic backend pipelines supporting data intensive workflows. | Asynchronous concurrency, task queues, caching strategies, audit tracing. |

---

## 2. Research Status Lifecycle

```text
  [ Exploring ] ──► [ Experimenting ] ──► [ Building ] ──► [ Completed ]
        │                   │                   │
        ▼                   ▼                   ▼
  [ Inconclusive ]    [ Inconclusive ]    [ Archived ]
```

- **Exploring:** Initial hypothesis formulation, literature review, and mathematical feasibility analysis.
- **Experimenting:** Active empirical testing, parameter grid searches, walk-forward validation runs.
- **Building:** Implementation of validated research findings into working software modules or library components.
- **Completed:** Concluded investigation with documented empirical results, confirmed findings, and published code.
- **Inconclusive:** Falsified hypothesis or empirical test where data yielded no statistically significant edge.
- **Archived:** Historical investigation superseded by newer architectures or alternative methodology.

---

## 3. Experiment Status Taxonomy

- **Planned:** Formulated objective and variable controls awaiting dataset run.
- **Running:** Computational backtesting or training pipeline currently executing.
- **Completed:** Results observed, metrics recorded, and interpretation synthesized.
- **Inconclusive:** Variance too high or insufficient sample support to confirm hypothesis.
- **Failed:** Structural breakdown, computational divergence, or fatal hypothesis contradiction.
