# Portfolio Long-Term Maintenance & Operations Guide

**System:** Uzair Ahmad Professional Portfolio  
**Tech Stack:** Astro, TypeScript, Vanilla CSS Tokens, Vercel  

---

## 1. Daily / Weekly Workflow

### Adding a New Project:
1. Open `src/data/projects.ts`.
2. Add a new `Project` item with:
   - `slug`: e.g. `'new-system-slug'`
   - `title`: e.g. `'New System Name'`
   - `githubUrl`: Verified GitHub repository URL
   - `technologies`: Array of genuine tools used
   - `status`: `'active'` | `'completed'` | `'academic'` | `'prototype'`
   - `caseStudy`: Optional full 12-section technical breakdown.
3. Run `npm test` to verify data schema integrity.
4. Commit and push to `main` — Vercel will automatically build and deploy.

### Adding a Research Note / Inquiry:
1. Open `src/data/research.ts`.
2. Add a new `ResearchItem` entry.
3. Run `npm test` to confirm knowledge graph consistency.

### Updating Live Focus ("Currently"):
1. Open `src/data/timeline.ts`.
2. Edit `currentFocusItems` array with what you are actively building, learning, exploring, or interested in.

---

## 2. Verification Commands

```bash
# Run unit tests
npm test

# Check Astro diagnostics and TypeScript types
npm run check

# Build static production bundle
npm run build

# Preview locally
npm run preview
```

---

## 3. Deployment & CI/CD
- **Branch:** `main` auto-deploys to production on Vercel.
- **Environment Variables:** `SITE_URL` and `GITHUB_TOKEN` (optional, for GitHub sync script) are configured in Vercel project settings.
