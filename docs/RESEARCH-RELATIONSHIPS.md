# Research Cross-System Relationships & Knowledge Graph

## Relationship Topology

The Research Platform forms an interconnected triad with the **Project System (Phase 05)**, **How I Build Methodology (Phase 08)**, and the **Technology System (Phase 09)**:

```text
               ┌──────────────────────────────┐
               │    RESEARCH INVESTIGATION    │
               │   (Hypothesis & Evidence)    │
               └──────────────┬───────────────┘
                              │
             ┌────────────────┼────────────────┐
             ▼                                 ▼
┌─────────────────────────┐       ┌─────────────────────────┐
│     PROJECT SYSTEM      │       │    TECHNOLOGY SYSTEM    │
│  (Engineered Software)  │       │ (Canonical Tech Entity) │
└────────────┬────────────┘       └────────────┬────────────┘
             │                                 │
             └────────────────┬────────────────┘
                              ▼
               ┌──────────────────────────────┐
               │         HOW I BUILD          │
               │     (Decision & Process)     │
               └──────────────────────────────┘
```

---

## 1. Research ↔ Project Relationships

| Research Item | Relationship | Linked Project(s) | Role & Implementation |
| :--- | :--- | :--- | :--- |
| `signal-research` | Direct Predecessor & Feature Engine | `deep-learning-stock-return-prediction`, `market-regime-engine` | Fractional differencing and stationarity checks serve as the primary feature preprocessing pipeline for PyTorch return models. |
| `market-regimes` | Algorithmic Risk Subsystem | `market-regime-engine`, `deep-learning-stock-return-prediction` | Unsupervised Gaussian Mixture Clustering generates dynamic state indicators to throttle trading exposure during high volatility. |
| `agentic-systems` | Architectural Framework | `multi-agent-prospect-intelligence` | Deterministic LangGraph state machine and Pydantic schema validation prevent hallucinations in automated research pipelines. |

---

## 2. Research ↔ Technology Relationships

Every research item references canonical technology IDs defined in Phase 09:

- **`signal-research`:** `python`, `pytorch`, `pandas`, `numpy`, `scikit-learn`
- **`market-regimes`:** `python`, `scikit-learn`, `pandas`, `numpy`
- **`agentic-systems`:** `python`, `typescript`, `langgraph`, `fastapi`, `pydantic`

---

## 3. Future Integration Horizons

- **Phase 11 (Engineering Notes):** Short technical reflections referencing open questions from research items.
- **Phase 12 (Lab):** Live interactive playground simulating regime transitions and fractional differentiation curves.
- **Phase 13 (Knowledge Graph):** Global interactive node graph visualizing bidirectional edges across all entities.
