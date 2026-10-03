# Content Taxonomy Specification

**Platform:** Uzair Ahmad — Personal Engineering & Research Platform  
**Phase:** 03 — Information Architecture + Content Architecture  
**Status:** Approved  

---

## 1. Separation of Concerns: Content Type vs Topic

A critical foundation of Information Architecture 2.0 is the strict separation between **What form the content takes** (`ContentType`) and **What subject area it addresses** (`Topic`).

```
┌────────────────────────────────────────────────────────────────────────┐
│                        TWO-DIMENSIONAL TAXONOMY                        │
├───────────────────────────────────┬────────────────────────────────────┤
│ CONTENT TYPE (Form & Depth)       │ TOPIC (Domain & Subject)           │
├───────────────────────────────────┼────────────────────────────────────┤
│ • Project (Production software)   │ • Quantitative Finance             │
│ • Case Study (In-depth analysis)  │ • Machine Learning & AI            │
│ • Research (Formal study/inquiry) │ • Deep Learning & Neural Nets      │
│ • Note (Engineering insight)      │ • Multi-Agent Systems              │
│ • Experiment (Lab prototype)      │ • Full-Stack Web Engineering       │
│ • Tool / Utility (Micro-script)   │ • Cloud & Systems Architecture     │
│ • Tutorial (Methodology guide)    │ • UI/UX & Design Systems           │
└───────────────────────────────────┴────────────────────────────────────┘
```

---

## 2. Content Type Definitions

### 2.1 Project (`project`)
- **Definition:** Deployed or structured software designed to execute an end-to-end task.
- **Key Attributes:** Public repository, live URL (where deployed), technology stack, problem/solution statement, architecture diagram.
- **Route:** `/work/[slug]`

### 2.2 Case Study (`case-study`)
- **Definition:** Exhaustive architectural writeup of a flagship project.
- **Key Attributes:** Context, objectives, technical challenges, key decisions with tradeoffs, empirical results, lessons learned.
- **Route:** `/work/[slug]`

### 2.3 Research Inquiry (`research`)
- **Definition:** Methodological exploration of a mathematical or statistical question.
- **Key Attributes:** Core question, hypothesis, methodology, dataset, mathematical formulation, findings, limitations, cited papers.
- **Route:** `/research/[slug]`

### 2.4 Lab Entry (`lab`)
- **Definition:** Exploratory prototype or technical proof-of-concept.
- **Key Attributes:** Objective, experiment script, live playground/demo, repository, status (Experiment, Prototype, Promoted, Archived).
- **Route:** `/lab/[slug]`

### 2.5 Engineering Note (`note`)
- **Definition:** Concise, reusable architectural or implementation insight.
- **Key Attributes:** Code snippet, decision rationale, benchmark comparison.

---

## 3. Topic Taxonomies & Mapping

| Topic Key | Display Label | Primary Associated Technologies |
| :--- | :--- | :--- |
| `quant` | Quantitative Finance | Python, Pandas, NumPy, Statsmodels, Walk-Forward CV |
| `ai-ml` | Machine Learning & AI | PyTorch, Scikit-Learn, GMM, HMM, Neural Networks |
| `agents` | Multi-Agent Systems | LangGraph, State Machines, Deterministic Guardrails |
| `web` | Full-Stack Web | Astro, React, TypeScript, Node.js, Express, Tailwind/CSS |
| `data-systems`| Data Infrastructure | PostgreSQL, REST APIs, JSON Validation, Data Cleaning |
| `systems` | Systems & DevOps | Linux, Git, GitHub Actions, Vercel, Automated QA |
| `ui-ux` | UI/UX & Design Systems | Semantic HTML5, CSS Tokens, WCAG 2.1 AA, Responsive |

---

## 4. Status Taxonomy

- `active`: Currently maintained, expanding, or under live research.
- `completed`: Successfully engineered, verified, and shipped.
- `academic`: University / FYP research project with academic rigor.
- `prototype`: Functional proof-of-concept in the exploratory phase.
- `promoted`: Lab experiment that matured into a full Work project.
- `archived`: Historical codebase preserved for reference.
