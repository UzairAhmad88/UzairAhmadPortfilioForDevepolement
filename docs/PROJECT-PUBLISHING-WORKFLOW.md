# Project Publishing Workflow: From GitHub/Vercel to Portfolio

This document outlines the standard 10-step lifecycle for discovering, curating, and publishing new software projects on Uzair Ahmad's personal professional website.

---

## The 10-Step Workflow

```text
  1. Build & Push Code to GitHub (github.com/UzairAhmad88)
                         │
                         ▼
  2. Deploy to Vercel (if interactive web application)
                         │
                         ▼
  3. Run Discovery Tool: `npm run projects:sync`
                         │
                         ▼
  4. Inspect `docs/generated/github-project-sync.md`
                         │
                         ▼
  5. Add Project Entry to `src/data/projects.ts` (or use scaffold)
                         │
                         ▼
  6. Curate Case Study: Problem, Architecture Diagram, Trade-offs, Lessons
                         │
                         ▼
  7. Cross-Link Related Research Inquiries in `src/data/research.ts`
                         │
                         ▼
  8. Run Diagnostics & Tests: `npm test && npm run check`
                         │
                         ▼
  9. Run Build & Verify Routes: `npm run build`
                         │
                         ▼
 10. Commit & Push to `main` (Triggers Automated Vercel Production Release)
```

---

## Draft Project Scaffold Utility
You can generate a starter TypeScript scaffold for any discovered repository using the helper function in `src/lib/github/sync.ts`:
```typescript
import { generateProjectDraftScaffold, normalizeRepository } from '@/lib/github';
// Outputs structured TypeScript Project object ready for editorial curation
```

---

## Prohibited Publishing Actions
- ❌ **NO Auto-Publishing**: Never commit scripts that automatically append unreviewed GitHub API responses into `projects.ts`.
- ❌ **NO Placeholder Text**: Never publish with `"TODO: Write problem statement"` in production.
- ❌ **NO Exaggerated Copy**: Never auto-generate buzzwords (`"revolutionary"`, `"industry-first"`) from repository titles.
