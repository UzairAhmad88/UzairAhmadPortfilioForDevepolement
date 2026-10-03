# 📐 Signature Interaction Decision & Design Rationale

## Decision Record
- **Date:** October 2026
- **Status:** APPROVED & IMPLEMENTED
- **Phase:** Phase 23 — Signature Interaction System
- **Selected System:** **The Multi-Dimensional Engineering Lens Navigator (`EngineeringLensNavigator.astro`)**

---

## Strategic Rationale
A personal engineering & research platform should not rely on visual noise, particle effects, or 3D gimmicks to stand out. Its signature interaction must reflect **the way the engineer actually analyzes, designs, and validates software systems**.

When a senior quantitative AI and systems engineer evaluates a technical project, they inspect it from multiple distinct angles:
1. What is the topology of the execution pipeline and component boundaries?
2. What mathematical and latency constraints dictate the design?
3. What exact data contracts, schemas, and algorithms are running?
4. What verifiable out-of-sample metrics and live deployments prove it works?
5. What trade-offs were consciously accepted, and what lessons were learned from failures?
6. How does this system connect to foundational research inquiries, lab prototypes, and technical notes?

The **Multi-Dimensional Engineering Lens Navigator** makes this thought process interactive and tangible.

---

## Architectural Principles
1. **100% Data-Driven from Canonical Sources:**
   Zero duplicated or fabricated relationship strings. Every piece of data is derived at build-time from `projects.ts`, `caseStudy`, `research.ts`, `lab.ts`, `notes.ts`, `technologies.ts`, `github`, and `vercel`.
2. **Progressive Enhancement & Semantic Fallback:**
   The entire interaction is structured in standard semantic HTML (`role="tablist"`, `role="tab"`, `role="tabpanel"`). If JavaScript is disabled, the system renders gracefully and remains 100% crawlable by search engines and readable by assistive technologies.
3. **URL State Synchronization:**
   Switching lenses seamlessly updates the URL query parameter (`?lens=constraints`, `?lens=evidence`, etc.) via `window.history.replaceState` without triggering page refreshes, enabling direct deep-linking to specific technical perspectives.
4. **Accessible Keyboard Navigation:**
   Supports standard WAI-ARIA tablist patterns: Left/Right arrow keys, Up/Down arrow keys, Home, End, Tab, and Enter.
5. **Zero Layout Shifts (CLS = 0.00):**
   Fixed tab heights and CSS container constraints prevent layout jumps during perspective transitions.
