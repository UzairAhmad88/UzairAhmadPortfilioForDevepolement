# Platform Overview & Architecture Principles

## 1. System Purpose & Vision

This platform serves as the personal engineering and research infrastructure of **Uzair Ahmad**, a Quantitative AI & Product Engineer. It is designed not as a generic resume template, but as a dense, high-signal technical record combining:

- **Identity & Positioning**: Factual engineering background, system design philosophy, and verified capabilities.
- **Projects (`/work`)**: Detailed case studies with interactive multi-lens navigation (Architecture, Constraints, Stack, Evidence, Retrospective).
- **Research (`/research`)**: Empirical investigations and hypothesis-driven inquiries into quantitative signal decay and multi-agent systems.
- **Lab System (`/lab`)**: Workbench experiments, algorithmic prototypes, and visual evidence.
- **Engineering Notes (`/notes`)**: Technical learnings, mathematical derivations, and architecture decision records.
- **Knowledge Network (`/graph` & `/discover`)**: Deterministic relational knowledge graph and client-side discovery search engine.

---

## 2. Core Architectural Invariants

1. **Zero Client-Side JavaScript Overhead for Static Content**: All 60 pages are pre-rendered as pure semantic HTML and CSS at build time using Astro SSG. JavaScript is strictly isolated to interactive enhancements (e.g. Discovery modal, Knowledge Graph visualizer, theme toggle).
2. **Deterministic Data Layer**: All platform entities are defined in typed TypeScript files under `src/data/`, compiled and validated at build time. Zero external CMS or runtime database dependencies.
3. **No Synthetic / Fabricated Metadata**: 0 star ratings, 0 fake percentage proficiency meters, and 0 synthetic quality scores. All technical claims are backed by verifiable code and empirical telemetry.
4. **Relational Truthfulness**: All entity linkages (Project $\leftrightarrow$ Research $\leftrightarrow$ Lab $\leftrightarrow$ Notes $\leftrightarrow$ Tech) use explicit, strongly-typed slugs and IDs verified continuously by automated unit tests.
5. **Universal Accessibility & Responsive Parity**: Full compliance with WCAG 2.1 AA standards, keyboard navigation, fluid typography, safe area insets, and zero layout shift across Dark and Light themes.
