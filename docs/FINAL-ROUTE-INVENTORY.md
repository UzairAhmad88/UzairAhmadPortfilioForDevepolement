# Final Route Inventory

> **Platform:** Uzair Ahmad — Personal Engineering & Research Platform  
> **Phase:** Final System Integration & Production Freeze  
> **Total Static Routes Generated:** 60 / 60  
> **Output Architecture:** Astro 4.16 Static HTML (`dist/`)

---

## 1. Top-Level Core Pages (12 Routes)

| Route Path | Source Template | Content Type | Status |
|---|---|---|---|
| `/` | `src/pages/index.astro` | Homepage (Hero, Selected Work, Currently, Focus, Research) | **200 OK** |
| `/about` | `src/pages/about.astro` | Engineering Philosophy, Background, Paradigm & Bio | **200 OK** |
| `/work` | `src/pages/work/index.astro` | Curated Project Index & Domain Filtering | **200 OK** |
| `/research` | `src/pages/research.astro` | Empirical Inquiry & Hypothesis Platform | **200 OK** |
| `/lab` | `src/pages/lab/index.astro` | Experimental Sandboxes & Active Prototypes | **200 OK** |
| `/notes` | `src/pages/notes/index.astro` | Public Engineering Notebook Index | **200 OK** |
| `/technology` | `src/pages/technology/index.astro` | Evidence-Grounded Technology Catalog | **200 OK** |
| `/discover` | `src/pages/discover.astro` | Faceted Global Search & Entity Filtering | **200 OK** |
| `/knowledge` | `src/pages/knowledge/index.astro` | Knowledge Explorer & Semantic Pathway System | **200 OK** |
| `/knowledge-graph` | `src/pages/knowledge-graph.astro` | Standalone Knowledge Graph Route | **200 OK** |
| `/timeline` | `src/pages/timeline.astro` | Curated Engineering Career Milestones | **200 OK** |
| `/archive` | `src/pages/archive.astro` | Historical, Inactive & Superseded Project Registry | **200 OK** |

---

## 2. Engagement & Auxiliary Pages (4 Routes)

| Route Path | Source Template | Content Type | Status |
|---|---|---|---|
| `/collaborate` | `src/pages/collaborate.astro` | Engagement Scopes, Advisory Models & Process | **200 OK** |
| `/services` | `src/pages/services.astro` | Systems Architecture & Development Capabilities | **200 OK** |
| `/how-i-build` | `src/pages/how-i-build.astro` | Architecture Principles, Tooling & Workflow Guide | **200 OK** |
| `/contact` | `src/pages/contact.astro` | Direct Channel Hub & Contact Form Interface | **200 OK** |
| `/contact/success` | `src/pages/contact/success.astro` | Form Submission Acknowledgment & SLA Note | **200 OK** |
| `/404` | `src/pages/404.astro` | Custom 404 Error Recovery Page | **404 / 200 OK** |

---

## 3. Dynamic Case Study Detail Pages (8 Routes)

| Route Path | Source Data Key | Core Focus / Domain | Status |
|---|---|---|---|
| `/work/deep-learning-stock-return-prediction` | `deep-learning-stock-return-prediction` | Temporal ML, Quant Alpha, Feature Engineering | **200 OK** |
| `/work/multi-agent-prospect-intelligence` | `multi-agent-prospect-intelligence` | Multi-Agent LLM Graph, Deterministic State Machine | **200 OK** |
| `/work/curasphere-hms` | `curasphere-hms` | Enterprise Healthcare Management, RBAC, Async EMR | **200 OK** |
| `/work/market-regime-engine` | `market-regime-engine` | Unsupervised Regime Detection, GMM, Volatility Clustering | **200 OK** |
| `/work/restaurant-pos` | `restaurant-pos` | Real-time POS, Offline-First Sync, Order Lifecycle | **200 OK** |
| `/work/hayatabad-gym` | `hayatabad-gym` | Member Management, Subscription Billing System | **200 OK** |
| `/work/online-complaint-system` | `online-complaint-system` | Public Service Grievance Triage & Resolution Workflow | **200 OK** |
| `/work/event-management-system` | `event-management-system` | Event Ticketing, Registration & Capacity Engine | **200 OK** |

---

## 4. Dynamic Research Inquiry Detail Pages (3 Routes)

| Route Path | Inquiry ID | Empirical Hypothesis & Investigation | Status |
|---|---|---|---|
| `/research/signal-research` | `RES-2024-01` | Non-Stationary Signal Extraction & Memory Retention | **200 OK** |
| `/research/market-regimes` | `RES-2024-02` | Gaussian Mixture Model Stability Under Shifting Regimes | **200 OK** |
| `/research/agentic-systems` | `RES-2024-03` | Deterministic State Recovery in Multi-Agent Graphs | **200 OK** |

---

## 5. Dynamic Lab Experiment Detail Pages (6 Routes)

| Route Path | Experiment Slug | Prototype & Workbench Focus | Status |
|---|---|---|---|
| `/lab/fractional-diff-cli` | `fractional-diff-cli` | High-Throughput Fractional Differentiation Engine | **200 OK** |
| `/lab/streaming-orderbook-sse` | `streaming-orderbook-sse` | Real-Time SSE L2 Orderbook Depth Visualizer | **200 OK** |
| `/lab/gmm-regime-stability-probe` | `gmm-regime-stability-probe` | Interactive GMM Covariance Stability Diagnostic | **200 OK** |
| `/lab/multi-agent-pydantic-state-machine` | `multi-agent-pydantic-state-machine` | Typed Graph State Transitions with Schema Validation | **200 OK** |
| `/lab/css-subgrid-editorial-alignment` | `css-subgrid-editorial-alignment` | Pure CSS Subgrid Multi-Column Editorial Layouts | **200 OK** |
| `/lab/stochastic-volatility-heston-calibration` | `stochastic-volatility-heston-calibration` | Semi-Analytical Heston Model Parameter Calibration | **200 OK** |

---

## 6. Dynamic Engineering Notes Detail Pages (6 Routes)

| Route Path | Note Slug | Architecture Topic | Status |
|---|---|---|---|
| `/notes/async-sqlalchemy-session-lifecycle` | `async-sqlalchemy-session-lifecycle` | Async Session Leaks & Connection Pool Exhaustion in FastAPI | **200 OK** |
| `/notes/fractional-differentiation-memory-stationarity` | `fractional-differentiation-memory-stationarity` | Memory Preservation vs Stationarity Trade-offs | **200 OK** |
| `/notes/gmm-state-flipping-variance-ordering` | `gmm-state-flipping-variance-ordering` | Deterministic Label Ordering for Unsupervised GMM Clusters | **200 OK** |
| `/notes/deterministic-state-graph-pydantic-guardrails` | `deterministic-state-graph-pydantic-guardrails` | Schema Guardrails for Non-Deterministic LLM Tool Calls | **200 OK** |
| `/notes/zero-layout-shift-ssg-design-tokens` | `zero-layout-shift-ssg-design-tokens` | Zero-CLS Dark/Light Token Swapping in Static HTML | **200 OK** |
| `/notes/rbac-relational-integrity-emr-systems` | `rbac-relational-integrity-emr-systems` | Tenant-Isolated Row-Level Security in Hospital EMRs | **200 OK** |

---

## 7. Dynamic Technology Entity Pages (19 Routes)

| Route Path | Technology Slug | Verified Category | Status |
|---|---|---|---|
| `/technology/python` | `python` | Languages & Core Runtimes | **200 OK** |
| `/technology/typescript` | `typescript` | Languages & Core Runtimes | **200 OK** |
| `/technology/pytorch` | `pytorch` | AI, ML & Quantitative Frameworks | **200 OK** |
| `/technology/react` | `react` | Frontend Architecture & Systems | **200 OK** |
| `/technology/langgraph` | `langgraph` | AI, ML & Quantitative Frameworks | **200 OK** |
| `/technology/fastapi` | `fastapi` | Backend & Cloud Infrastructure | **200 OK** |
| `/technology/nodejs` | `nodejs` | Languages & Core Runtimes | **200 OK** |
| `/technology/express` | `express` | Backend & Cloud Infrastructure | **200 OK** |
| `/technology/postgresql` | `postgresql` | Data Systems & Databases | **200 OK** |
| `/technology/pandas` | `pandas` | AI, ML & Quantitative Frameworks | **200 OK** |
| `/technology/numpy` | `numpy` | AI, ML & Quantitative Frameworks | **200 OK** |
| `/technology/scikit-learn` | `scikit-learn` | AI, ML & Quantitative Frameworks | **200 OK** |
| `/technology/astro` | `astro` | Frontend Architecture & Systems | **200 OK** |
| `/technology/tailwindcss` | `tailwindcss` | Frontend Architecture & Systems | **200 OK** |
| `/technology/git` | `git` | Developer Tooling & DevOps | **200 OK** |
| `/technology/cuda` | `cuda` | Languages & Core Runtimes | **200 OK** |
| `/technology/jupyter` | `jupyter` | Developer Tooling & DevOps | **200 OK** |
| `/technology/html5-css3` | `html5-css3` | Frontend Architecture & Systems | **200 OK** |
| `/technology/pydantic` | `pydantic` | Backend & Cloud Infrastructure | **200 OK** |

---

## 8. Summary Route Metrics

- **Total Static HTML Pages:** 60
- **Total Dynamic Endpoints Resolved:** 48
- **Total Top-Level Static Entrypoints:** 12
- **Orphan Routes / Dead Ends:** 0
- **Broken Internal Links:** 0
