# Engineering Notes — Cross-System Bidirectional Relationships

**Uzair Ahmad — Personal Engineering & Research Platform**  
**Phase 11 Specification**

---

## 1. Relational Topology

In Phase 11, the portfolio establishes strict bidirectional links connecting atomic **Engineering Notes** across all existing first-class systems.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                              PORTFOLIO CORE                                 │
│                                                                             │
│      PROJECTS (Phase 05/06) ◄──────────────► RESEARCH (Phase 10)           │
│         ▲              ▲                        ▲             ▲             │
│         │              │                        │             │             │
│         │ (related)    │ (evidence)             │ (inquiry)   │ (theory)    │
│         ▼              ▼                        ▼             ▼             │
│   TECHNOLOGIES (Phase 09) ◄──────────────► ENGINEERING NOTES (Phase 11)   │
│                                                     ▲                       │
│                                                     │ (methodology ground)  │
│                                                     ▼                       │
│                                            HOW I BUILD (Phase 08)          │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Implemented Bidirectional Mappings

### 2.1 Notes ↔ Projects
- **Note:** `async-sqlalchemy-session-lifecycle` ↔ **Project:** `curasphere-hms`
- **Note:** `fractional-differentiation-memory-stationarity` ↔ **Project:** `market-regime-engine`, `automated-trading-system`
- **Note:** `gmm-state-flipping-variance-ordering` ↔ **Project:** `market-regime-engine`
- **Note:** `deterministic-state-graph-pydantic-guardrails` ↔ **Project:** `autonomous-research-agent`, `curasphere-hms`
- **Note:** `zero-layout-shift-ssg-design-tokens` ↔ **Project:** `uzair-ahmad-platform`
- **Note:** `rbac-relational-integrity-emr-systems` ↔ **Project:** `curasphere-hms`

### 2.2 Notes ↔ Research Inquiries
- **Note:** `fractional-differentiation-memory-stationarity` ↔ **Research:** `signal-research-statistical-arbitrage`
- **Note:** `gmm-state-flipping-variance-ordering` ↔ **Research:** `market-regime-detection-gmm-hmm`
- **Note:** `deterministic-state-graph-pydantic-guardrails` ↔ **Research:** `deterministic-llm-orchestration-state-graphs`

### 2.3 Notes ↔ Technologies
- **Python:** Referenced by `async-sqlalchemy-session-lifecycle`, `fractional-differentiation-memory-stationarity`, `gmm-state-flipping-variance-ordering`, `deterministic-state-graph-pydantic-guardrails`
- **FastAPI:** Referenced by `async-sqlalchemy-session-lifecycle`
- **PostgreSQL:** Referenced by `async-sqlalchemy-session-lifecycle`, `rbac-relational-integrity-emr-systems`
- **LangGraph & Pydantic:** Referenced by `deterministic-state-graph-pydantic-guardrails`
- **NumPy, Pandas, Scikit-Learn:** Referenced by `fractional-differentiation-memory-stationarity`, `gmm-state-flipping-variance-ordering`
- **Astro, TailwindCSS, HTML5/CSS3:** Referenced by `zero-layout-shift-ssg-design-tokens`
- **Node.js, Express, TypeScript:** Referenced by `rbac-relational-integrity-emr-systems`

---

## 3. Future Knowledge Integrations (Do Not Implement Yet)

The structured relationships established in Phase 11 will feed directly into subsequent platform evolutions:
1. **Phase 12 (Lab):** Interactive code sandboxes and live runnable simulations demonstrating the note's algorithms (e.g. interactive fractional differentiation visualizer).
2. **Phase 13 (Knowledge Graph):** Node-edge graph traversals linking notes to methodology steps, research nodes, and project commits.
3. **Phase 14 (Unified Discovery):** Faceted cross-content search across notes, research papers, projects, and technologies.
