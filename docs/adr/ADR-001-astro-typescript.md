# ADR-001: Adoption of Astro & TypeScript

## Status
Accepted

## Context
The portfolio began as a prototype consisting of static HTML, a monolithic JavaScript script with Three.js, and a monolithic CSS file. The goal for Phase 01 was to establish a professional, scalable architecture supporting technical SEO, type-safety, maintainability, and clean separation of concerns without introducing unnecessary JavaScript runtime overhead or redesigning the visual appearance.

## Decision
Adopt **Astro** with **strict TypeScript** as the core web framework.

## Reasons
1. **Zero-JS by Default**: Astro generates static HTML at build time with 0kb client-side framework runtime overhead, shipping JavaScript only where explicitly instructed.
2. **SEO Excellence**: Generates pure HTML, standard meta tags, dynamic canonicals, automated sitemaps via `@astrojs/sitemap`, and clean structured data rendering.
3. **Type Safety**: TypeScript provides strict compile-time validation for site configuration, project entries, capability disciplines, and SEO schemas.
4. **Fast Builds & Easy Vercel Deployment**: Native static build output (`dist/`) that deploys seamlessly to Vercel without requiring complex node server runtimes.
5. **Future-Proof Island Architecture**: If interactive components (e.g. React/Solid/Svelte widgets) are needed in later phases, they can be added as isolated islands without migrating the whole application.

## Alternatives Considered
- **Plain HTML/JS**: Hard to scale, lack of type validation, duplicated SEO meta, lack of reusable component boundaries.
- **Next.js / React SPA**: Unnecessary client-side bundle weight for a content/portfolio site; hydration overhead hurts performance and crawl efficiency.
- **Gatsby / Hugo**: Slower DX or non-TypeScript ecosystem.

## Consequences
- Clean, maintainable component and content architecture.
- Fast compile and build cycles.
- Zero client framework runtime penalty.
