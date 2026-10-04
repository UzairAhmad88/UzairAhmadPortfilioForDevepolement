# Lab Stale Content & Lineage Audit

## 1. Audit Purpose & Criteria

This audit reviews every Lab record for obsolete dependencies, stale statuses, broken code snippets, superseded architectures, or out-of-sync dates.

---

## 2. Item-by-Item Lineage & Currency Audit

| Lab Slug | Created Date | Last Updated | Technology Currency | Status Verification | Lineage / Superseded State |
|:---|:---|:---|:---|:---|:---|
| **`fractional-diff-cli`** | 2024-10-12 | 2025-01-20 | Python 3.11+, NumPy 1.26+, Pandas 2.2+ | `Completed` (Accurate) | Promoted to `deep-learning-stock-return-prediction`. |
| **`streaming-orderbook-sse`** | 2025-01-08 | 2025-02-14 | Python 3.12+, FastAPI 0.110+, TypeScript 5.4+ | `Active` (Accurate) | Active prototype powering quantitative dashboard telemetry. |
| **`gmm-regime-stability-probe`** | 2024-11-05 | 2025-01-10 | Scikit-Learn 1.4+, NumPy, Pandas | `Validating` (Accurate) | Promoted to `market-regime-engine`; Bayesian Dirichlet prior under testing. |
| **`multi-agent-pydantic-state-machine`** | 2024-11-28 | 2025-01-18 | LangGraph 0.1+, Pydantic 2.7+ | `Completed` (Accurate) | Promoted to Final Year Project multi-agent orchestrator. |
| **`css-subgrid-editorial-alignment`** | 2024-12-10 | 2025-01-05 | Modern CSS Subgrid (Chrome 117+, Safari 16+), Astro 4.0+ | `Completed` (Accurate) | Standardized across platform card systems. |
| **`stochastic-volatility-heston-calibration`** | 2025-01-25 | 2025-02-10 | Python 3.12, NumPy, Scipy | `Exploring` (Accurate) | Active conceptual investigation into MCMC calibration. |

---

## 3. Stale Code Snippet Verification

All code snippets embedded in `src/data/lab.ts` are validated against current library syntax:
- `fractional_diff.py`: Uses standard vectorized NumPy dot products and recursive weights without deprecated Pandas indexing.
- `orderbook_stream.py`: Uses modern async FastAPI `StreamingResponse` and `await request.is_disconnected()`.

---

## 4. Audit Verdict

All 6 Lab items are current, accurately date-stamped, and represent active or cleanly promoted engineering assets. Zero stale or unmaintained orphan experiments exist.
