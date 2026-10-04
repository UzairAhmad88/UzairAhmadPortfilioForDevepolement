# Micro-Interaction Polish & Motion Hierarchy

## 1. Motion Philosophy: "Motion = Information"

Micro-interactions on this platform serve to clarify state changes, establish continuity, and reinforce user intent. Decorative animations, gratuitous particle effects, cursor trails, and excessive transforms are strictly excluded.

---

## 2. Motion System 2.0 Integration

All micro-interactions use tokens defined in `src/styles/variables.css` and classes from `src/styles/motion.css`:

### Motion Hierarchy Levels
1. **Level 0 (Static)**: Data tables, code blocks, documentation, and mathematical formulas (`.motion-level-0`).
2. **Level 1 (Micro-Interactions)**: Buttons, navigation links, theme toggles, status pills, and form inputs (`.motion-level-1` / `--motion-duration-fast: 120ms`).
3. **Level 2 (Component Transitions)**: Card hover lifts, modal drawers, accordions, and filter updates (`.motion-level-2` / `--motion-duration-normal: 220ms`).
4. **Level 3 (Page Transitions)**: Signature lens transitions, route anchors (`.motion-level-3` / `--motion-duration-deliberate: 480ms`).

---

## 3. Micro-Interaction Inventory

| Element | Interaction Trigger | Motion Response | Timing & Easing |
| :--- | :--- | :--- | :--- |
| **Buttons (Primary / Secondary)** | Hover / Pointer enter | `translateY(-1px)`, subtle background shift | `120ms` standard curve |
| **Buttons** | Active / Press | `translateY(1px) scale(0.98)` | `50ms` instant |
| **Cards (`ProjectCard`, `NoteCard`)** | Hover / Focus | `translateY(-2px)`, border illumination | `220ms` cubic-bezier(0.2, 0, 0, 1) |
| **Text Links (`.motion-link`)** | Hover | Subtle bottom underline expansion from left (`scaleX(1)`) | `120ms` standard |
| **Theme Toggle** | Click / Toggle | Smooth `180deg` rotation of sun/moon icon | `220ms` ease-in-out |
| **Mobile Drawer** | Menu Trigger | Slide in from right with backdrop blur fade | `350ms` emphasized curve |
| **Status Pulse Indicator** | Continuous (Hero / Availability) | Gentle scale breathe `1` to `1.4` with opacity pulse | `2s` infinite ease-in-out |

---

## 4. Accessibility & Reduced Motion

In compliance with WCAG 2.2.2 (Pause, Stop, Hide) and 2.3.3 (Animation from Interactions), the platform enforces complete reduced motion fallbacks:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }

  .reveal {
    opacity: 1 !important;
    transform: none !important;
  }
}
```
