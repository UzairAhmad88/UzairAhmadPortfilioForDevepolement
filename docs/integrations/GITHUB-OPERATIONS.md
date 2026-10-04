# GitHub Intelligence & Operations

## 1. System Overview

The GitHub Intelligence module maps portfolio projects to active public repositories on GitHub:
- Primary GitHub Profile: `https://github.com/UzairAhmad88`
- Automated repo synchronization script: `scripts/sync-projects.mjs`.

---

## 2. Sync Workflow & Safety

- **Dry-Run Mode**: Always run `npm run github:sync:dry` before applying changes to inspect matched repositories.
- **Curated Override**: Curation in `src/data/projects.ts` takes precedence over raw GitHub API metadata.
- **Private Repository Isolation**: Private repos are never exposed; only explicitly mapped public case studies are ingested.
- **Secret Safety**: No GitHub PATs or OAuth tokens are committed to source code.
