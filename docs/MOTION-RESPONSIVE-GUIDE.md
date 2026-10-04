# Motion Responsive Guide: Multi-Device Adaptation & Touch Ergonomics

## 1. Viewport Adaptation Strategy

Motion System 2.0 adapts gracefully across all viewports from `320px` mobile devices up to `3840px` 4K ultrawide displays without device-specific hacks.

| Viewport Tier | Screen Width | Motion Behavior |
|---|---|---|
| **Mobile** | `< 640px` | No hover effects; instant tap feedback via `:active` (`--motion-duration-instant`), off-canvas drawer transition (`350ms`), reduced spatial translations. |
| **Tablet** | `640px – 1024px` | Hybrid touch/pointer adaptations, fast card tap highlights, smooth section transitions. |
| **Desktop** | `1024px – 1920px` | Full micro-interactions (`120ms` hover lifts, link underlines, lens tab switches). |
| **Ultrawide** | `> 1920px` | Restrained transformations bounded within max-width containers (`--container-max: 1200px`) to prevent expansive motion sickness. |

---

## 2. Touch vs. Pointer Ergonomics

- On touch devices (`@media (hover: none)`), hover-dependent state changes are bypassed entirely to prevent sticky/ghost hover artifacts.
- Tap feedback is calibrated with `--motion-scale-press` (`0.98`) to provide tactile physical confirmation upon touch down without lag.
- Mobile navigation drawer uses hardware-accelerated CSS `transform: translateX(100%)` with momentum scrolling (`-webkit-overflow-scrolling: touch`).
