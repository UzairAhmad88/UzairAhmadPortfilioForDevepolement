# Content Relationships & Cross-Linking Architecture

**Platform:** Uzair Ahmad — Personal Engineering & Research Platform  
**Phase:** 03 — Information Architecture + Content Architecture  
**Status:** Approved  

---

## 1. Relational Graph Overview

Rather than treating projects, research, and lab experiments as isolated silos, the platform connects them via a two-way graph:

```
                  ┌──────────────────────┐
                  │    RESEARCH INQUIRY  │
                  │ (e.g. Signal Regimes)│
                  └──────────┬───────────┘
                             │
            Methodology &    │   Validates &
            Math Formulation │   Provides Evidence
                             ▼
                  ┌──────────────────────┐
                  │   ENGINEERING WORK   │
                  │(e.g. Regime Engine)  │
                  └──────────┬───────────┘
                             │
               Extracts Micro│   Matures &
               Explorations  │   Promotes To
                             ▼
                  ┌──────────────────────┐
                  │      LAB ENTRY       │
                  │(e.g. HMM Benchmark)  │
                  └──────────────────────┘
```

---

## 2. Implemented Cross-Linking Matrix

| Source Entity | Target Entity | Relationship Semantics | UI Expression |
| :--- | :--- | :--- | :--- |
| `deep-learning-stock-return-prediction` (Work) | `signal-research` (Research) | "Mathematical Theory & Methodology" | In-page card: *Related Research Inquiry →* |
| `market-regime-engine` (Work) | `market-regimes` (Research) | "Theoretical Regime Definition" | In-page card: *Mathematical Formulation →* |
| `multi-agent-prospect-intelligence` (Work) | `agentic-systems` (Research) | "Agent State Machine Research" | In-page card: *Agentic Systems Research →* |
| `signal-research` (Research) | `deep-learning-stock-return-prediction` (Work) | "Production System Implementation" | In-page card: *Corresponding Project Engine →* |
| `market-regimes` (Research) | `market-regime-engine` (Work) | "Implementation & Deployment" | In-page card: *Inspect Deployed Engine →* |
| `agentic-systems` (Research) | `multi-agent-prospect-intelligence` (Work) | "Applied Multi-Agent Architecture" | In-page card: *Inspect Multi-Agent Platform →* |

---

## 3. Technology & Topic Bridges

Content is also connected horizontally through shared technology tokens and topic tags:

- **PyTorch Bridge:** Links `deep-learning-stock-return-prediction` ↔ `signal-research` ↔ `market-regimes`.
- **Astro & TypeScript Bridge:** Links `curasphere-hms` ↔ `restaurant-pos` ↔ `portfolio-v2`.
- **Multi-Agent Systems Bridge:** Links `multi-agent-prospect-intelligence` ↔ `agentic-systems`.

---

## 4. Integrity Safeguards

- All relational slug arrays (`relatedProjects`, `relatedResearch`) are verified by automated unit tests in `tests/unit/projects.test.ts` and `tests/unit/research.test.ts`.
- If a related slug does not resolve to an active entity, the build will flag a dead link error before production deployment.
