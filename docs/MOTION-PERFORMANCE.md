# Motion Performance: GPU Compositor Strategy & Zero-Jank Architecture

## 1. Zero External Dependency Policy

Motion System 2.0 does not install or bundle heavy animation libraries (e.g. GSAP, Framer Motion, Motion One, Anime.js). All transitions and micro-interactions are authored in native, lightweight CSS.

- **Bundle Overhead**: `0 KB` JavaScript.
- **CSS Footprint**: `< 2.5 KB` minified.

---

## 2. Compositor-First Animation Strategy

All animated properties strictly adhere to GPU-composited primitives to avoid layout recalculation (Reflow) and style recalculation (Repaint):

| Safe Composited Properties | Unsafe Layout Properties (Avoided) |
|---|---|
| `transform` (`translate3d`, `translateY`, `scale`) | `width`, `height` |
| `opacity` | `top`, `left`, `margin`, `padding` |
| `color`, `background-color` (discrete Paint) | `filter: blur()` (animated continuously) |

---

## 3. Layout Stability & Zero-CLS

- Cards, panels, and navigation bars reserve explicit dimensions and bounding areas so hover lifts and active presses never trigger layout shift for neighboring content (Cumulative Layout Shift = 0.000).
- Accordion disclosures utilize CSS Grid template rows (`grid-template-rows: 0fr → 1fr`) to transition smoothly without JavaScript DOM measurements or forced reflow loops.
