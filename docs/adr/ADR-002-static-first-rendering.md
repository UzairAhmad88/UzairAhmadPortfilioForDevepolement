# ADR-002: Static-First Rendering Strategy

## Status
Accepted

## Context
A developer portfolio, case study catalog, and technical blog must prioritize page load performance, instant indexing by search engine crawlers, and high reliability under traffic.

## Decision
Use static site generation (SSG) output format for all current and planned core routes (`/`, `/about`, `/work`, `/research`, `/systems`, `/contact`, `/404`).

## Reasons
1. **Edge Delivery**: Pre-rendered HTML and assets can be cached and served globally via Vercel's Edge CDN.
2. **SEO Crawlability**: Search engines receive complete, pre-rendered semantic HTML with zero hydration lag.
3. **Resilience & Security**: Static output eliminates server-side runtime attack surfaces and database dependencies.

## Consequences
- Dynamic features (like contact submission or analytics) in future phases will communicate via client-side endpoints or serverless functions without converting the entire site into an SSR app.
