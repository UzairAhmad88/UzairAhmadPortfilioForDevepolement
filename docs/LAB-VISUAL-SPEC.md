# Lab Visual Specification & Workbench UI Tokens

**Uzair Ahmad — Personal Engineering & Research Platform**  
**Phase 12 Specification**

---

## 1. Aesthetic Direction: The Engineering Workbench

The Lab UI embraces a focused, disciplined workbench aesthetic:
- **Atmosphere:** Dark obsidian panels (`#0b0e14`, `#12161c`) with subtle borders (`#1e293b`), elevated slate card backgrounds (`#151b23`), and vibrant indigo/cyan accents (`#6366f1`, `#38bdf8`, `#818cf8`).
- **Typography:** High-contrast sans-serif (`Inter`, system sans) paired with crisp monospaced labels (`JetBrains Mono`, system monospace) for technical parameters, mathematical formulas, and questions.
- **Micro-Interactions:** Subtle hover lifts (`-2px`), border accent glows, and smooth pill filter transitions. Zero jarring 3D models or particle canvas distractions.

---

## 2. Component Specifications

### 2.1 Lab Item Card (`LabItemCard.astro`)
- **Badge Bar:** Displays Status (`Completed`, `Active`, `Prototype`, `Validating`, `Exploring`), Type (`Algorithm Experiment`, `Prototype`, etc.), Year, and State (`ACTUAL`, `PROTOTYPE`, `CONCEPT`).
- **Question Banner:** High-visibility monospaced callout highlighting the core inquiry (`Q: Can X achieve Y?`).
- **Description:** Concise summary clamped to 3 lines.
- **Outcome Tag:** Neutral pill indicating empirical result (`Demonstrated technically`, `Confirmed`, `Partially supported`, `Requires further testing`).
- **Footer:** Canonical technology tags and clean directional action (`Inspect Workbench →`).

### 2.2 Lab Detail View (`/lab/[slug]`)
- **Max Width:** Constrained to `max-w-4xl` (`~896px`) for optimal typographic reading measure.
- **Numbered Sectioning:** Clear, scannable editorial sections (`01 — Question`, `02 — Context`, `03 — Experiment`, `04 — Visualizations`, `05 — Observations`, `06 — Limitations`, `07 — Next Steps`, `08 — Cross-System Links`).
- **Diagrams:** Clean data-driven SVG diagrams rendered via `ProjectVisualization.astro`.
- **Code Listings:** Syntax-highlighted blocks with language badges, filename headers, and horizontal scrolling isolation.

---

## 3. Responsive Breakpoints & Accessibility

- **Mobile Viewports (320px – 430px):** Single-column stacked cards, full-width filter button wrapping, minimum 44px tap targets, zero horizontal page scroll.
- **Tablet / Desktop (768px – 1440px+):** 2-column workbench grid on index, balanced 3-column relationship cards on detail.
- **WCAG 2.1 AA Compliance:** Minimum 4.5:1 contrast ratios on all text and badge elements, semantic `<article>`, `<header>`, `<nav>`, `<section>` hierarchy, visible focus rings on interactive elements.
