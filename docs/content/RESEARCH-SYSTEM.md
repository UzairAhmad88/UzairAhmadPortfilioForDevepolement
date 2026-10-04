# Research Platform & Hypothesis-Driven Inquiries

## 1. System Overview

The Research system (`src/data/research.ts`) hosts formal, long-term empirical and theoretical inquiries. Each research item represents an active or completed investigation:
- **`signal-research`**: Quantitative Return Predictability, Stationarity & Signal Decay.
- **`market-regimes`**: Structural Break Detection & Gaussian Volatility Clustering.
- **`agentic-systems`**: Deterministic State Graph Routing & Cyclic Fault Tolerance in Multi-Agent Networks.

---

## 2. Research Schema Invariants

Each `ResearchItem` includes:
- **Core Question**: Specific theoretical or mathematical problem.
- **Hypothesis**: Formal expected behavior prior to testing.
- **Methodology Stages**: Sequential pipeline with assigned tools and data sources.
- **Findings vs. Interpretation**: Raw empirical evidence separated from subjective analysis.
- **Open Questions**: Unresolved theoretical limits and future directions.
- **Linked Evidence**: Reciprocal links to validating Lab experiments (`relatedLab`).
