# Lab Component System & Architecture

> **Platform:** Uzair Ahmad — Personal Engineering & Research Platform  
> **Subsystem:** Lab Components Architecture  
> **Location:** `src/components/lab/`, `src/components/cards/`, `src/components/visualizations/`

---

## 1. Component Taxonomy

The Lab UI architecture is built around 5 modular, accessible components:

```text
┌─────────────────────────────────────────────────────────────┐
│                       Lab Subsystem                         │
├──────────────────────────────┬──────────────────────────────┤
│ Index Surface (/lab)         │ Detail Surface (/lab/[slug]) │
├──────────────────────────────┼──────────────────────────────┤
│ • SectionHeader              │ • Breadcrumbs                │
│ • WorkbenchPrinciple         │ • Experiment Header          │
│ • LabFilters                 │ • QuestionCallout            │
│ • LabItemCard (Grid)         │ • CodeSnippetBox             │
│ • GraduatedSection           │ • ProjectVisualization       │
│ • EmptyState                 │ • OutcomesGrid               │
│ • ContactCallout             │ • RelatedKnowledgeGrid       │
└──────────────────────────────┴──────────────────────────────┘
```

---

## 2. Component Specifications

### A. `WorkbenchPrinciple.astro`
- **Location:** `src/components/lab/WorkbenchPrinciple.astro`
- **Purpose:** Editorial callout defining the non-commercial, hypothesis-driven philosophy of the Engineering Lab.
- **Design Tokens:**
  - Dark Theme: Elevated surface (`rgba(16, 26, 23, 0.75)`), subtle border (`rgba(246, 241, 232, 0.09)`), accent bar (`#7ed8c4`).
  - Light Theme: Pure white surface (`#ffffff`), dark charcoal border (`rgba(20, 31, 28, 0.12)`), dark teal accent (`#0d7663`).
- **Semantics:** `<aside class="workbench-principle-shell" aria-labelledby="principle-heading">`

### B. `LabFilters.astro`
- **Location:** `src/components/lab/LabFilters.astro`
- **Purpose:** Interactive category filter buttons with active state and real-time experiment count.
- **Interactivity:**
  - JavaScript URL Search Parameter synchronization (`/lab?type=Quant+Experiment`).
  - Popstate listener for back/forward browser navigation.
  - Active button state (`aria-pressed="true"`).

### C. `LabItemCard.astro`
- **Location:** `src/components/cards/LabItemCard.astro`
- **Purpose:** Primary card component representing an individual experiment on index grids.
- **Hierarchy:**
  1. Top Badge Row: Type Pill + Status Pill (with indicator dot) + State Metadata
  2. Identifier + Clean Title Link
  3. Semantic Question Box (`QUESTION: ...`)
  4. Short Description (2 lines clamp)
  5. Outcome Row (if available)
  6. Footer: Tech Stack (max 4) + `Inspect Workbench →` link

### D. `ProjectVisualization.astro`
- **Location:** `src/components/visualizations/ProjectVisualization.astro`
- **Purpose:** Interactive node topology diagram renderer for architectures, data flows, and state machines.
- **Features:**
  - Distinct role border colors (input, process, model, guardrail, storage, output).
  - Dual-theme node card backgrounds and high-contrast labels.
  - Accessible `<details>` text alternative for screen readers.

### E. `VercelEvidenceBadge.astro`
- **Location:** `src/components/vercel/VercelEvidenceBadge.astro`
- **Purpose:** Verified deployment proof badge linking to live Vercel deployments and GitHub source repositories.
- **Features:** Dual-theme scoped styles with live status indicator dot and framework display tag.
