# Project Sync Operations & Reconciliation Engine

**Project:** Personal Developer Portfolio / Personal Engineering & Research Platform  
**Phase:** 34 — Final Engineering Documentation & Maintainability System  
**Implementation:** `src/lib/project-sync/` & `scripts/sync-projects.mjs`  

---

## 1. System Overview

The **Project Sync Engine** is an automated reconciliation pipeline that aligns the 3 distinct representations of an engineering project:

```text
┌─────────────────────────────────────────────────────────────────────────────┐
│                    TRI-DIRECTIONAL PROJECT ALIGNMENT                        │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│                  ┌────────────────────────────────┐                         │
│                  │   PORTFOLIO CANONICAL RECORD   │                         │
│                  │     (src/data/projects.ts)     │                         │
│                  └───────────────┬────────────────┘                         │
│                                  │                                          │
│                   matches        │        matches                           │
│             ┌────────────────────┴────────────────────┐                     │
│             ▼                                         ▼                     │
│  ┌───────────────────────┐               ┌────────────────────────┐         │
│  │   GITHUB REPOSITORY   │ ◄───────────► │   VERCEL DEPLOYMENT    │         │
│  │ (github.com/Uzair...) │   associates  │  (*.vercel.app domain) │         │
│  └───────────────────────┘               └────────────────────────┘         │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Sync Engine Operations & Verification Modes

| Operation | NPM Script | Command Syntax | Environment | Safe? | Description |
|:---|:---|:---|:---|:---|:---|
| **Sync (Dry Run)** | `npm run projects:sync:dry` | `node scripts/sync-projects.mjs --dry-run` | Local / CI | **Yes (Read-only)** | Scans repositories, matches slugs, and outputs a drift report without writing files. |
| **Sync (Full)** | `npm run projects:sync` | `node scripts/sync-projects.mjs` | Local | **Yes (Controlled)** | Reconciles cached repository metadata and updates baseline snapshots. |
| **Validate Sync** | `npm run projects:validate` | `node scripts/validate-project-sync.mjs` | Local / CI | **Yes (Read-only)** | Enforces that all projects in `src/data/projects.ts` have valid repository mappings. |

---

## 3. Matching Algorithm & Confidence Scoring

The matching engine (`src/lib/project-sync/matcher.ts`) calculates a match confidence score ($C \in [0.0, 1.0]$) between a portfolio case study and a GitHub repository:

- **Exact Slug Match ($C = 1.0$):** Repository name matches the project slug exactly (e.g., `curasphere-hms` matches repo `curasphere-hms`).
- **Normalized Alias Match ($C = 0.9$):** Repository matches a registered alias (e.g., `stock-return-prediction` matches `deep-learning-stock-return-prediction`).
- **Topic / Description Match ($C \ge 0.7$):** Repository contains matching topic tags and description keywords.
- **Unmatched ($C < 0.5$):** Flagged for manual review; never auto-associated.

---

## 4. Conflict Resolution & Drift Detection

When the sync engine runs:
1. It compares live repository states against committed baseline caches.
2. If drift is detected (e.g., repository archived, renamed, or deleted), an alert is logged to stdout.
3. The engine **never overwrites curated case study summaries or mathematical findings automatically**, protecting human-authored engineering documentation from accidental corruption.
