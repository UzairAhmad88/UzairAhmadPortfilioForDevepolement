# Content Governance & Entity Lifecycle Policy

**Project:** Personal Developer Portfolio / Personal Engineering & Research Platform  
**Stage:** Post-Production Governance & Long-Term Stewardship  
**Scope:** Content Integrity, Entity Lifecycle & Relationship Governance  

---

## 1. The 10 Invariants of Content Maintenance

Every content addition or modification must adhere to the 10 immutable content invariants:

1. **Truth:** Every claim must be supported by real code, mathematical formulations, or verifiable achievements.
2. **Consistency:** Terminology, status taxonomy, and technical names must match across all 60 routes.
3. **Evidence:** Every featured project must link to an existing, verifiable public GitHub repository.
4. **Relationships:** Cross-references (`relatedResearch`, `relatedNotes`, `technologies`) must point to valid entity IDs.
5. **Dates:** Chronological dates must reflect actual completion years without future/impossible dates.
6. **Status:** Every entity must declare a canonical status supported by the schema.
7. **Terminology:** Use precise engineering terms (e.g. "Gaussian Mixture Models", "Covariance Ordering", "Async Session").
8. **URLs:** Route slugs must remain stable to prevent broken inbound links and protect SEO equity.
9. **SEO:** Every new page must define unique title tags, meta descriptions, and canonical links.
10. **Accessibility:** New visual diagrams or data tables must include text descriptions and semantic markup.

---

## 2. Canonical Project Lifecycle

Projects transition through 8 distinct lifecycle stages:

```text
┌─────────────────────────────────────────────────────────────────────────────┐
│                         CANONICAL PROJECT LIFECYCLE                         │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│      [IDEA] ────────► [EXPLORING] ────────► [PROTOTYPE] (Lab Workbench)     │
│                                                     │                       │
│                                                     ▼                       │
│  [COMPLETED] ◄────── [VALIDATING] ◄────── [IN DEVELOPMENT] (Active Repo)    │
│       │                                                                     │
│       ▼                                                                     │
│  [DEPLOYED] (Vercel Verified / Production Case Study in /work)              │
│       │                                                                     │
│       ▼                                                                     │
│  [ARCHIVED / SUPERSEDED] (Archived Project in /archive with context)        │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 3. Entity-by-Entity Governance Standards

### 3.1 Case Studies (`src/data/projects.ts`)
- **Required Sections:** Overview, Problem, Architecture Topology, Implementation, Challenges, Testing, Limitations, and Lessons Learned.
- **6-Lens Payload:** Must populate all 6 lenses (Overview, Architecture, Constraints, Stack, Evidence, Retrospective).
- **Prohibited:** Never use "Coming soon" or "TBD" on a public case study page.

### 3.2 Research Inquiries (`src/data/research.ts`)
- **Formal Structure:** Must declare a falsifiable hypothesis, multi-stage methodology, empirical findings, and LaTeX formulas.
- **Epistemic Honesty:** Clearly delineate between empirical data and analytical interpretation; always state open questions.

### 3.3 Lab Workbenches (`src/data/lab.ts`)
- **Experimental Sandbox:** Lab items represent prototypes, CLI utilities, and layout experiments.
- **Status Classification:** Must be classified as `completed`, `prototype`, or `concept`.

### 3.4 Engineering Notes (`src/data/notes.ts`)
- **Technical Notebook:** Focus on real debugging lessons, database transaction lifecycles, and architectural trade-offs.
- **Formatting:** All code snippets must include language syntax tags and line highlighting where appropriate.

### 3.5 Technology System (`src/data/technologies.ts`)
- **Canonical IDs Only:** Only technologies defined in `src/data/technologies.ts` may be referenced.
- **Zero Skill Scores:** Never add arbitrary numerical proficiency bars or ratings.
