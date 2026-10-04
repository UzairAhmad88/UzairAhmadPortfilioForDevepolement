# Lab Title & Summary Editorial Guide

## 1. Editorial Philosophy

Titles and summaries in the Lab workbench must act as technical identifiers, not advertising hooks. An effective title describes the mechanism being evaluated; an effective summary communicates why a technical evaluator should care in 1–3 dense sentences.

---

## 2. Canonical Title Schema

The standard schema for a Lab title is:

$$\text{\textbf{[canonical-slug]}}: \text{\textbf{[Core Investigation or Mechanism]}}$$

### Examples of Accepted Titles:
- `fractional-diff-cli: Preserving Time-Series Memory with Fixed-Window Expansion`
- `streaming-orderbook-sse: Asynchronous Server-Sent Events for Market Feeds`
- `gmm-regime-stability-probe: Evaluating Variance-Ordered State Persistence Across Lookback Windows`
- `multi-agent-pydantic-state-machine: Strict State Transition Graph for Research Synthesis`
- `css-subgrid-editorial-alignment: Zero-JS Multi-Column Monospace Card Alignment`
- `stochastic-volatility-heston-calibration: Characteristic Function Inversion via Fast Fourier Transform`

---

## 3. Summary Construction Guidelines

A high-signal summary must include:
1. **The System / Tool**: The exact language, runtime, or architectural framework used.
2. **The Problem / Mechanism**: What specific challenge was investigated.
3. **The Empirical Metric or Finding**: The quantitative or architectural result.

### Example Good Summary:
> "Standalone Python CLI utility calculating optimal fractional differencing orders with fixed-window weight truncation ($\tau=10^{-4}$). Validates stationarity ($p=0.004$) while retaining >92% correlation with raw price series."

### Example Bad Summary:
> "An exciting new project using cutting-edge machine learning to transform the future of stock market trading." (Prohibited: Vague, promotional, zero technical substance).

---

## 4. Title & Summary Inventory

| Slug | Canonical Title | Short Summary (Excerpt) |
|:---|:---|:---|
| `fractional-diff-cli` | `fractional-diff-cli: Preserving Time-Series Memory with Fixed-Window Expansion` | Standalone Python CLI utility calculating optimal fractional differencing orders with fixed-window weight truncation ($\tau=10^{-4}$). |
| `streaming-orderbook-sse` | `streaming-orderbook-sse: Asynchronous Server-Sent Events for Market Feeds` | High-throughput async Python & FastAPI server streaming synthetic L2 order book deltas over Server-Sent Events (SSE). |
| `gmm-regime-stability-probe` | `gmm-regime-stability-probe: Evaluating Variance-Ordered State Persistence Across Lookback Windows` | Empirical study quantifying the stability and state-transition entropy of unsupervised GMM regime classifiers under varying temporal lookback horizons. |
| `multi-agent-pydantic-state-machine` | `multi-agent-pydantic-state-machine: Strict State Transition Graph for Research Synthesis` | Experimental multi-agent workflow prototype enforcing typed Pydantic state schemas to eliminate stochastic agent hallucination loops. |
| `css-subgrid-editorial-alignment` | `css-subgrid-editorial-alignment: Zero-JS Multi-Column Monospace Card Alignment` | Modern layout experiment testing CSS Subgrid for perfectly aligned multi-row metadata strips without JavaScript resize listeners. |
| `stochastic-volatility-heston-calibration` | `stochastic-volatility-heston-calibration: Characteristic Function Inversion via Fast Fourier Transform` | Mathematical prototype calibrating Heston stochastic volatility model parameters ($\kappa, \theta, \sigma, \rho, v_0$) to market option surfaces. |
