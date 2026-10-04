# Lab Visual Evidence & Artifact Curation Matrix

## 1. Evidence Hierarchy & Classification Standard

All visual evidence on the platform is rigorously classified into one of four evidence states:

- **`actual` (E3 / E4)**: Direct data, code outputs, telemetry benchmarks, and architecture topologies derived from functional codebases and empirical datasets.
- **`prototype` (E2)**: Working prototype harnesses running in local testbeds or sandbox environments.
- **`simulation` (E2 / E3)**: Simulated mathematical formulations and synthetic parameter sweeps.
- **`concept` (E1)**: Theoretical specifications and exploratory mathematical models.

---

## 2. Visual Artifact Inventory & Evidence Matrix

| Artifact ID | Experiment Slug | Type | Evidence State | Source Evidence | What Visitor Learns |
|:---|:---|:---|:---:|:---|:---|
| `art-frac-diff-pipeline` | `fractional-diff-cli` | `PIPELINE` | `actual` | `Deep-Learning-Stock-Return-Prediction` repo | $O(N \cdot K)$ linear execution topology with fixed-window cutoff at $K=250$. |
| `art-frac-diff-tradeoff-comparison` | `fractional-diff-cli` | `COMPARISON` | `actual` | CLI output on SPY daily returns | At $d=0.45$, ADF $p=0.004$ while retaining $r=0.924$ price memory vs $r=0.040$ at $d=1.0$. |
| `art-sse-stream-topology` | `streaming-orderbook-sse` | `ARCHITECTURE` | `prototype` | `streaming-orderbook-sse` prototype harness | Asynchronous generator topology with per-subscriber queue isolation and disconnect polling. |
| `art-sse-telemetry-bench` | `streaming-orderbook-sse` | `TECHNICAL_SCREENSHOT` | `actual` | Benchmark suite at 100 concurrent connections | SSE reduces per-connection RAM to 12KB vs 48KB in WebSocket (75% savings). |
| `art-gmm-variance-flow` | `gmm-regime-stability-probe` | `ALGORITHM` | `actual` | `Market-Regime-Engine` repo | Post-fit variance sorting by $\det(\Sigma_k)$ eliminates unsupervised state permutation. |
| `art-gmm-transition-matrix` | `gmm-regime-stability-probe` | `CHART` | `actual` | Empirical calculation on SPY/VIX (2018–2024) | Quantifies state persistence: Bull duration 42.4 days ($P_{00}=0.976$), Crisis 14.1 days ($P_{22}=0.928$). |
| `art-agent-state-graph` | `multi-agent-pydantic-state-machine` | `STATE_GRAPH` | `actual` | FYP Multi-Agent Intelligence System repo | Directed graph topology with Pydantic validation interceptors and 3-retry budget caps. |
| `art-agent-guardrail-recovery` | `multi-agent-pydantic-state-machine` | `SYSTEM_FLOW` | `actual` | Pytest suite `test_state_graph_resilience.py` | 100% schema violation capture at boundaries; eliminates infinite hallucination loops. |
| `art-subgrid-track-layout` | `css-subgrid-editorial-alignment` | `UI_SCREENSHOT` | `actual` | Astro Component System | 4-row CSS Subgrid track contract equalizing asymmetric cards without JavaScript. |
| `art-subgrid-performance-comparison` | `css-subgrid-editorial-alignment` | `COMPARISON` | `actual` | Chrome DevTools Performance Trace | Subgrid achieves 0.000 CLS and removes 3.4KB script vs 18.4ms CPU time in ResizeObserver. |
| `art-heston-fft-pipeline` | `stochastic-volatility-heston-calibration` | `PIPELINE` | `concept` | Mathematical formulation (Albrecher rotation) | Semi-analytical Carr-Madan characteristic function inversion and calibration workflow. |
| `art-heston-smile-simulation` | `stochastic-volatility-heston-calibration` | `CHART` | `simulation` | Simulation script `test_heston_smile_sim.py` | Compares Black-Scholes flat volatility against Heston asymmetric skew ($\rho=-0.70$). |

---

## 3. Evidence Quality Invariants

- **No Decorative Graphics**: Every visual artifact communicates a concrete architecture, mathematical comparison, or empirical measurement.
- **Explicit Captions & Callouts**: Every artifact includes both `whatThisShows` (descriptive payload) and `whatToNotice` (analytical takeaway).
- **Zero Fabricated Screenshots**: No synthetic IDE or terminal screenshots were created; all diagrams use structured SVG/CSS node layouts grounded in real code.
