# Project Discovery & Synchronization Command Manual

**Command**: `npm run projects:sync` (alias `npm run sync:github`)  
**Script**: `scripts/sync-projects.mjs`  
**Execution Modes**: Active Sync and Dry-Run (`--dry-run`)  

---

## 1. Quick Usage

### Dry-Run (Read-Only Preview)
To discover new repositories or inspect update statuses without modifying any files:
```bash
npm run projects:sync -- --dry-run
```

### Active Synchronization
To query GitHub API, update the repository cache, and generate the synchronization report:
```bash
npm run projects:sync
```

---

## 2. Command Pipeline

```text
[ GitHub REST API / Baseline Fallback ]
                  │
                  ▼
   1. Fetch All Public Repositories (UzairAhmad88)
                  │
                  ▼
   2. Normalize Technologies & Classify Repositories
                  │
                  ▼
   3. Match against Curated Projects & Vercel Deployments
                  │
                  ▼
   4. Categorize: PUBLISHED vs UPDATE_AVAILABLE vs DISCOVERED
                  │
                  ▼
   5. Output Outputs:
      - data/generated/github-repositories.json
      - docs/generated/github-project-sync.md
```

---

## 3. Status Definitions

- **`PUBLISHED`**: The repository is already mapped to a published case study on the portfolio.
- **`UPDATE_AVAILABLE`**: A published project's GitHub repository has received newer commits than the recorded sync date.
- **`DISCOVERED`**: A new repository was detected on GitHub that is not yet in the portfolio. Requires manual curation before publication.
- **`UNCHANGED`**: Published project metadata is up to date.
