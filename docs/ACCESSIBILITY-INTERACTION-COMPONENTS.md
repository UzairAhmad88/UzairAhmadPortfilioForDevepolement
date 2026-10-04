# Interactive Components Accessibility Contracts

## 1. Theme Toggle (`ThemeToggle.astro`)
- **Semantic Tag:** Native `<button type="button">` with `id="theme-toggle-btn"`.
- **Accessible Name:** `aria-label="Toggle visual theme (Current: dark)"` updated dynamically upon state changes.
- **Keyboard Support:** Activates via `Enter` or `Space`.
- **Visual Feedback:** High-contrast SVG icons with smooth rotation and zero layout shift.

---

## 2. Navigation Drawer / Mobile Menu
- **Trigger:** `<button aria-expanded="false" aria-controls="mobile-nav-panel" aria-label="Open primary menu">`.
- **State Changes:**
  - When opened: `aria-expanded="true"`, focus moves to first navigation item, body scroll is locked, and background interactions are inert.
  - When closed: `aria-expanded="false"`, focus returns to the hamburger toggle button.
- **Escape Key:** Pressing `Escape` closes the drawer immediately.

---

## 3. Engineering Lens Navigator (`EngineeringLensNavigator.astro`)
- **Semantics:** Rendered as an interactive tablist or pill button group with native `<button>`.
- **Active State:** Marked via `aria-pressed="true"` or `aria-selected="true"`.
- **Keyboard Navigation:** Arrow keys or Tab allow seamless switching between lenses.
- **Live Updates:** Selected lens updates architectural perspective panels without full page reload or lost focus.

---

## 4. Accordions & Expandable Technical Notes
- **Trigger:** `<button aria-expanded="false" aria-controls="section-content-[id]">`.
- **Content Panel:** `<div id="section-content-[id]" role="region" aria-labelledby="section-header-[id]">`.
- **Keyboard:** `Enter` / `Space` toggles expanded/collapsed state.
