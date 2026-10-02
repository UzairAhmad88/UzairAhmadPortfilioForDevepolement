# Research Writing Guidelines

This document defines the formal standards, structural requirements, and ethical boundaries for publishing technical research and empirical investigations.

## 1. Core Principles

- **Empirical Rigor**: Every research item must state a concrete hypothesis, describe the dataset and evaluation metrics, and report measured quantitative outcomes.
- **Honest Limitations**: The limitations section is mandatory. Assumptions, regime dependency, hardware limits, and sampling biases must be explicitly documented.
- **No Exaggerated Claims**: Do not present backtest simulations as profitable live trading strategies. Do not present multi-agent LLM systems as autonomous general intelligence.
- **No Fabricated Citations**: Reference only papers, standards, and texts that directly informed the methodology.

## 2. Structural Template

Every research document follows this logical sequence:

```
1. Research Question / Problem Statement
   └── Why this problem matters and what specific gap is being addressed.

2. Theoretical Context & Mathematical Formulation
   └── Exact equations, theorems, and definitions with readable context.

3. Hypothesis
   └── Testable, falsifiable statement.

4. Empirical Methodology
   ├── Data Collection & Ingestion Pipeline
   ├── Preprocessing & Leakage Prevention (e.g. Purged Group Splits)
   └── Model/Algorithm Execution

5. Experimental Results
   ├── Quantitative Metric Tables (Sharpe, Drawdown, Latency, Accuracy)
   └── Empirical Observations

6. Interpretation & Practical Impact
   └── What the data proves and how it integrates into production systems.

7. Systemic Limitations & Assumptions
   └── Boundary conditions and failure modes.

8. Conclusion & Future Extensions
   └── Next steps for production engineering or continued inquiry.

9. Peer-Reviewed References
   └── Formal academic citations (Author, Year, Title, Journal/ArXiv, DOI/Link).
```

## 3. Quantitative Finance Rules

- Clearly disclaim that all financial models and metrics are educational/research simulations and do not constitute financial or investment advice.
- Disclose slippage, transaction cost models, lookahead bias safeguards, and survivorship bias treatments.
- Prohibit unsubstantiated claims of "guaranteed alpha" or "risk-free yield."
