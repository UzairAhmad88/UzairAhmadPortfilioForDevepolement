# About 2.0 System — Engineering Identity Specification

## 1. Executive Purpose & Philosophy

The **About 2.0 Identity System** transforms the `/about` route from a conventional resume overview into the **personal engineering identity layer** of the Personal Engineering & Research Platform.

### Core Philosophy:
1. **Identity as an Interpretation Layer:** The page provides context, philosophy, and intellectual motivation behind the software systems, research papers, and laboratory experiments without duplicating underlying databases.
2. **Evidence-First Representation:** Every claim is backed by tangible platform evidence (public repositories on GitHub, verified live deployments on Vercel, published research inquiries, and standalone benchmarks).
3. **Quiet Confidence & Technical Honesty:** Avoids generic marketing rhetoric, inflated buzzwords ("world-class", "guru"), or self-assigned skill percentages. Communicates authentic engineering capabilities and intellectual direction.

```
                         ABOUT 2.0 IDENTITY LAYER
  ┌────────────────────────────────────────────────────────────────────────┐
  │  HERO & POSITIONING: Quantitative AI & Product Engineer                │
  │  NARRATIVE: Background, Mathematical Foundations & Full-Stack Craft    │
  └───────────────────────────────────┬────────────────────────────────────┘
                                      │
        ┌─────────────────────────────┼─────────────────────────────┐
        ▼                             ▼                             ▼
  WHAT I WORK ON                HOW I THINK                 CURRENT DIRECTION
  ├── Quant Finance             ├── Verifiable Evidence     ├── Active Building
  ├── Multi-Agent AI            ├── Production-Minded       ├── Learning Focus
  ├── Distributed Web           ├── Deterministic Bounded   └── Lab Explorations
  └── Lab Benchmarks            └── Full-Stack Ownership    (Phase 04 Currently)
        │                             │                             │
        └─────────────────────────────┼─────────────────────────────┘
                                      ▼
                        CROSS-PLATFORM INTEGRATIONS
  ├── Projects (/work/[slug])        ├── Timeline (/timeline)
  ├── Research (/research/[slug])    ├── Archive (/archive)
  ├── Lab (/lab/[slug])              ├── Methodology (/how-i-build)
  └── Notes (/notes/[slug])          └── Contact (/contact)
```

---

## 2. Invariants & Guardrails

- **Zero Fabrication:** Only verified academic milestones (BS Computer Science, IMSciences) and real projects are surfaced.
- **Canonical Routing:** All links resolve to established canonical endpoints.
- **Zero Layout Shifts:** Uses CSS Grid/Flexbox design tokens and SSG static markup.
