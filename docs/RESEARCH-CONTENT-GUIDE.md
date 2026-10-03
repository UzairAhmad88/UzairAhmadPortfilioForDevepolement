# Research Content Authoring & Epistemic Guide

## How to Author a Research Entry

When adding a new research investigation to `src/data/research.ts`, adhere to the following principles:

### 1. Formulate a Specific, Non-Trivial Research Question
Avoid generic statements like "Can AI predict stocks?"
Instead, formulate precise mathematical or structural inquiries:
> *"Which statistical transformations preserve meaningful long-range temporal memory while satisfying stationarity constraints for deep neural networks in financial time series?"*

### 2. State a Working Hypothesis Before Testing
Document what was anticipated prior to running experiments:
> *"Fractional differentiation ($0 < d < 1$) combined with rolling volatility normalization will yield higher signal-to-noise ratios and improved out-of-sample directional precision compared to raw log returns."*

### 3. Record Empirical Experiments & Controlled Variables
For every experiment:
- Define the **Objective**.
- Enumerate **Controlled Variables**.
- Record **Observed Results** (strictly factual, no invented metrics).
- Provide a concise **Interpretation**.

### 4. Separate Findings from Technical Interpretation
- **Factual Finding:** What was measured in the data (e.g., "ADF test statistic rejected unit root at $d \ge 0.38$").
- **Technical Interpretation:** What the finding implies for systems engineering (e.g., "This preserves ~82% memory correlation while guaranteeing stationarity for neural backpropagation").

### 5. Document Known Limitations & Open Questions
Every legitimate investigation has constraints. Explicitly record:
- Macroeconomic regime sensitivities.
- Computation or window latency overheads.
- Unresolved research questions for future exploration.

---

## Anti-Patterns to Avoid

- ❌ **Fabricating Metrics:** Never write "99.4% accuracy" or "Sharpe ratio of 4.5" without empirical backtest data.
- ❌ **Fake Peer Review:** Never mark personal investigations as "Peer Reviewed Journal Article" unless genuinely published in a recognized academic venue.
- ❌ **Conflating Projects with Research:** Do not duplicate full project documentation. Keep the research page focused on the inquiry and experimental evidence.
