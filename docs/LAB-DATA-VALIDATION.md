# Lab Data Validation & Schema Integrity

> **Platform:** Uzair Ahmad — Personal Engineering & Research Platform  
> **Subsystem:** Lab Data Models (`src/data/lab.ts` & `src/types/lab.ts`)  
> **Status:** 100% VALIDATED (6/6 records valid)

---

## 1. Schema Validation Matrix

| Field | Requirement | Validation Result | Status |
|---|---|---|---|
| `id` | Unique string identifier | 6 / 6 unique | **PASS** |
| `slug` | URL-safe slug matching `id` | 6 / 6 matched | **PASS** |
| `title` | Descriptive experiment title | 6 / 6 non-empty | **PASS** |
| `type` | Canonical `LabType` enum | 6 / 6 valid types | **PASS** |
| `status` | Canonical `LabStatus` enum | 6 / 6 valid statuses | **PASS** |
| `state` | Canonical `ExperimentState` | 6 / 6 valid states | **PASS** |
| `question` | Primary empirical research question | 6 / 6 present | **PASS** |
| `technologies` | Array of valid canonical tech IDs | 100% match `src/data/technologies.ts` | **PASS** |
| `resultOutcome` | Canonical `ExperimentResultOutcome` | 6 / 6 valid outcomes | **PASS** |
| `observations` | Non-empty array of empirical observations | 6 / 6 present | **PASS** |
| `limitations` | Documented caveats / constraints | 6 / 6 present | **PASS** |

---

## 2. Record-by-Record Inventory

### 1. `fractional-diff-cli`
- **Type:** `Algorithm Experiment` | **Status:** `Completed` | **State:** `actual`
- **Technologies:** `python`, `numpy`, `pandas`
- **Promoted To Project:** `deep-learning-stock-return-prediction`
- **Related Research:** `signal-research`
- **Related Note:** `fractional-differentiation-memory-stationarity`
- **Visualizations:** `fractional-diff-flow` (Pipeline diagram with 5 nodes)
- **Code Snippet:** `fractional_diff.py` (Weight calculation and convolution)

### 2. `streaming-orderbook-sse`
- **Type:** `Prototype` | **Status:** `Active` | **State:** `prototype`
- **Technologies:** `python`, `fastapi`, `typescript`
- **Related Project:** `deep-learning-stock-return-prediction`
- **Related Research:** `signal-research`
- **Related Note:** `async-sqlalchemy-session-lifecycle`
- **Verified Vercel Evidence:** Yes (`READY`, Vite)
- **Code Snippet:** `orderbook_stream.py` (FastAPI async generator with disconnect polling)

### 3. `gmm-regime-stability-probe`
- **Type:** `Quant Experiment` | **Status:** `Validating` | **State:** `actual`
- **Technologies:** `python`, `scikit-learn`, `numpy`, `pandas`
- **Promoted To Project:** `market-regime-engine`
- **Related Research:** `market-regimes`
- **Related Note:** `gmm-state-flipping-variance-ordering`

### 4. `multi-agent-pydantic-state-machine`
- **Type:** `AI/ML Experiment` | **Status:** `Completed` | **State:** `actual`
- **Technologies:** `python`, `langgraph`, `pydantic`
- **Promoted To Project:** `multi-agent-prospect-intelligence`
- **Related Research:** `agentic-systems`
- **Related Note:** `deterministic-state-graph-pydantic-guardrails`
- **Visualizations:** `agent-state-machine` (State graph with 5 nodes)

### 5. `css-subgrid-editorial-alignment`
- **Type:** `UI Experiment` | **Status:** `Completed` | **State:** `actual`
- **Technologies:** `html5-css3`, `astro`, `tailwindcss`
- **Related Note:** `zero-layout-shift-ssg-design-tokens`

### 6. `stochastic-volatility-heston-calibration`
- **Type:** `Quant Experiment` | **Status:** `Exploring` | **State:** `concept`
- **Technologies:** `python`, `numpy`, `scikit-learn`
- **Related Research:** `signal-research`

---

## 3. Data Integrity Summary

- Zero fabricated benchmarks or simulated metrics.
- Zero broken entity references or orphan links.
- All 6 experiments represent genuine engineering sandboxes with clear methodology, limitations, and observations.
