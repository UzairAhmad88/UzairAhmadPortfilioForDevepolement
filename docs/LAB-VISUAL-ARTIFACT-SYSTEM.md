# Lab Visual Artifact & Diagram System

> **Platform:** Uzair Ahmad — Personal Engineering & Research Platform  
> **Subsystem:** Technical Visualizations, Artifacts & Architecture Topologies  
> **Component:** `src/components/visualizations/ProjectVisualization.astro`

---

## 1. Visual Artifact Architectural Rules

1. **Information-First Presentation:** Diagrams and visual artifacts exist solely to provide empirical evidence, explain data pipelines, and clarify state machine transitions. No purely decorative or arbitrary pseudo-code graphics are allowed.
2. **Aspect Ratio & Containment:** Diagrams scale responsively with `object-fit: contain` behavior without clipping, blurring, or distorting technical labels.
3. **State Classification Badging:** Every visual artifact is explicitly classified:
   - `ACTUAL SYSTEM` — Verified deployed production architecture.
   - `WORKING PROTOTYPE` — Active sandbox experimental topology.
   - `MATHEMATICAL CONCEPT` — Analytical formulation / conceptual schematic.
   - `PLANNED EXPERIMENT` — Proposed exploration setup.

---

## 2. Supported Topology Roles & Visual Encoding

```text
┌─────────────────┬───────────────────┬────────────────────────────────┐
│ Role Type       │ Visual Indicator  │ Functional Responsibility      │
├─────────────────┼───────────────────┼────────────────────────────────┤
│ Input           │ Slate / Gray Bar  │ Ingestion & Feed Data Sources  │
│ Process         │ Teal / Accent Bar │ Transformation & State Machine │
│ Model           │ Purple / Lavender │ ML Models & Numerical Solvers  │
│ Guardrail       │ Emerald / Mint    │ Validation & Type Constraints  │
│ Storage         │ Cyan / Blue Bar   │ Persistence & Cache Layers     │
│ Output          │ Amber / Gold Bar  │ Terminal State & Deliverables  │
└─────────────────┴───────────────────┴────────────────────────────────┘
```

---

## 3. Dual-Theme Parity for Visual Artifacts

### Dark Theme:
- Canvas Surface: `rgba(16, 26, 23, 0.85)` with subtle accent border.
- Node Card: `rgba(7, 17, 15, 0.75)` with high-contrast `#f6f1e8` title.
- Directional Connectors: `#7ed8c4` with 0.6 opacity.

### Light Theme:
- Canvas Surface: Pure white `#ffffff` with high-contrast `rgba(20, 31, 28, 0.12)` border.
- Node Card: Crisp `#f8fafc` slate background with dark `#141f1c` title and `#4e6059` sublabels.
- Directional Connectors: Deep emerald `#0d7663` with 0.8 opacity.

---

## 4. Assistive Technology & Fallbacks

Every visual artifact includes an accessible textual disclosure widget (`<details class="vis-accessible-details">`) containing a complete step-by-step description of node connections and data transformations, ensuring that visitors using screen readers or text-only browsers receive 100% of the information conveyed by the diagram.
