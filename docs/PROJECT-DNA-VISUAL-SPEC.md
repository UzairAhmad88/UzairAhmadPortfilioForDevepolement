# PROJECT DNA VISUAL SPECIFICATION (PHASE 06)
## Editorial Design Language, Layout Hierarchy & Design Tokens

> **Platform:** Uzair Ahmad — Personal Engineering & Research Platform  
> **Status:** Active / Production Specification  
> **Phase:** 06 — Project DNA  

---

## 1. DESIGN PHILOSOPHY & AESTHETIC INTEGRATION

Project DNA adheres strictly to the **Phase 02 Personal Brand Identity**:
- **Palette:** Deep Emerald Canvas (`#07110f`), Dark Sage Surface (`#101a17`), Mint Teal Accent (`#7ed8c4`), Soft Lavender (`#bda6ff`), Warm Bone Text (`#f6f1e8`), Muted Sage (`#a9b8b1`).
- **Typography:** Monospace labels (`var(--font-mono)`) for technical keys and dimensions; high-contrast sans-serif (`var(--font-sans)`) for titles, values, and narrative copy.
- **Form Factor:** Technical spec sheet meets premium editorial engineering dossier. Zero icon spam, zero generic logo grids, zero rainbow badges.

---

## 2. DETAIL VARIANT SPECIFICATION (`variant="detail"`)

### Layout Topology
```text
┌────────────────────────────────────────────────────────────────────────┐
│ SYSTEM PROFILE / TECHNICAL DNA                      ● ACTIVE RESEARCH  │
├────────────────────────────────────────────────────────────────────────┤
│ CLASSIFICATION                     ROLE RESPONSIBILITY                 │
│ Quantitative Research & System     Lead Quantitative AI Engineer       │
├────────────────────────────────────┼───────────────────────────────────┤
│ PROJECT CONTEXT                    DEPLOYMENT RUNTIME                  │
│ Independent Research               Local Research / GPU (CUDA)         │
├────────────────────────────────────────────────────────────────────────┤
│ CORE STACK & RUNTIME                                                   │
│ [ Python ] [ PyTorch ] [ Pandas ] [ NumPy ] [ Scikit-Learn ]           │
├────────────────────────────────────────────────────────────────────────┤
│ VERIFIABLE EVIDENCE & ARTIFACTS                                        │
│ [ GitHub Repository ↗ ] [ Technical Case Study → ]                     │
└────────────────────────────────────────────────────────────────────────┘
```

### Visual Attributes
- **Background:** `rgba(16, 26, 23, 0.85)` (Glassmorphic dark sage)
- **Border:** `1px solid rgba(246, 241, 232, 0.1)`
- **Radius:** `0.875rem` (`14px`)
- **Padding:** `clamp(1.25rem, 2.5vw, 1.75rem)`
- **Header:** Uppercase monospace eyebrow in mint teal (`#7ed8c4`) paired with dynamic glowing status pill.

---

## 3. CARD VARIANT SPECIFICATION (`variant="card"`)

### Layout Topology
```text
┌────────────────────────────────────────────────────────────────────────┐
│ QUANTITATIVE RESEARCH & SYSTEM      Active Research        2024–Present │
│ Role: Lead Quantitative AI Engineer                                    │
│ [ Python ] [ PyTorch ] [ Pandas ] [ NumPy ]                            │
│                                                                        │
│ Deep Learning Stock Return Prediction                                  │
│ Financial asset returns exhibit extreme non-stationarity...            │
│                                                                        │
│ ────────────────────────────────────────────────────────────────────── │
│ Inspect Case Study →            GitHub ↗                               │
└────────────────────────────────────────────────────────────────────────┘
```

### Visual Attributes
- Seamless integration inside `src/components/cards/ProjectCard.astro`.
- Automatic reduction to top 4 core stack tags on cards for tight information density.
- Hover transition: Subtle elevation (`translateY(-4px)`), teal border highlight (`rgba(126, 216, 196, 0.35)`), and soft ambient glow.

---

## 4. RESPONSIVE BEHAVIOR

| Viewport | DNA Detail Grid | DNA Card Layout |
| :--- | :--- | :--- |
| **Mobile (< 640px)** | 1 column stacked grid, 100% full-width evidence buttons | 1 column, stacked metadata tags |
| **Tablet (640px – 1024px)** | 2 column balanced spec grid | 2 column layout |
| **Desktop (> 1024px)** | Multi-column dynamic auto-fit grid (`repeat(auto-fit, minmax(180px, 1fr))`) | 3 column catalog grid |
| **Ultrawide (> 2560px)** | Centered within `--container-max: 1200px` | Centered within `--container-max: 1200px` |
