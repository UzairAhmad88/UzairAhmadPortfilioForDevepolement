# Performance & Core Web Vitals Strategy

## 1. Zero-JS Baseline
By using Astro's static site generation, the baseline HTML delivered to the browser contains **0kb** of framework runtime JavaScript.

---

## 2. Core Web Vitals Optimization

### Largest Contentful Paint (LCP)
- The Hero section uses inline SVG paths, CSS gradients, and semantic typography that render instantly without waiting for external raster images or heavy JavaScript hydration.
- Google Fonts (`Inter`, `JetBrains Mono`) are pre-connected via `<link rel="preconnect">` in the HTML `<head>`.

### Interaction to Next Paint (INP)
- Minimal main-thread work. Client-side interactions (filter buttons, hover cards) use lightweight, native event listeners.
- No heavy component re-renders or virtual DOM diffing loops.

### Cumulative Layout Shift (CLS)
- Explicit aspect ratios, fixed bounding boxes, and SVG `viewBox` attributes prevent unexpected layout jumping during resource loading.

---

## 3. WebGL Canvas Performance
- The Three.js background canvas caps `devicePixelRatio` at `1.8` to prevent GPU throttling on high-DPI displays.
- Full suppression under `prefers-reduced-motion: reduce`.

---

## 4. Build Optimization
- Astro build compresses HTML output.
- CSS is minified and bundled efficiently during `astro build`.
- Clean static directory output for edge caching with immutable cache headers.
