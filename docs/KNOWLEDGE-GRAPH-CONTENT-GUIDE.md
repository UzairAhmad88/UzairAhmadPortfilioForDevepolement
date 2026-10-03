# KNOWLEDGE GRAPH CONTENT AUTHORING & CURATION GUIDE
## Uzair Ahmad — Personal Engineering & Research Platform

---

## 1. Golden Rules for Graph Connections

1. **Only Connect Real Work:** Never create a relationship link merely to populate the graph or make a technology seem more extensively used.
2. **Use Canonical Slugs & IDs:**
   - Projects: use the exact `slug` from `src/data/projects.ts`
   - Research: use the exact `slug` from `src/data/research.ts`
   - Lab: use the exact `slug` from `src/data/lab.ts`
   - Notes: use the exact `slug` from `src/data/notes.ts`
   - Technologies: use the exact lowercase canonical ID from `src/data/technologies.ts`
   - Methodology: use the exact step ID (e.g., `step-1`) from `src/data/methodology.ts`
3. **Never Duplicate Content:** Do not define project titles, descriptions, or parameters inside graph builder files. The canonical data files remain the sole source of truth.
4. **No Fabricated Rankings:** Do not attach stars, percentages, quality scores, or leaderboard rankings to any entity.

---

## 2. Authoring a New Entity Checklist

When adding a new Project, Research item, Lab experiment, or Engineering Note:
1. Define the entity in its canonical data file (`src/data/<type>.ts`).
2. Add explicit relational references (e.g. `relatedProjects`, `relatedResearch`, `relatedLab`, `relatedNotes`, `technologies`).
3. Run `npm test` to trigger the automated graph validation suite.
4. Verify that `npm test` and `npm run check` report 0 invalid edge references and 0 orphans.
