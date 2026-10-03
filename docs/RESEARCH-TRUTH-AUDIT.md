# Research Truth & Evidence Audit

## Research Items Inventory & Grounding Audit

| ID | Title | Research Question | Verified Evidence & Source | Status | Related Project(s) | Related Tech |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `signal-research` | Predictive Feature Extraction & Stationarity in Non-Stationary Financial Series | Which statistical transformations preserve meaningful long-range temporal memory while satisfying stationarity constraints for deep neural networks in financial time series? | Empirical walk-forward testing; ADF & KPSS test statistics; binomial expansion weights. Backed by public repository `Deep-Learning-Based-Stock-Return-Prediction---Quantitative-Trading-System-ByUzaii`. | Exploring | `deep-learning-stock-return-prediction`, `market-regime-engine` | `python`, `pytorch`, `pandas`, `numpy`, `scikit-learn` |
| `market-regimes` | Unsupervised Market Regime Detection via Latent Volatility Clustering | Can unsupervised probabilistic clustering models dynamically classify financial volatility regimes without manual threshold heuristics? | Bayesian Information Criterion (BIC) component selection; Gaussian Mixture Model expectation-maximization; covariance sorting. Backed by repository `Develop-Market-Regime--Engine-byUzaii`. | Experimenting | `market-regime-engine`, `deep-learning-stock-return-prediction` | `python`, `scikit-learn`, `pandas`, `numpy` |
| `agentic-systems` | Deterministic Guardrails & State Graphs for Multi-Agent LLM Workflows | How can multi-agent LLM systems be architected with deterministic state machines to ensure zero hallucinations in automated research pipelines? | Directed acyclic state graph routing with LangGraph; Pydantic runtime schema barriers; circuit breaker timeouts. Backed by FYP B2B intelligence engine. | Building | `multi-agent-prospect-intelligence` | `python`, `typescript`, `langgraph`, `fastapi`, `pydantic` |

---

## Claims & Truth Verification Checklist

- [x] **No Fabricated Accuracy/Sharpe Metrics:** All experiment results describe directional behavior, stationarity test thresholds, and component selection curves rather than vanity percentages.
- [x] **No Fake Academic Citations:** Academic references link to real papers (López de Prado 2018, Hosking 1981, Hamilton 1989, Bishop 2006) and official framework documentation (LangGraph, Pydantic).
- [x] **Separation of Project and Research:** Research entries capture the scientific inquiry and mathematical formulation; project case studies describe the end-to-end engineered software.
- [x] **Epistemic Uncertainty:** Every research item includes explicit limitations and open questions under active investigation.
