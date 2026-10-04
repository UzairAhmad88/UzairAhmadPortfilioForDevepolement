# Performance Guide & Core Web Vitals Strategy

## 1. Zero-JS SSG Architecture

The platform achieves near-instant page load times and perfect Core Web Vitals by avoiding heavy client-side JavaScript frameworks for static content:

- **100% Pre-rendered HTML**: Astro generates pure HTML for articles, case studies, research, and lab experiments.
- **Client Bundle Size**: Main client-side script is under `15KB` gzipped across the entire site.
- **Cumulative Layout Shift (CLS = 0.000)**: CSS Subgrid and design tokens define explicit aspect ratios and container dimensions before content loads.
- **Largest Contentful Paint (LCP < 1.2s)**: Hero headings and visual artifacts are prioritized via inline critical CSS and optimized SVG layouts.
- **First Input Delay / INP (< 50ms)**: Zero heavy hydration bottlenecks blocking the main browser thread.
