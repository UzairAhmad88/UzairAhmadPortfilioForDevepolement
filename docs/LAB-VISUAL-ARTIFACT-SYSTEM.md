# Lab Visual Artifact & Technical Evidence System Architecture

**Project:** Personal Engineering & Research Platform  
**Subsystem:** Lab (Engineering Research Workbench)  
**Role:** Principal Frontend Engineer, Visual Information Designer, Accessibility Engineer & UI Architect  
**Status:** Implemented & Production Ready  

---

## 1. Vision & Core Principles

The **Lab Visual Artifact System** elevates visual diagrams, flowcharts, architecture topologies, and benchmark outputs from generic decorative images into a **rigorous technical evidence system**.

### The 6 Foundational Questions
Every visual artifact in the Lab explicitly answers:
1. **WHAT IS THIS?** — Clear semantic categorization (`PIPELINE`, `ARCHITECTURE`, `ALGORITHM`, `STATE_GRAPH`, `COMPARISON`, `TECHNICAL_SCREENSHOT`).
2. **WHY IS IT HERE?** — Contextual purpose grounding the visual in the experiment's central hypothesis.
3. **WHAT DOES IT SHOW?** — Unvarnished technical description of the data flow, state transition, or benchmark result.
4. **WHAT EXPERIMENT DOES IT BELONG TO?** — Bidirectional linkage to the canonical experiment record.
5. **IS IT ACTUAL OR CONCEPTUAL?** — Truthful evidence labeling (`ACTUAL`, `PROTOTYPE`, `CONCEPT`, `SIMULATION`, `PLANNED`).
6. **WHAT SHOULD THE VISITOR NOTICE?** — Critical architectural invariants, threshold cutoffs, or performance trade-offs.

---

## 2. Component Architecture

```
┌─────────────────────────────────────────────────────────────┐
│ LabArtifact.astro (Figure Container: <figure>)              │
├─────────────────────────────────────────────────────────────┤
│ 1. Header: [FIG 01 // PIPELINE] + [LabEvidenceBadge]        │
│    Title + Subtitle Context                                 │
├─────────────────────────────────────────────────────────────┤
│ 2. Visual Canvas:                                           │
│    - Node Flow Graphs (color-coded semantic roles)          │
│    - Comparison Matrices (delta badges & verdict borders)   │
│    - Telemetry / Metric Tracks                              │
├─────────────────────────────────────────────────────────────┤
│ 3. Interpretation Panel:                                    │
│    - WHAT THIS SHOWS (Emerald accent text)                  │
│    - WHAT TO NOTICE (Amber warning text)                    │
├─────────────────────────────────────────────────────────────┤
│ 4. Figcaption & Grounding Evidence:                         │
│    - Factual caption + Source repository tag                │
│    - <details> Text Alternative for assistive tech          │
└─────────────────────────────────────────────────────────────┘
                              │
                    (Click / Enter to inspect)
                              ▼
┌─────────────────────────────────────────────────────────────┐
│ LabArtifactViewer.astro (<dialog> Modal Overlay)            │
├─────────────────────────────────────────────────────────────┤
│ - Centered enlarged visual with blurred backdrop            │
│ - Full keyboard accessibility (Escape to close, focus trap) │
│ - Synchronized caption & title display                      │
│ - Zero runtime external dependencies                        │
└─────────────────────────────────────────────────────────────┘
```

---

## 3. Evidence State Classification

| Evidence State | Visual Indicator | Definition & Standard |
|---|---|---|
| **ACTUAL** | `● ACTUAL EVIDENCE` | Backed by live code implementation, execution telemetry, or benchmark logs. |
| **PROTOTYPE** | `◆ WORKING PROTOTYPE` | Functional experimental prototype subject to further architectural hardening. |
| **CONCEPT** | `◇ MATHEMATICAL CONCEPT`| Theoretical architecture or formulation prior to completed implementation. |
| **SIMULATION** | `▲ SYNTHETIC SIMULATION` | Simulated data workload evaluated against synthetic test inputs. |
| **PLANNED** | `○ PLANNED EXPERIMENT` | Future planned experiment on the research roadmap. |

---

## 4. Theme & Interaction Invariants

- **Dual-Theme Parity:** Custom tokens for Dark obsidian (`#101a17`) and Light paper (`#ffffff`) surfaces. Zero hardcoded colors.
- **Accessible Text Alternative:** Integrated `<details>` accordion ensures 100% WCAG 2.1 AA compliance for visually impaired and screen-reader users.
- **Zero Page Shift:** Fixed aspect ratios and pure CSS layout eliminate Cumulative Layout Shift (CLS = 0.000).
