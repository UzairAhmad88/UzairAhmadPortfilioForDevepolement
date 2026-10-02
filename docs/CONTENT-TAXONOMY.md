# Content Taxonomy

This document establishes the official topic taxonomy and content classification rules for technical knowledge on the website.

## 1. Domain Taxonomy

Only domains supported by authentic code, research, or documented implementation are included in the taxonomy.

```
Knowledge Taxonomy
├── Quantitative Finance & Time Series
│   ├── Stationarity & Fractional Differentiation
│   ├── Volatility Clustering & Regime Detection
│   ├── Feature Engineering & Lookahead Prevention
│   └── Risk Metrics & Backtesting Architecture
│
├── Machine Learning & Intelligent Systems
│   ├── Multi-Agent Deterministic Orchestration
│   ├── Graph-Based State Machines (LangGraph)
│   ├── Structured Schema Validation (Pydantic / Instructor)
│   └── Model Evaluation & Drift Detection
│
└── Software Engineering & Systems Architecture
    ├── High-Throughput REST / Async APIs (FastAPI)
    ├── Static Site Generation & Semantic HTML (Astro)
    ├── Containerization & Microservice Topologies (Docker)
    └── Zero-JS Performance & Core Web Vitals
```

## 2. Separation of Topic vs. Content Type

To maintain clarity, topics (subject matter) are strictly decoupled from content types (methodology/format):

| Field | Definition | Permitted Values |
|---|---|---|
| **Topic / Domain** | The technical subject domain | `Quantitative Finance`, `Machine Learning`, `Multi-Agent Systems`, `Time Series Analysis`, `System Architecture` |
| **Content Type** | The structural format and intent of the document | `Research`, `Technical Article`, `Technical Note`, `Project Case Study`, `Concept Breakdown` |
| **Depth Level** | Technical depth and scope | `Level 1` (Short Note), `Level 2` (Explanation), `Level 3` (Deep Article), `Level 4` (Empirical Research), `Level 5` (Long-Form Case Study) |

## 3. Taxonomy Governance Rules

- **No Empty Categories**: Topic hub pages are only indexed when at least two substantive content pieces exist within that category.
- **Tag Discipline**: Maximum 4–6 tags per piece. Tags must represent concrete technologies, methodologies, or theorems (e.g., `ADF Test`, `LangGraph`, `GMM`).
- **No Filler Tags**: Broad buzzwords (`#Tech`, `#Innovation`, `#AI2026`) are prohibited.
