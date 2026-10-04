# Lab System QA Baseline

**Date:** 2026-10-04  
**Scope:** Personal Engineering & Research Platform — Lab Subsystem  
**Evaluator:** Principal Frontend Engineer, Design Systems Architect, Accessibility Engineer, Production QA Engineer  
**Status:** Complete / Verified Baseline  

---

## 1. Inventory of Lab Routes

The Lab subsystem is a core technical exploration workspace within the platform. The route inventory comprises 1 Index route and 6 Static Detail routes (60 total static pages in the application build).

| Route Path | Type | Experiment / View Title | Static Generation | Direct URL Access |
|---|---|---|---|---|
| `/lab` | Index / Hub | Engineering Research Workbench | SSG (`dist/lab/index.html`) | Pass (HTTP 200) |
| `/lab/streaming-orderbook-sse` | Detail | Asynchronous Server-Sent Events for Market Feeds | SSG (`dist/lab/streaming-orderbook-sse/index.html`) | Pass (HTTP 200) |
| `/lab/deterministic-agent-loops` | Detail | Finite State Transitions for Multi-Tool LLM Trajectories | SSG (`dist/lab/deterministic-agent-loops/index.html`) | Pass (HTTP 200) |
| `/lab/sparse-dense-hybrid-search` | Detail | Reciprocal Rank Fusion of BM25 and Dense Embeddings | SSG (`dist/lab/sparse-dense-hybrid-search/index.html`) | Pass (HTTP 200) |
| `/lab/zero-copy-deserialization` | Detail | FlatBuffers vs Protocol Buffers Memory Overhead in Node.js | SSG (`dist/lab/zero-copy-deserialization/index.html`) | Pass (HTTP 200) |
| `/lab/canvas-subpixel-rendering` | Detail | Hardware-Accelerated Vector Glyphs on High-DPI Displays | SSG (`dist/lab/canvas-subpixel-rendering/index.html`) | Pass (HTTP 200) |
| `/lab/edge-wasm-crypto-bench` | Detail | SIMD-Accelerated Curve25519 Key Exchange in Cloudflare Workers | SSG (`dist/lab/edge-wasm-crypto-bench/index.html`) | Pass (HTTP 200) |

---

## 2. Lab Component Inventory

The Lab system is composed of specialized, accessible, dual-theme compliant components:

1. **`src/components/lab/WorkbenchPrinciple.astro`**
   - **Role:** Technical philosophy callout emphasizing the distinction between polished projects and raw workbench explorations.
   - **Visuals:** Semantic emerald accent bar, subtle border radius (`var(--radius-md)`), monospace metadata tag, responsive typography.
   - **Theme:** Fully reactive across Light (`#ffffff`, `#0d7663`) and Dark (`rgba(16,26,23,0.75)`, `#7ed8c4`) themes.
   - **A11y:** Landmark role with descriptive heading hierarchy.

2. **`src/components/lab/LabFilters.astro`**
   - **Role:** Interactive filter bar for categorizing experiments by type (`All`, `Prototype`, `Benchmark`, `Investigation`, `Proof of Concept`).
   - **Interaction:** Synchronizes filter state with URL query parameter (`?type=...`), updates active button states, and provides live screen-reader feedback (`aria-live="polite"`).
   - **Responsive:** Fluid horizontal scrolling flex-container with zero page clipping on narrow viewports (down to 320px).

3. **`src/components/cards/LabItemCard.astro`**
   - **Role:** Primary scan card for the Lab index grid.
   - **Structure:**
     1. Metadata header (Type pill, Status badge, Evidence state badge).
     2. Clean title with clean prefix separation.
     3. Dedicated Question callout box (`QUESTION // ...`).
     4. Clamped technical summary.
     5. Key outcome summary row with status indicator.
     6. Technology tags list.
     7. Explicit CTA (`Inspect Workbench →`).
   - **Keyboard & Focus:** Focusable link target with visible outline (`var(--color-accent-teal)`).

4. **`src/components/visualizations/ProjectVisualization.astro`**
   - **Role:** Visual artifact presentation for technical workflows and state machines.
   - **Structure:** SVG/CSS-based node graph, execution pipeline, and state transition maps with accessible `<details>` screen-reader transcript.
   - **Theme Support:** Scoped dual-theme styling ensuring contrast on dark obsidian and clean light paper backgrounds.

5. **`src/components/vercel/VercelEvidenceBadge.astro`**
   - **Role:** Visual status indicator grounding experiments in verified deployment and runtime environments.

---

## 3. Data Model & Schema

All Lab experiments conform to the strictly typed TypeScript schema defined in `src/data/lab.ts`:

- **ID:** Unique slug string matching kebab-case pattern.
- **Title:** Complete technical title.
- **Type:** One of `'prototype' | 'benchmark' | 'investigation' | 'proof-of-concept'`.
- **Status:** One of `'active' | 'graduated' | 'concluded' | 'archived'`.
- **Evidence State:** One of `'actual' | 'prototype' | 'simulation' | 'concept'`.
- **Date & Updated:** ISO 8601 date strings (`YYYY-MM-DD`).
- **Research Question:** Explicit question being tested.
- **Hypothesis:** Expected outcome or technical premise.
- **Context & Motivation:** Grounding background.
- **Implementation:** Technical details, architectural choices, and algorithms.
- **Observations & Results:** Empirical measurements, latency metrics, and test outputs.
- **Limitations:** System constraints, hardware dependencies, and trade-offs.
- **Next Steps:** Actionable future explorations.
- **Technologies:** Canonical tech stack identifiers.
- **Cross-System Relations:** Bidirectional linkage to Projects, Research Papers, and Notes.

---

## 4. Initial Baseline Quality Assessment

| Assessment Dimension | Baseline Status | Notes |
|---|---|---|
| Route Resolution | 100% Pass | 7/7 routes build and render statically without errors. |
| Type Safety | 100% Pass | Zero TypeScript compilation or lint errors. |
| Visual Hierarchy | High | Clean distinction between Question, Hypothesis, Implementation, and Results. |
| Dual-Theme Parity | High | All components verified in Light and Dark themes. |
| Accessibility | High | WCAG 2.1 AA compliant, visible focus rings, ARIA live regions. |
| Content Truth | Verified | All benchmarks and code outputs grounded in real engineering explorations. |
