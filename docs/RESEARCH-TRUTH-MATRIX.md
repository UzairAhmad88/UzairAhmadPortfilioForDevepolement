# Research Truth Matrix (Phase 32)

## 1. Research Inquiries Audit

Every research entry presented in `/research` is structured around clear mathematical hypotheses, explicit limitations, and documented experimental observations:

| Research Slug & Title | Domain | Status | Research Question | Experimental Method | Measurable Evidence & Findings | Limitations Explicitly Disclosed |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **`signal-research`**: Predictive Feature Extraction & Stationarity in Non-Stationary Financial Series | Quantitative Finance | Exploring | "Which statistical transformations preserve long-range memory while satisfying stationarity constraints for deep neural networks?" | Binomial expansion fractional differencing ($0 < d < 1$) across orders $d \in [0.1, 0.9]$ with ADF/KPSS stationarity testing. | ADF test $p < 0.01$ achieved at $d \in [0.35, 0.50]$ while retaining Pearson correlation $r > 0.82$ with raw price levels (compared to $r \approx 0.04$ for standard $d=1.0$ returns). | Requires warm-up period of $K$ bars before valid outputs are emitted; optimal $d$ shifts across macro regimes. |
| **`market-regimes`**: Unsupervised Volatility Regime Segmentation via Gaussian Mixture Models | Quantitative Finance | Experimenting | "Can unsupervised Gaussian Mixture Models segment asset return series into distinct volatility regimes without lookahead bias?" | Multi-feature GMM clustering with rolling volatility moments and variance-based cluster sorting. | Variance-sorted state indexing eliminated random label switching across expanding walk-forward windows. Distinct high/low volatility regimes accurately separated. | Unsupervised clustering does not guarantee future regime persistence; sudden exogenous shocks cause transient misclassification. |
| **`agentic-systems`**: Deterministic State-Graph Orchestration & Schema Guardrails for LLM Pipelines | Artificial Intelligence | Building | "How can multi-agent LLM systems maintain bounded deterministic execution without infinite loops or schema corruption?" | Finite state machine orchestration using LangGraph with strict Pydantic model validation and structured fallbacks. | Zero infinite execution cycles in benchmarked lead-enrichment workflows; 100% schema compliance on extracted data entities. | Schema guardrails increase initial latency due to validation steps; non-deterministic LLM tool calls require explicit retry budgets. |

---

## 2. Research Claims Discipline
- **No Exaggerated Alpha Claims**: Research is explicitly presented as statistical feature engineering and signal investigation, **not** as a live trading hedge fund or guaranteed profit system.
- **Formulas & Rigor**: All mathematical formulations (fractional differencing weights, GMM log-likelihood, ADF unit root conditions) are documented with exact equations.
- **Dataset Grounding**: Historical price data feeds (Yahoo Finance, AlphaVantage) are explicitly attributed as historical benchmarks.
