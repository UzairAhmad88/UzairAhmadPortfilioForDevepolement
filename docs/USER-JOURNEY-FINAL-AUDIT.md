# User Journey Final Audit (5 Persona Evaluation)

**Project**: Uzair Ahmad Personal Professional Website  
**Phase**: `PHASE 10 — Final Polish + Launch`  
**Date**: October 2026  
**Evaluation Model**: Multi-Persona Cognitive Walkthrough  

---

## 1. Persona 1: Tech Recruiter / Hiring Manager

- **Goal**: Quickly assess technical depth, engineering competency, core languages/frameworks, and direct contact options.
- **Path**: Lands on `/` → reads headline ("Quantitative AI & Product Engineer") → checks "Capabilities" and "Tech Stack" (Python, PyTorch, TypeScript, React, PostgreSQL) → clicks `/work` → reads `deep-learning-stock-return-prediction` and `multi-agent-prospect-intelligence` (FYP) → clicks "Contact" or LinkedIn in footer.
- **Evaluation**:
  - *Time to assess core stack*: < 5 seconds.
  - *Clarity of experience level & role scope*: High.
  - *Next Action*: Clear direct links to LinkedIn (`/in/uzair-ahmad-58007a266`) and email (`imuzairahmad8@gmail.com`).
- **Verdict**: **PASS**

---

## 2. Persona 2: Potential Client / Founder

- **Goal**: Understand if Uzair can architect and deliver reliable full-stack applications or AI systems from scratch.
- **Path**: Lands on `/` → navigates to `/services` → reads collaboration models (Full-Stack Product Engineering, Quantitative AI Systems, Applied AI Agents) → views `curasphere-hms` and `restaurant-pos` case studies → submits a structured inquiry at `/contact`.
- **Evaluation**:
  - *Clarity of services without agency fluff*: 100% honest and grounded in actual engineering capabilities.
  - *Proof of delivery*: Real, interactive architecture diagrams, technology trade-offs, and GitHub code links.
  - *Friction in outreach*: Low — structured form with optional project scope, budget, and timeline fields.
- **Verdict**: **PASS**

---

## 3. Persona 3: Technical Collaborator / Open-Source Peer

- **Goal**: Evaluate code quality, architecture patterns, and technical trade-offs.
- **Path**: Lands on `/work/deep-learning-stock-return-prediction` → reads the architecture notes (fractional differentiation, sliding temporal windows, gradient clipping) → clicks GitHub source code link (`github.com/UzairAhmad88/...`) → inspects Python/PyTorch repository.
- **Evaluation**:
  - *Technical Depth*: Concrete implementation details rather than generic marketing buzzwords.
  - *Code Availability*: Real GitHub links for open-source repositories.
  - *Trade-off Transparency*: Lists limitations (e.g. daily/hourly bars vs microsecond tick feeds).
- **Verdict**: **PASS**

---

## 4. Persona 4: Academic Researcher / Quantitative Analyst

- **Goal**: Review mathematical formulations, empirical methodologies, stationarity tests, and literature references.
- **Path**: Lands on `/research` → opens `/research/signal-research` → examines the fractional differentiation binomial expansion formula:
  $$(1-B)^d = \sum_{k=0}^{\infty} (-1)^k \binom{d}{k} B^k$$
  → checks ADF/KPSS methodology and Hamilton (1989) / López de Prado (2018) references → explores `/research/market-regimes` for GMM/HMM volatility clustering.
- **Evaluation**:
  - *Academic Credibility*: Honest distinction between active lab experiments, simulations, and published literature.
  - *Reference Quality*: Real DOI/publisher URLs.
- **Verdict**: **PASS**

---

## 5. Persona 5: Frontend / Web Developer

- **Goal**: Inspect web performance, accessibility, responsive UI fidelity, and semantic markup.
- **Path**: Opens Chrome DevTools on desktop and mobile viewports → tests keyboard `Tab` navigation → audits headings ($h_1 \rightarrow h_2 \rightarrow h_3$) → inspects network payload size (< 500KB total, zero hydration bloat) → validates security headers in network tab.
- **Evaluation**:
  - *Semantic Structure*: Valid HTML5 `<header>`, `<nav>`, `<main>`, `<article>`, `<aside>`, `<footer>`.
  - *Accessibility*: Visible `:focus-visible` rings, `aria-expanded` and `aria-controls` on mobile drawer, `font-display: swap`.
  - *Performance*: Pure Astro static HTML rendering with instantaneous route switching.
- **Verdict**: **PASS**
