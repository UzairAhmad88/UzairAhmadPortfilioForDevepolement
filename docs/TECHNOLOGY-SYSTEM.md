# Technology System — Architecture & Engineering Ecosystem

## 1. System Overview
The **Technology System** transforms the portfolio's tech stack from a static list of badges into an evidence-driven, relational ecosystem. Rather than displaying subjective proficiency scores or generic skill progress bars (`React — 95%`, `Expert level`), the system contextualizes each technology by its exact architectural role, problem domain, and verifiable project codebases.

---

## 2. Core Relational Graph

```text
                  TECHNOLOGY ENTITY (e.g. PyTorch)
                                │
       ┌────────────────────────┼────────────────────────┐
       ▼                        ▼                        ▼
PROJECT EVIDENCE         SYSTEM ROLE              HOW I BUILD
Deep Learning Stock      Low-Level Tensor        04 / BUILD
Return Prediction        Operations & Loss       05 / VALIDATE
(GitHub Public Repo)     Penalties on GPU        (Walk-Forward CV)
```

---

## 3. Technology Capabilities & Domain Areas

1. **Quantitative & Mathematical Systems:**
   - Python, PyTorch, Pandas, NumPy, Scikit-Learn, CUDA, Jupyter.
   - Used for non-stationary series transformation, fractional differentiation, and walk-forward cross-validation.
2. **Stateful Multi-Agent AI:**
   - LangGraph, FastAPI, Pydantic, Python, TypeScript.
   - Used for directed acyclic/cyclic state machines, schema guardrails, and deterministic tool execution.
3. **Backend & Data Infrastructure:**
   - Node.js, Express, PostgreSQL, TypeScript, FastAPI.
   - Used for relational medical records (EMR), JWT authentication gateways, and typed REST API controllers.
4. **Frontend & Product Experience:**
   - Astro, React, TypeScript, TailwindCSS, HTML5 & Modern CSS.
   - Used for sub-2s static generation, role-based clinician portals, touch-optimized POS layouts, and zero CLS.
5. **Engineering Tooling & Discipline:**
   - Git, CUDA, Jupyter, Node Test Runner.
   - Used for reproducible commit histories, automated unit tests, and hardware-accelerated training.

---

## 4. Canonical Routing Architecture
- `/technology`: Interactive directory with category tabs, client-side filtering, fast search, and project evidence badges.
- `/technology/[slug]`: Dedicated static profiles for every cataloged technology providing architectural context, project links, research links, and official documentation references.
