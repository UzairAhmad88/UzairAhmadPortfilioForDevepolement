# Lab Experiment Quality & Engineering Depth Guide

## 1. Experiment Hierarchy & Depth Levels

The platform classifies experiments into four structural depth levels based on the scope and maturity of the technical investigation:

| Level | Classification | Definition | Example |
|:---:|:---|:---|:---|
| **LEVEL 1** | **UI / Layout Exploration** | Focused exploration of browser APIs, CSS specifications, or interaction models. | `css-subgrid-editorial-alignment` |
| **LEVEL 2** | **Algorithmic Probe** | Focused command-line tool or mathematical script evaluating a single computational formula. | `fractional-diff-cli` |
| **LEVEL 3** | **Architectural Prototype** | Working harness evaluating concurrency, streaming protocols, or multi-agent graphs. | `streaming-orderbook-sse`, `multi-agent-pydantic-state-machine` |
| **LEVEL 4** | **Quantitative / Empirical Study** | Multi-year historical backtesting, statistical regime probes, or calibration solvers. | `gmm-regime-stability-probe`, `stochastic-volatility-heston-calibration` |

---

## 2. Seven Essential Content Sections

Every Lab detail page must present the following seven core sections in structured reading rhythm:

1. **Research Question**: The bounded, testable question under investigation.
2. **Technical Context & Intent**: Why the experiment existed and the architectural trade-offs at stake.
3. **Hypothesis / Working Assumption**: The formal expected behavior prior to implementation.
4. **Experimental Setup & Implementation**: Vectorization, libraries, configuration, and data sources used.
5. **Observed vs. Interpreted Results**: Raw measured outputs (ADF $p$-values, latency, RAM, durations) distinctly separated from deductions.
6. **Technical Decisions & Trade-Offs**: Why specific engineering choices were made (e.g., fixed window over expanding window).
7. **Explicit Limitations & Next Steps**: Unresolved edge cases, failure states, and next technical directions.

---

## 3. Handling Negative & Inconclusive Results

Engineering maturity is demonstrated through honest analysis of failure modes:
- If an experiment fails to converge (e.g. Heston global parameter calibration), mark the outcome as `Requires further testing` or `Inconclusive`.
- Document the exact mathematical breakdown (e.g. Feller condition violation $2\kappa\theta < \sigma^2$).
- Document why the failure is valuable: it establishes the necessity of regularization priors and informs downstream architecture.
