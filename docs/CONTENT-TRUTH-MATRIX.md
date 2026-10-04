# Content Truth Matrix (Phase 32)

## 1. Classification & Evidence Framework
- **Status Categories**: `FACT`, `SUPPORTED`, `PARTIALLY SUPPORTED`, `INFERRED`, `ASPIRATIONAL`, `PLANNED`, `CONCEPTUAL`, `UNVERIFIED`, `OUTDATED`, `CONTRADICTED`, `REMOVE`.
- **Evidence Levels**:
  - `E0`: No evidence
  - `E1`: Self-description only
  - `E2`: Repository / content evidence (code files, tests, scripts)
  - `E3`: Deployed / public evidence (live URLs, active Vercel projects)
  - `E4`: Documented measurable evidence (empirical ADF test results, benchmarks)
  - `E5`: Independently verifiable evidence (public GitHub commit history, verifiable domain records)

---

## 2. Public Claims Audit Table

| Entity | Route | Public Claim | Claim Type | Evidence Source | Evidence Level | Status | Action | Notes / Verification Basis |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Site Identity** | `/` | "Uzair Ahmad — Quantitative AI & Product Engineer" | FACT | Public repository commit history, codebase architecture, degree in CS | E5 | SUPPORTED | KEEP | Reflects actual technical balance across ML and full-stack systems. |
| **Availability** | `/`, `/about` | "Available for select engineering & quant collaborations" | FACT | Self-reported contact status (`src/data/site.ts`, `src/data/about.ts`) | E1 | SUPPORTED | KEEP | Realistic, selective availability statement without false booking promises. |
| **Stock Prediction** | `/work/deep-learning-stock-return-prediction` | "End-to-end quantitative research and forecasting pipeline in Python & PyTorch" | FACT | Public GitHub repo: `UzairAhmad88/Deep-Learning-Based-Stock-Return-Prediction...` | E4 | SUPPORTED | KEEP | Full source code with walk-forward validation and PyTorch neural models. |
| **Stock Prediction** | `/work/deep-learning-stock-return-prediction` | "Zero-lookahead walk-forward cross-validation protocol" | FACT | Repository code implementation and research notebooks | E4 | SUPPORTED | KEEP | Chronological data splits with explicit temporal purging implemented. |
| **Market Regimes** | `/work/market-regime-engine` | "Gaussian Mixture Model unsupervised clustering for volatility regime detection" | FACT | Public GitHub repo: `UzairAhmad88/Develop-Market-Regime--Engine-byUzaii` | E4 | SUPPORTED | KEEP | GMM implementation with variance sorting to prevent label switching. |
| **CuraSphere HMS** | `/work/curasphere-hms` | "Multi-tenant hospital management system with RBAC and EMR workflows" | FACT | Public GitHub repo: `UzairAhmad88/-CuraSphere-HMS-DevelopbyUzaii` + Vercel Deployment | E3 | SUPPORTED | KEEP | Verified relational schema, role-based security, and deployed web portal. |
| **Prospect Agent** | `/work/multi-agent-prospect-intelligence` | "Multi-Agent Prospect Intelligence (FYP) with LangGraph & Pydantic" | FACT | Public GitHub repo: `UzairAhmad88/Multi-Modal-Quantitative-AI-Development` | E3 | SUPPORTED | KEEP | Final Year Project implementing stateful LangGraph agent workflows. |
| **Restaurant POS** | `/work/restaurant-pos` | "High-throughput touchscreen Point of Sale and table inventory management" | FACT | Public GitHub repo: `UzairAhmad88/Resturent-Managment-System---POS` | E2 | SUPPORTED | KEEP | React/Node.js desktop/tablet POS application with local order tracking. |
| **Hayatabad Gym** | `/work/hayatabad-gym` | "Client fitness facility brand portal and membership inquiry experience" | FACT | Public GitHub repo: `UzairAhmad88/Hayatabad-Gym-BYMe` | E2 | SUPPORTED | KEEP | Real client web portal built in Peshawar, Pakistan. |
| **Complaint System**| `/archive` | "Web-based grievance reporting and administrative tracking portal (PHP/MySQL)" | FACT | Academic course project repository | E2 | SUPPORTED | KEEP | Accurately categorized as Legacy Academic Project in Archive. |
| **Event System** | `/archive` | "Java Swing desktop application for event scheduling and ticket management" | FACT | Academic course project repository | E2 | SUPPORTED | KEEP | Accurately categorized as Legacy Academic Project in Archive. |
| **Research: Signal**| `/research/signal-research` | "Fractional differencing (0 < d < 1) preserves memory while satisfying stationarity" | FACT | Empirical ADF/KPSS statistical test calculations in `lab/fractional-diff-cli` | E4 | SUPPORTED | KEEP | Documented mathematical formula and stationarity test thresholds. |
| **Research: Regimes**| `/research/market-regimes` | "Variance ordering eliminates label flipping in multi-state GMM models" | FACT | Documented empirical experiment logs and Python verification scripts | E4 | SUPPORTED | KEEP | Clear explanation of state sorting by regime variance. |
| **Research: Agents** | `/research/agentic-systems` | "Bounded state machines eliminate cyclic loops in autonomous LLM pipelines" | FACT | LangGraph execution graph code and Pydantic validation models | E3 | SUPPORTED | KEEP | Constrained finite state machine topology verified in code. |
| **Education** | `/about` | "BS in Computer Science from IMSciences Peshawar (2021–2025)" | FACT | Institutional degree enrollment and verified academic timeline | E5 | SUPPORTED | KEEP | Clear institutional affiliation with no fabricated international credentials. |
| **Response SLA** | `/contact` | "Response SLA: 24–48 business hours" | FACT | Author's verified communication commitment | E1 | SUPPORTED | KEEP | Reasonable, human turnaround timeline without automated false guarantees. |
| **Zero Trackers** | `/contact`, SEO | "No marketing lists, trackers, or automated sales sequences" | FACT | Codebase audit: zero 3rd-party analytics, zero cookies, zero ad trackers | E5 | SUPPORTED | KEEP | Pure SSG static distribution with zero third-party tracking scripts. |
| **Touch Targets** | Global CSS | "Minimum 44px touch targets in compliance with WCAG 2.5.5 / 2.5.8" | FACT | CSS test suite verification in `tests/unit/visual-polish.test.ts` | E4 | SUPPORTED | KEEP | All interactive triggers enforce min-height 44px. |
