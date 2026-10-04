# Project Sync Operations & Curation Management

## 1. Sync Philosophy

Project Sync (`scripts/sync-projects.mjs`) is an **assisted curation tool**, not an automatic auto-publisher. It detects upstream changes in GitHub repositories and proposes updates to `src/data/projects.ts` without overwriting curated technical narratives.

---

## 2. Operational Commands

```bash
# Preview proposed matches without modifying files
npm run projects:sync:dry

# Validate project sync registry
npm run projects:validate
```
