# Engineering Notes System

## 1. System Role

Engineering Notes (`src/data/notes.ts`) record concrete technical lessons, debugging post-mortems, and architectural decision records derived from real implementation challenges:
- `async-sqlalchemy-session-lifecycle`: Async session pooling and concurrency bugs in FastAPI.
- `fractional-differentiation-memory-stationarity`: Binomial weight expansion and memory preservation trade-offs.
- `gmm-state-flipping-variance-ordering`: Deterministic variance sorting for unsupervised Gaussian Mixture Models.
- `deterministic-state-graph-pydantic-guardrails`: Pydantic validation interceptors in LangGraph agents.
- `zero-layout-shift-ssg-design-tokens`: Eliminating CLS with CSS Subgrid and design tokens.
- `rbac-relational-integrity-emr-systems`: Multi-tenant RBAC and schema isolation in healthcare EMR systems.

---

## 2. Note Schema Invariants

Each `EngineeringNote` includes:
- **Topic & Type**: Clear classification (`Architecture`, `Debugging`, `Math`, `Performance`).
- **Core Problem & Solution**: Code snippets and technical explanations.
- **Architectural Trade-offs**: Pros, cons, and alternatives evaluated.
- **Reciprocal Links**: Links to originating Lab experiments and projects.
