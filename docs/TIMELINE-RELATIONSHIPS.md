# Personal Engineering Timeline — Relationships & Lineage Specification

## 1. Relational Integration

The Timeline System reuses relationships established in the **Knowledge Graph (Phase 13)** and **Project Archive (Phase 18)** rather than creating an isolated relationship graph.

```
       [ Online Complaint Management System ] (2024, Python/Flask)
                         │
                         │ (Superseded by)
                         ▼
        [ Restaurant POS & Inventory Engine ] (2024, Python/Flask)
                         │
                         │ (Evolved into / Superseded by)
                         ▼
           [ Curasphere HMS Enterprise ] (2025-2026, Next.js / TypeScript)
```

---

## 2. Supported Timeline Relationship Links

| Relationship | Source Event | Target Event | Visual Rendering on Timeline |
|---|---|---|---|
| `SUPERSEDED_BY` | Precursor Project | Successor Project | Alert badge: `Superseded by [Successor Project] →` |
| `EVOLVED_FROM` | Successor Project | Precursor Project | Lineage tag: `Evolved from [Predecessor Project] →` |
| `ORIGINATED_FROM_LAB` | Project | Lab Experiment | Cross-link: `Promoted from Lab Experiment [Lab Slug] →` |
| `VALIDATED_BY_RESEARCH` | Project | Research Inquiry | Cross-link: `Grounded in Research [Research Slug] →` |

---

## 3. Directional DAG Invariants

The timeline validator (`scripts/validate-timeline.mjs`) guarantees:
1. **Zero Self-References:** `event.successorProjectId !== event.entitySlug`.
2. **Target Existence:** Any referenced successor or predecessor must exist in the canonical project catalog.
3. **No Dead Links:** All cross-links resolve to active or historical routes (`/work/[slug]`, `/research/[slug]`, `/lab/[slug]`, `/notes/[slug]`).
