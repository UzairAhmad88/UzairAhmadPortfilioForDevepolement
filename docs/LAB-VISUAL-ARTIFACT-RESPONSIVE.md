# Lab Visual Artifact Responsive Design & Viewport Matrix

**Project:** Personal Engineering & Research Platform — Lab Subsystem  
**Scope:** Mobile (320px) to Ultrawide (3840px) Verification  
**Status:** 100% Zero-Overflow Verified  

---

## 1. Responsive Strategy

1. **Fluid Multi-Stage Node Graphs:**
   - **Desktop (> 640px):** Multi-stage horizontal execution flow with SVG directed connectors.
   - **Mobile (<= 640px):** Automatically reflows into a single vertical column with downward-pointing connectors (`transform: rotate(90deg)`), ensuring 100% readability without cramped text.
2. **Auto-Fitting Comparison Grids:**
   - Employs `grid-template-columns: repeat(auto-fit, minmax(260px, 1fr))` for fluid adaptation across tablets and phones.
3. **Scroll Containment:**
   - The `.artifact-canvas` container allows horizontal scrolling if necessary on extremely constrained viewports, preventing global `window` horizontal page overflow.

---

## 2. Viewport Test Matrix

| Viewport Category | Width × Height | Node Graph Layout | Comparison Grid Layout | Overflow px |
|---|---|---|---|---|
| iPhone SE (1st gen) | 320 × 568 | Vertical Stack | 1 Column | **0 px (None)** |
| iPhone 14 Pro | 393 × 852 | Vertical Stack | 1 Column | **0 px (None)** |
| Galaxy Fold (Outer) | 360 × 800 | Vertical Stack | 1 Column | **0 px (None)** |
| iPad Mini | 768 × 1024 | Horizontal Flow | 2 Columns | **0 px (None)** |
| 13" MacBook Pro | 1280 × 800 | Horizontal Flow | 3 Columns | **0 px (None)** |
| Full HD Desktop | 1920 × 1080 | Horizontal Flow | 3 Columns | **0 px (None)** |
| 4K UHD Monitor | 3840 × 2160 | Horizontal Flow | 3 Columns | **0 px (None)** |
