# Mobile UX: Touch Ergonomics, Stacking Patterns & Small-Screen Fidelity

## 1. Mobile Design Priorities

On viewports from `320px` to `430px`:
1. **Readable Typography**: Headings wrap gracefully via `clamp()` without orphan overflows; body copy remains at `16px` (`1rem`) to prevent iOS browser auto-zoom.
2. **Accessible Touch Targets**: Buttons, menu items, and links have minimum `44px` height with generous padding.
3. **Off-Canvas Navigation**: Hamburger menu opens a full-height drawer with backdrop blur, closing automatically on route selection or `Escape` key.
4. **Vertical Stacking Order**: Multi-column desktop grids smoothly collapse into single-column cards with vertical visual hierarchy.

---

## 2. Interactive Mobile Adaptations

- **Signature Engineering Lens Navigator**: Horizontally scrollable lens tab bar with snap points and clean vertical stage card flow.
- **Architecture & System Visualizations**: Complex wide topologies provide vertical step-by-step fallback stacks with clear connecting nodes.
- **Knowledge Graph**: Replaced with clean, accessible textual relationship listings and domain groupings for immediate comprehension.
- **Contact Form**: Form inputs expand to `100%` container width with distinct `1rem` vertical gaps and visible focus boundaries.
- **Tables & Code Blocks**: Encapsulated in scoped `.table-wrapper` and code scroll containers with custom momentum scrolling (`-webkit-overflow-scrolling: touch`), preventing page-level horizontal overflow.
