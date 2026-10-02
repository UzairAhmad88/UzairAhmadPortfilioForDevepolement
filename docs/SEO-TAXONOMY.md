# SEO Taxonomy & Terminology Normalization

This document establishes strict separation between Topics, Technologies, Content Types, and Project Types to prevent keyword cannibalization and maintain clean taxonomy indexing.

## 1. Dimensional Separation Matrix

```
Knowledge Taxonomy Dimensions
├── 1. Topics (Intellectual Domain)
│   ├── Quantitative Finance
│   ├── Time-Series Analysis
│   ├── Machine Learning & Deep Learning
│   ├── Multi-Agent Systems
│   └── Systems Architecture
│
├── 2. Technologies (Tools & Frameworks)
│   ├── Python / PyTorch / NumPy / Pandas
│   ├── TypeScript / Astro / React
│   ├── FastAPI / Docker / PostgreSQL
│   └── LangGraph / Pydantic
│
├── 3. Content Types (Structural Format)
│   ├── Research Inquiry (/research/[slug])
│   ├── Project Case Study (/work/[slug])
│   ├── Technical Note
│   └── System Breakdown
│
└── 4. Project Types (Engineering Nature)
    ├── Research Experiment
    ├── Final Year Academic Project (FYP)
    ├── Full-Stack Healthcare SaaS
    └── Desktop / Local Application
```

## 2. Terminology Normalization Standard

To prevent fragmented tag sprawl, technical terms are strictly normalized across all data files:
- Use `Time Series` (NOT `Timeseries`, `Time-series forecasting`, `TS analysis`).
- Use `Quantitative Finance` (NOT `Quant`, `Quantitative Trading`, `Finance ML`).
- Use `Multi-Agent Systems` (NOT `Agentic AI`, `Agent workflows`, `LLM Agents`).
- Use `Fractional Differentiation` (NOT `Fracdiff`, `Fractional calculus feature`).
