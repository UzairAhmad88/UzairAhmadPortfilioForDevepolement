# Content Maintenance & Relationship Governance

**Project:** Personal Developer Portfolio / Personal Engineering & Research Platform  
**Phase:** 34 — Final Engineering Documentation & Maintainability System  
**Scope:** Updating and extending projects, research, notes, lab workbenches, technologies, and timeline  

---

## 1. Governance Principles & Safe Authoring Rules

To maintain absolute structural and referential integrity across the 60 routes and knowledge graph:

1. **Never Delete an Entity ID Without Updating References:** If an entity (e.g. `market-regime-engine`) is moved to the archive, its references in `relatedProjects` across other entities must either point to the new location or be safely unlinked.
2. **Always Use Canonical Technology Slugs:** Only use technology identifiers registered in `src/data/technologies.ts`.
3. **Always Run the Verification Pipeline After Edits:** Every content change must be verified using `npm run check && npm test && npm run build`.
4. **Never Insert Fabricated Metrics:** Always cite real test suites, verifiable loss curves, or actual repository files.

---

## 2. Maintenance Workflows by Entity

| Entity | Primary Data File | Secondary Files to Update | Required Validation Script |
|:---|:---|:---|:---|
| **Project Case Study** | `src/data/projects.ts` | `src/data/timeline.ts`, `src/lib/github/curation-registry.ts` | `npm test` & `npm run projects:validate` |
| **Research Dossier** | `src/data/research.ts` | `src/data/timeline.ts`, `src/data/notes.ts` | `npm test` |
| **Engineering Note** | `src/data/notes.ts` | `src/data/timeline.ts` | `npm test` |
| **Lab Workbench** | `src/data/lab.ts` | `src/data/timeline.ts`, `src/lib/vercel/curation-registry.ts` | `npm test` & `npm run vercel:validate` |
| **Technology Stack Entry** | `src/data/technologies.ts` | `src/data/projects.ts`, `src/data/lab.ts` | `npm test` |
| **Engineering Timeline** | `src/data/timeline.ts` | N/A (Auto-generated & Curated) | `npm run timeline:validate` |
| **About / Biography** | `src/data/site.ts` | N/A | `npm run about:validate` |
| **Collaboration Offerings** | `src/data/opportunities.ts` | N/A | `npm run collaborate:validate` |
| **Contact Meta** | `src/data/site.ts` | N/A | `npm run contact:validate` |

---

## 3. Pre-Commit Verification Checklist

Before committing any content update:
- [ ] Run `npm run check` (0 Astro/TypeScript diagnostic errors).
- [ ] Run `npm test` (All 244 unit tests pass across 45 suites).
- [ ] Run `npm run build` (All 60 static HTML routes generate cleanly).
- [ ] Verify zero undefined strings in generated HTML files.
