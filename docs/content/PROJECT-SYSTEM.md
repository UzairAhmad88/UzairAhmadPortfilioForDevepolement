# Project System & Multi-Lens Architecture

## 1. Project Entity Specification

The Project system (`src/data/projects.ts`) manages production engineering case studies. Each project item implements:
- Core problem, solution, and outcome statements.
- Technical constraints, trade-offs, and failure mode analysis.
- Multi-Lens Engineering Navigator data (`ProjectLensData`).
- Structural visualizations (`Quantitative ML Pipeline`, `State Machine Graphs`).
- GitHub and Vercel verified deployment evidence.

---

## 2. 6-Lens Engineering Architecture

On every project detail page (`/work/[slug]`), visitors can switch between six interactive analytical lenses:
1. **Overview Lens**: Problem context, business constraints, and delivered outcome.
2. **Architecture Lens**: Multi-stage system flow, components, and execution nodes.
3. **Constraints Lens**: Mathematical limits, latency thresholds, and scaling boundaries.
4. **Stack Lens**: Canonical technology mapping and contract specifications.
5. **Evidence Lens**: Live deployment links, GitHub commit verification, and benchmark telemetry.
6. **Retrospective Lens**: Architectural decisions, lessons learned, and failure recovery notes.
