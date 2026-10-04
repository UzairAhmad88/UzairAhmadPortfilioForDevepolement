# Responsive System 2.0: Universal, Fluid & Content-First Architecture

## 1. System Philosophy & Objectives

Responsive System 2.0 establishes a universal, fluid, multi-screen responsive architecture for the Personal Engineering & Research Platform.

### Core Principles
1. **Fluid-First Scaling**: Utilizing CSS `clamp()`, `min()`, `max()`, and modern CSS Grid intrinsic sizing (`minmax()`, `repeat(auto-fit, ...)`) rather than rigid breakpoint overrides.
2. **Device-Independent Logic**: Zero JavaScript device sniffing (no `if (isMobile)` or User-Agent checks). Layouts respond exclusively to available container width and viewport constraints.
3. **No Root-Cause Masking**: Zero global `overflow-x: hidden` hacks to hide overflow. Every table, code block, math formula, and SVG topology is intentionally bounded within scoped overflow containers.
4. **Multi-Screen Multi-Orientation Support**: Guaranteed flawless presentation across mobile (`320px – 430px`), tablet (`600px – 1024px`), laptop (`1280px – 1536px`), desktop (`1600px – 2560px`), and ultrawide (`3440px – 3840px`), as well as portrait, landscape, and 80%–200% browser zoom levels.

---

## 2. Global Layout & Container Model

```text
+-------------------------------------------------------------------------+
|  PAGE VIEWPORT (320px -> 3840px)                                        |
|  +-------------------------------------------------------------------+  |
|  |  .section-shell: min(var(--container-max, 1200px), calc(100% - safe)) |
|  |  +-------------------------------------------------------------+  |  |
|  |  |  READING MEASURE: --container-reading (70ch)                 |  |  |
|  |  |  COMPACT CONTAINER: --container-compact (900px)             |  |  |
|  |  |  NARROW CONTAINER: --container-narrow (680px)               |  |  |
|  |  +-------------------------------------------------------------+  |  |
|  +-------------------------------------------------------------------+  |
+-------------------------------------------------------------------------+
```

---

## 3. Container Width Hierarchy

| Token | Width | Semantic Purpose |
|---|---|---|
| `--container-max` | `1200px` | Maximum container width for primary landing sections, grids, and multi-column views |
| `--container-standard` | `1140px` | Standard case study and research paper width |
| `--container-compact` | `900px` | Engineering notes and methodology narratives |
| `--container-narrow` | `680px` | Editorial prose, bio sections, and contact form containers |
| `--container-reading` | `70ch` | Optimal typographic line measure (45–75 characters per line) |
