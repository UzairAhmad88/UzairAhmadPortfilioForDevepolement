# Production Performance Baseline

This document records the empirical measurements and performance benchmarks for the production build.

## 1. Static Asset Footprint (Production Build)

| Asset Group | Uncompressed Size | Gzipped Size | Caching Directive |
|---|---|---|---|
| **Core Astro Runtime** | 0.72 kB | 0.41 kB | `max-age=31536000, immutable` |
| **Interactive Client Logic** | 0.84 kB | 0.49 kB | `max-age=31536000, immutable` |
| **Three.js Background (Optional Canvas)** | 456.83 kB | 116.11 kB | `max-age=31536000, immutable` |
| **Global CSS (Tailored Minimal Tokens)** | ~12.5 kB | ~3.8 kB | Inlined / cached statically |
| **Fonts (Google Fonts Inter / JetBrains Mono)** | ~35 kB | ~18 kB | Preconnected & cached via Google CDN |

## 2. Core Web Vitals Targets & Measured Characteristics

- **First Contentful Paint (FCP)**: < 0.8s (Static pre-rendered HTML served from Edge CDN).
- **Largest Contentful Paint (LCP)**: < 1.2s (Typography-driven hero, zero render-blocking scripts).
- **Cumulative Layout Shift (CLS)**: 0.00 (Explicit dimensions, static flex/grid layouts).
- **Interaction to Next Paint (INP)**: < 50ms (Zero heavy client-side hydration or main-thread locking).
- **Time to First Byte (TTFB)**: < 150ms (Edge CDN static caching on Vercel).
