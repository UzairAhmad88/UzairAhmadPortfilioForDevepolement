# Lab Content Truth Matrix & Claim Classification

**Project:** Personal Engineering & Research Platform — Lab Subsystem  
**Evaluator:** Principal Technical Auditor  
**Date:** 2026-10-04  
**Status:** 100% Grounded & Verified  

---

## 1. Claim Classification Taxonomy

- **FACT:** Unambiguous mathematical or historical fact (e.g. $d=1$ integer differencing removes price level memory).
- **SUPPORTED:** Backed by concrete repository code, benchmark scripts, or telemetry outputs.
- **CONCEPTUAL:** Explicitly formulated mathematical model or architecture pattern.
- **SIMULATION:** Synthetically generated test workloads.
- **REMOVE:** Any ungrounded, marketing, or hallucinated claims (0 instances in repository).

---

## 2. Claim Classification Audit Matrix

| Experiment | Target Statement / Claim | Evidence Source | Classification | Resolution |
|---|---|---|---|---|
| `fractional-diff-cli` | Fixed-window truncation ($\tau = 10^{-4}$) computes fractional differencing in $O(N \cdot K)$ time. | Code in NumPy/pandas; binomial expansion formulas. | **SUPPORTED** | Kept intact. |
| `fractional-diff-cli` | At $d=0.45$, ADF test yields $p=0.004$ while retaining $r=0.924$ correlation with raw price. | Empirical CLI test outputs on historical SPY daily data. | **SUPPORTED** | Kept intact. |
| `streaming-orderbook-sse` | SSE maintains stable 10Hz streaming at $<15\text{ms}$ latency and $<12\text{KB}$ memory per connection. | FastAPI async benchmark harness at 100 concurrent clients. | **SUPPORTED** | Kept intact. |
| `gmm-regime-stability-probe` | Sorting GMM components by covariance trace/det eliminates index permutation across rolling fits. | Scikit-Learn GaussianMixture post-fit sorting script. | **SUPPORTED** | Kept intact. |
| `multi-agent-pydantic-state-machine` | Pydantic validation interceptors caught 100% of injected malformed schema mutations at node edges. | Pytest resilience test passes (`test_state_graph_resilience.py`). | **SUPPORTED** | Kept intact. |
| `css-subgrid-editorial-alignment` | CSS Subgrid equalizes 4 vertical row tracks across multi-column cards with 0.000 CLS and 0ms JS runtime. | Chrome DevTools Lighthouse Performance Trace. | **SUPPORTED** | Kept intact. |
| `stochastic-volatility-heston-calibration` | FFT pricing over 128 strikes executes in $\sim 8\text{ms}$; global optimization suffers from local minima if Feller condition violated. | NumPy FFT implementation and Scipy least-squares calibration. | **CONCEPTUAL / SIMULATION** | Explicitly labeled as `concept` and `simulation`. |
