# Project System 2.0: Technical Body of Work

**Platform:** Uzair Ahmad — Personal Engineering & Research Platform  
**Live Canonical URL:** https://uzair-ahmad-portfilio-for-devepolem.vercel.app/work  
**Phase:** 05 — Project System 2.0  
**Status:** Canonical Reference  

---

## 1. System Vision & Core Philosophy

In Project System 2.0, projects are not treated as decorative cards or marketing teasers. Every project represents **verifiable technical evidence**.

The system is structured around an engineering proof narrative:
$$\text{Problem} \;\longrightarrow\; \text{Thinking} \;\longrightarrow\; \text{Design} \;\longrightarrow\; \text{Engineering} \;\longrightarrow\; \text{Validation} \;\longrightarrow\; \text{Result} \;\longrightarrow\; \text{Learning} \;\longrightarrow\; \text{Evidence}$$

---

## 2. Documentation Depth Levels

Projects are categorized by documentation depth rather than artificial quality rankings:

| Depth Level | Definition | Typical Scope | Representative Entry |
| :--- | :--- | :--- | :--- |
| **Level 3: Flagship Case Study** | Exhaustive architectural breakdown with problem context, objectives, system topologies, decision tradeoffs, empirical results, and retrospective lessons. | Complex multi-horizon models, production full-stack platforms, or university FYP. | `deep-learning-stock-return-prediction`, `curasphere-hms`, `multi-agent-prospect-intelligence` |
| **Level 2: Detailed Project** | Structured documentation covering problem, implementation architecture, challenges, and public source repository. | Working systems, analytical engines, and service architectures. | `market-regime-engine`, `restaurant-pos`, `hayatabad-gym` |
| **Level 1: Standard Entry** | Compact technical overview with key technologies, problem solved, and repository links. | Utility tools, small web builds, and component libraries. | Future standard open-source tools |
| **Level 4: Technical Experiment** | Focused specifically on hypotheses tested, test scripts, and experimental findings. | Algorithmic prototypes and proof-of-concept tests. | Lab explorations and micro-benchmarks |

---

## 3. Project Categories & Domains

Every project is assigned a primary classification and one or more topic tags:
- **QUANT:** Quantitative Finance, time-series forecasting, market regime clustering.
- **AI / ML:** Deep learning models, PyTorch pipelines, neural forecasting.
- **AGENTS / INTELLIGENCE:** Multi-agent state machines, deterministic workflow guardrails.
- **ENGINEERING / FULL-STACK:** TypeScript, Astro, React, Node.js, relational SQL systems.
- **ACADEMIC:** University capstones / Final Year Projects (FYP).
- **PRODUCT:** User-facing platforms with accessible interfaces and live deployments.

---

## 4. Factual Lifecycle Statuses

Lifecycle statuses reflect verifiable production reality:
- `active`: Maintained, expanding, or under active research validation.
- `completed`: Successfully engineered, verified, and shipped.
- `academic`: University capstone / FYP with documented requirements.
- `prototype`: Functional proof-of-concept validated locally or in staging.
- `deployed`: Running in production on Vercel or custom server infrastructure.
- `archived`: Historical codebase preserved for reference.

---

## 5. Architectural Flow

```
                      CENTRAL DATA
                 (src/data/projects.ts)
                           │
           ┌───────────────┴───────────────┐
           │                               │
    HOMEPAGE PREVIEW                WORK ARCHIVE
  (Selected 3–5 items)             (/work Catalog)
           │                               │
           └───────────────┬───────────────┘
                           │
                           ▼
                 PROJECT DETAIL PAGE
                    (/work/[slug])
                           │
           ┌───────────────┼───────────────┐
           ▼               ▼               ▼
      ARCHITECTURE     TRADEOFFS       EVIDENCE
        DIAGRAMS       & DECISIONS    (GitHub/Live)
```
