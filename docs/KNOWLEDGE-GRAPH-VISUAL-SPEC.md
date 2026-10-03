# KNOWLEDGE GRAPH VISUAL SPECIFICATION & DESIGN SYSTEM
## Uzair Ahmad — Personal Engineering & Research Platform

---

## 1. Visual Aesthetics & Philosophy

The Knowledge Graph adheres to the established Phase 02 editorial, minimal, and technical design system:
- **No Sci-Fi / Cyberpunk Tropes:** No neon glow, laser beams, particle meshes, or spinning 3D vortexes.
- **Editorial Typography:** Clear monospace metadata accents (`var(--font-mono)`), crisp sans-serif headings.
- **Subtle, Purposeful Entity Color Tokens:**
  - **Projects:** Emerald (`#10b981`) — represents built, deployed, or production systems.
  - **Research:** Purple (`#a855f7`) — represents scientific inquiry and quantitative modeling.
  - **Lab Experiments:** Amber (`#f59e0b`) — represents workbench prototypes and exploratory algorithms.
  - **Engineering Notes:** Blue (`#3b82f6`) — represents captured technical lessons and decision logs.
  - **Technologies:** Teal (`#14b8a6`) — represents foundational languages, frameworks, and runtimes.
  - **Methodology:** Indigo (`#6366f1`) — represents engineering process and decision steps.

---

## 2. Interactive SVG Canvas Specifications

- **Container Dimensions:** Responsive viewport fitting `min-height: 520px` (mobile/tablet) to `620px` (desktop).
- **Node Styling:**
  - Default radius: `5px` with a `1.5px` dark boundary.
  - Selected state: `7px` with an active focus ring (`r=14px`, stroke `#818cf8`, stroke-width `1.5px`).
  - Connected state: `5px` with a subtle dashed highlight ring (`r=10px`, stroke `#64748b`, stroke-dasharray `2,2`).
- **Edge Styling:**
  - Default edge: `stroke: rgba(51, 65, 85, 0.45)`, `stroke-width: 1px`.
  - Active connection edge: `stroke: #818cf8`, `stroke-width: 2px`, with directional marker arrow (`#edge-arrow-active`).
- **Inspector Panel:** Sticky sidebar card providing detailed entity summary, entity type badge, canonical URL link, and dynamic direct connection list.

---

## 3. Responsive Breakpoints

- **Desktop (≥ 1024px):** Dual-pane layout (8 cols SVG Matrix Visualizer + 4 cols Node Inspector).
- **Tablet (640px – 1023px):** Stacked view with touch-friendly SVG network and full-width inspector.
- **Mobile (< 640px):** SVG canvas scales cleanly; the primary exploration medium is the accessible structured relationship directory with quick search and filter pills.
