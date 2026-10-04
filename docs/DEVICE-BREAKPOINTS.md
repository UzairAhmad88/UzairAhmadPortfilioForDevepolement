# Device Breakpoints: Rationales, Constraints & Component Boundaries

## 1. Content-Driven Breakpoint Philosophy

Breakpoints are not chosen by marketing names (e.g. "iPad breakpoint") but by **content pressure boundaries** and **layout density thresholds**:

| Boundary | Viewport Range | Content Constraint Trigger | Architectural Adaptation |
|---|---|---|---|
| **Mobile Narrow** | `320px – 480px` | Single-column limit; navigation cannot fit inline; touch is primary. | Full-width vertical stacking, off-canvas navigation drawer, full-width buttons. |
| **Mobile Wide / Phablet** | `480px – 640px` | Horizontal room for 2-column small tags or badge grids. | Multi-column metadata rows, enhanced card margins. |
| **Tablet Portrait** | `640px – 860px` | Split views become cramped; sidebars collide with main prose. | Sidebars collapse into top/bottom panels, 2-column card grids. |
| **Tablet Landscape / Small Laptop** | `860px – 1024px` | Desktop horizontal header navigation has ample room. | Inline navigation bar, 2-to-3 column grids, horizontal signature interaction tabs. |
| **Standard Desktop** | `1024px – 1440px` | Optimal multi-column systems architecture. | Full multi-column topologies, 3-column project grids, side-by-side case study media. |
| **Large Desktop & Ultrawide** | `1440px – 3840px+` | Content risks excessive horizontal stretching. | Enforced max container widths (`1200px`), centered content shells with balanced whitespace. |

---

## 2. Media Query Taxonomy

Standardized CSS media queries across the platform:
```css
/* Mobile Narrow */
@media (max-width: 480px) { ... }

/* Mobile Standard / Tablet Boundary */
@media (max-width: 640px) { ... }

/* Tablet Landscape / Sidebar Collisions */
@media (max-width: 860px) { ... }

/* Desktop Transition */
@media (max-width: 1024px) { ... }

/* Pointer & Touch Adaptation */
@media (hover: hover) and (pointer: fine) { ... }
@media (hover: none) { ... }
```
