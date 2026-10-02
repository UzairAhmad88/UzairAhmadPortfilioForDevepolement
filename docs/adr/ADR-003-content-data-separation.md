# ADR-003: Content and Code Separation

## Status
Accepted

## Context
In the original prototype, project information, capability descriptions, skill mappings, links, and contact channels were hardcoded directly in `index.html`. Updating a single link or adding a project required editing complex markup, risking regression.

## Decision
Extract all site data, projects, capabilities, skills, research items, timelines, and contact methods into strongly-typed TypeScript modules under `src/data/` adhering to domain models defined in `src/types/`.

## Reasons
1. **Maintainability**: Content can be edited, updated, and extended in dedicated data files without touching UI components.
2. **Type Safety**: TypeScript compiler enforces required fields, preventing broken links or missing properties.
3. **Future Extensibility**: Seamless path towards Markdown / MDX Content Collections in future phases (e.g. `src/content/projects/`).

## Consequences
- Clean components focused solely on presentation and accessibility.
- Zero duplication of author identity, URLs, or metadata across pages.
