# GitHub Intelligence — Synchronization Architecture

## 1. Architectural Strategy
The GitHub synchronization engine is designed as a **build-time and manual CLI workflow**. Client browsers never execute ad-hoc runtime calls to GitHub API when visitors browse the portfolio, preserving sub-2s static load times and guaranteeing immunity from GitHub API rate limits.

```
                    ┌─────────────────────────┐
                    │    GitHub REST API      │
                    │ (users/:user/repos)     │
                    └───────────┬─────────────┘
                                │ [AbortController, 8s timeout, auth token]
                                ▼
                    ┌─────────────────────────┐
                    │      Fetch Client       │
                    │  (client.ts / sync.ts)  │
                    └───────────┬─────────────┘
                                │
          ┌─────────────────────┴─────────────────────┐
          ▼                                           ▼
[Success: HTTP 200]                         [Error / Rate-Limited / Offline]
  Normalize Live Payload                     Load Verified Baseline Cache
          │                                           │
          └─────────────────────┬─────────────────────┘
                                ▼
                    ┌─────────────────────────┐
                    │  Curation & Matching    │
                    │  (matcher.ts)           │
                    └───────────┬─────────────┘
                                │
        ┌───────────────────────┼───────────────────────┐
        ▼                       ▼                       ▼
Published Mappings      Discovered Repositories    Archived / Excluded
(Attached Evidence)     (Queued for Curation)      (Historical State)
```

---

## 2. CLI Execution Modes

### 2.1 Active Synchronization
```bash
npm run github:sync
```
1. Queries the GitHub API for the configured username (`UzairAhmad88`).
2. Evaluates commit timestamps and detected tech against active portfolio projects.
3. Generates the updated JSON cache in `data/generated/github-repositories.json`.
4. Outputs the Markdown audit log to `docs/generated/github-project-sync.md`.

### 2.2 Dry-Run Mode (Read-Only)
```bash
npm run github:sync:dry
# or: npm run github:sync -- --dry-run
```
Runs full discovery, change detection, and diff reporting without altering any files on disk.

### 2.3 Integrity Validation
```bash
npm run github:validate
```
Validates that all curation entries connect to existing canonical project slugs, validates URL formats, and flags orphaned or broken repository mappings.
