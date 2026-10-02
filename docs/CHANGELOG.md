# Changelog

All notable changes to the Uzair Ahmad Developer Portfolio codebase are documented here.

## [1.0.0] - Phase 01: Architecture & Engineering Foundation

### Added
- **Astro & TypeScript Core**: Migrated from flat HTML/JS prototype to Astro static-first architecture with strict TypeScript checking.
- **Component Architecture**:
  - Reusable layout system (`BaseLayout.astro`, `PageLayout.astro`, `ProjectLayout.astro`).
  - Modular sections (`Hero`, `Ticker`, `Systems`, `TechStack`, `Work`, `ResearchLab`, `ArchitectureSection`, `About`, `Timeline`, `Contact`).
  - Atomic card components (`FeaturedProjectCard`, `ProjectCard`, `CapabilityCard`, `LabCard`).
  - Isolated background effects (`BackgroundEffects.astro`) and floating actions (`WhatsAppFloat.astro`).
- **Data & Content Architecture**:
  - Dedicated strongly-typed data modules in `src/data/` for projects, capabilities, skills, timeline, research, and contact methods.
  - Complete domain models and TypeScript interfaces in `src/types/`.
- **Technical SEO Infrastructure**:
  - Automated XML sitemap generation with `@astrojs/sitemap`.
  - Production-ready `robots.txt` and `site.webmanifest`.
  - Dynamic canonical URL and Open Graph / Twitter card generation.
  - Schema.org JSON-LD structured data (`Person`, `WebSite`, `ProfilePage`).
- **Accessibility Enhancements**:
  - Semantic HTML elements (`header`, `main`, `section`, `article`, `nav`, `footer`).
  - Skip to main content link.
  - Full `@media (prefers-reduced-motion: reduce)` support.
  - Accessible button labels and `:focus-visible` outlines.
- **Developer Experience & Tooling**:
  - Path aliases (`@/`, `@components/`, `@layouts/`, `@data/`, `@lib/`, `@styles/`).
  - GitHub Actions CI workflow for automated typecheck and build validation.
  - Unit test suite for SEO canonical and structured data logic.
  - Comprehensive documentation suite under `docs/`.

### Preserved
- 100% of existing visual design, color tokens, layout, typography, SVG visualizations, animations, and technical copy.
