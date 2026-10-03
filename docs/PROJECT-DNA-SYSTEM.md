# PROJECT DNA SYSTEM (PHASE 06)
## Technical Project Fingerprint & Evidence Language

> **Platform:** Uzair Ahmad — Personal Engineering & Research Platform  
> **Status:** Active / Production Specification  
> **Phase:** 06 — Project DNA  

---

## 1. PURPOSE & CORE PHILOSOPHY

The **Project DNA System** transforms each software engineering, quantitative model, and AI project from a decorative "portfolio card" into a structured, verifiable **technical project fingerprint**.

Rather than displaying arbitrary technology logo walls or generic descriptions, the Project DNA system establishes an immediate, information-dense specification of:
1. **Classification & Domain:** What kind of engineering system was built?
2. **Lifecycle State:** Is it active research, academic work, or a deployed production product?
3. **Role & Responsibility:** What was Uzair's exact personal contribution?
4. **Project Context:** Was this an academic thesis, independent research, client work, or personal engineering?
5. **Runtime & Execution:** Where and how does the system execute?
6. **Core Stack:** Which specific libraries, engines, and protocols are essential to the architecture?
7. **Verifiable Evidence:** Where are the public repositories, deployed live instances, and on-platform case studies?

---

## 2. KEY PRINCIPLES

### A. Classification Over Evaluation
Project DNA is **not** a rating or scoring system. The platform explicitly prohibits:
- Fake difficulty scores (e.g. "Complexity: 9/10")
- Fabricated progress bars (e.g. "87% complete")
- Marketing badges (e.g. "Top Project", "Elite Build")

The goal is **objective clarity**, not self-awarded trophies.

### B. Clean Absence & Truthfulness
If a metadata property is unknown or unverified for a given project, it is **cleanly omitted** from the UI. The system never renders placeholder indicators such as `ROLE: UNKNOWN` or `DEPLOYMENT: —`. Clean absence preserves editorial credibility.

### C. Evidence-First Architecture
Every serious project must link directly to verifiable artifacts:
- **Public GitHub Repositories** for inspectable source code.
- **Live Deployments / Hosted Demos** where verified.
- **Comprehensive Case Studies** detailing problems, architectures, decisions, challenges, and lessons learned.

---

## 3. DNA ATTRIBUTES & SUPPORTED TAXONOMY

| DNA Dimension | Supported Values / Format | Description |
| :--- | :--- | :--- |
| **Classification (`type`)** | `Quantitative Research & System`, `Final Year Project (FYP) & AI System`, `Healthcare Management SaaS`, `Quantitative Market Intelligence`, `Operations & POS Software`, `Fitness Platform` | Precise architectural classification of the deliverable. |
| **Lifecycle Status (`status`)** | `Active Research`, `Academic FYP`, `Completed`, `Prototype`, `Archived` | Factual lifecycle state with distinct visual indicator. |
| **Role (`role`)** | Specific engineering title (e.g. `Lead Quantitative AI Engineer`, `Full-Stack Web Engineer`) | Factual responsibility and technical ownership. |
| **Context (`context`)** | `Independent Research`, `Academic (FYP)`, `Personal Engineering`, `Client Platform`, `Open Source` | Background domain and organizational setting. |
| **Timeline (`timeline`)** | Year span or milestone (e.g. `2024 – Present`, `2024 – 2025`, `2024`) | Verifiable chronological activity. |
| **Runtime (`deployment`)** | `Local Research / GPU (CUDA)`, `Python / LangGraph Agent Runtime`, `Vercel (Production)`, `Local Execution / Browser` | Concrete execution environment. |
| **Core Stack (`technologies`)** | Curated array of meaningful technologies (e.g. `['Python', 'PyTorch', 'FastAPI']`) | Essential architectural components without logo clutter. |
| **Evidence (`evidence`)** | Array of `{ label, url, type, verified }` | Clickable, accessible links to genuine code, demos, and case studies. |

---

## 4. INTEGRATION ACROSS VIEWS

The Project DNA system is exposed across the entire platform via the unified component `ProjectDNA.astro`:

1. **Project Detail Page (`/work/[slug]`):**  
   Uses `variant="detail"` to render a full technical specification sheet at the top of the case study, accompanied by a synchronized sidebar spec profile.
2. **Project Card (`ProjectCard.astro` on Homepage & Archive):**  
   Uses `variant="card"` to render a compact fingerprint showing classification, status, timeline, role, top 4 core stack tags, and evidence links.
3. **Flagship Featured Card (`FeaturedProjectCard.astro`):**  
   Uses `variant="featured"` to highlight the primary quantitative case study with an integrated spec strip.
4. **Minimal / Compact Lists:**  
   Uses `variant="compact"` for inline single-line metadata summary strings.
