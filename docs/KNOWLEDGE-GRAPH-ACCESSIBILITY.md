# KNOWLEDGE GRAPH ACCESSIBILITY (A11Y) SPECIFICATION
## Uzair Ahmad — Personal Engineering & Research Platform

---

## 1. Accessibility First Principle

The visual graph is **never** the exclusive mechanism to discover or understand relationships. The Knowledge Graph is backed by:
1. **The Authoritative Structured Directory:** Complete, semantic textual listings of all nodes, their badges, descriptions, and outgoing/incoming connection counts.
2. **Accessible Reusable Component (`RelatedKnowledgeGrid.astro`):** Embedded on every detail page with proper semantic HTML headings (`<h2>`), accessible link targets, and screen-reader descriptive relationship labels.
3. **Semantic ARIA Controls:** All filter buttons include `aria-pressed` states and `role="group"`. The search input includes explicit `aria-label`. The SVG container has `role="img"` with descriptive `aria-label`.

---

## 2. Keyboard Navigation & Focus Flow

- **Search Input:** Accessible via standard `Tab` index.
- **Filter Buttons:** Accessible via standard keyboard focus (`Tab`, `Enter`, `Space`).
- **Directory Cards & Focus Actions:** Buttons are keyboard focusable with visible focus outline.
- **Screen Reader Announcements:** Clear text like `"FastAPI is used in CuraSphere HMS project"` instead of abstract coordinate IDs.

---

## 3. High Contrast & Reduced Motion

- **Color Contrast:** All text tokens meet WCAG 2.1 AA requirements with contrast ratios > 4.5:1 against dark backgrounds.
- **Motion:** Transitions are restrained to subtle opacity and border-color shifts, honoring `@media (prefers-reduced-motion: reduce)`.
