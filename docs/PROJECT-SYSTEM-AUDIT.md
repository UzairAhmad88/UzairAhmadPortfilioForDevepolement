# Project System Audit & Future Architecture Proposal

**Platform:** Uzair Ahmad — Personal Engineering & Research Platform  

---

## 1. Current Project System Assessment
- **Storage Location:** `src/data/projects.ts` (single source of truth).
- **Type Safety:** Typed via `src/types/project.ts` (`Project`, `CaseStudy`, `Decision`, `Challenge`, `Result`).
- **Dynamic Routing:** Implemented in `src/pages/work/[slug].astro` via `getStaticPaths()`.
- **Classification System:** Status (`active`, `academic`, `prototype`, `completed`) and Category filters (`all`, `quant`, `ai`, `fullstack`, `product`).
- **Evidence Verification:** Every project card has verified GitHub links and live demos where applicable.

---

## 2. Recommended Project System 2.0 Evolution (Future Phases)
1. **Astro Content Collections:** Migrate projects from a raw TypeScript file to Astro Content Collections (`src/content/projects/*.mdx`) with strong `zod` schema validation.
2. **Interactive Architecture Embeds:** Support interactive SVG flowcharts and architectural topologies inside individual case study pages.
3. **Project DNA Visualizer:** When hovering cards, display a compact matrix of `ROLE · STACK · TYPE · STATUS · YEAR`.
4. **Related Research Knowledge Graph:** Automated cross-linking between projects and research inquiries.
