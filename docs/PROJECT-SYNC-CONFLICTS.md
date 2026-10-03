# Project Sync Conflict Detection & Resolution

## 1. Executive Summary

In multi-source software metadata environments, discrepancies between human-curated narratives, git repositories, and cloud deployment pipelines are inevitable. Rather than attempting speculative, lossy auto-resolution, the Project Sync Conflict Detection Engine systematically flags contradictions, halts erroneous evidence propagation, and generates actionable, structured conflict records.

---

## 2. Taxonomy of Conflicts

The engine identifies 6 canonical conflict types:

```
                  ┌──────────────────────────────┐
                  │      CONFLICT DETECTOR       │
                  └──────────────┬───────────────┘
                                 │
     ┌───────────────────────────┼───────────────────────────┐
     ▼                           ▼                           ▼
┌──────────────┐          ┌──────────────┐            ┌──────────────┐
│     REPO     │          │  DUPLICATE   │            │     URL      │
│   MISMATCH   │          │   MAPPING    │            │ INCONSISTENCY│
└──────────────┘          └──────────────┘            └──────────────┘
     ▼                           ▼                           ▼
┌──────────────┐          ┌──────────────┐            ┌──────────────┐
│    STATE     │          │   MONOREPO   │            │ VISIBILITY   │
│   CONFLICT   │          │  COLLISION   │            │   EXPOSURE   │
└──────────────┘          └──────────────┘            └──────────────┘
```

### 1. `REPO_MISMATCH`
* **Description:** A portfolio project is linked to GitHub repository `A`, but the associated Vercel deployment reports being built from repository `B`.
* **Severity:** `ERROR`
* **Workflow Impact:** Deployment evidence badges are suspended until verified in `project-sync-curation.ts`.

### 2. `DUPLICATE_MAPPING`
* **Description:** Two or more distinct portfolio projects claim ownership of the identical GitHub repository or Vercel project ID without an explicit monorepo directory discriminator.
* **Severity:** `ERROR`
* **Workflow Impact:** Both projects receive a `CONFLICT` status in the sync report.

### 3. `URL_INCONSISTENCY`
* **Description:** The curated portfolio `liveUrl` diverges completely from the verified Vercel production deployment canonical alias.
* **Severity:** `WARNING`
* **Workflow Impact:** The curated live URL remains active, but an audit warning is generated to alert the maintainer of domain drift or stale custom domain DNS.

### 4. `STATE_CONFLICT`
* **Description:** Contradictory lifecycle states across systems (e.g. portfolio marks a project `Completed` and `Deployed`, but Vercel reports the deployment is `ERROR` or canceled, or GitHub reports the repository was deleted).
* **Severity:** `WARNING`
* **Workflow Impact:** Portfolio status is NEVER automatically demoted, but a verification warning is appended to `ProjectSyncRecord`.

### 5. `MONOREPO_COLLISION`
* **Description:** Multiple projects mapped to the same monorepo root without distinct sub-paths or package manifests specified in the curation registry.
* **Severity:** `WARNING`
* **Workflow Impact:** Flagged for explicit sub-path curation.

### 6. `VISIBILITY_EXPOSURE`
* **Description:** A private GitHub repository or staging deployment URL is referenced in public portfolio content.
* **Severity:** `CRITICAL`
* **Workflow Impact:** The external link is redacted from public display until explicitly curated as public evidence.

---

## 3. Conflict Data Structure

```typescript
export interface SyncConflict {
  type: 'REPO_MISMATCH' | 'DUPLICATE_MAPPING' | 'URL_INCONSISTENCY' | 'STATE_CONFLICT' | 'MONOREPO_COLLISION' | 'VISIBILITY_EXPOSURE';
  severity: 'WARNING' | 'ERROR' | 'CRITICAL';
  description: string;
  sourceA: { source: 'portfolio' | 'github' | 'vercel'; identifier: string; value: string };
  sourceB: { source: 'portfolio' | 'github' | 'vercel'; identifier: string; value: string };
  proposedResolution?: string;
}
```

---

## 4. Conflict Resolution Workflow

Resolution follows a strict 4-step manual curation protocol:

```
[Sync Engine Detects Discrepancy]
             │
             ▼
[Generates SyncConflict in project-sync-report.json & MD]
             │
             ▼
[Maintainer Reviews PROJECT-SYNC-REPORT.md]
             │
             ▼
[Maintainer Updates src/data/projectSync/curation.ts]
             │
             ▼
[npm run projects:validate verifies 0 conflicts]
```

---

## 5. Non-Destructive Invariant

Under no circumstances will a detected conflict:
* Erase project markdown/content files.
* Remove a project from public listings (unless manually unpublished).
* Overwrite human-authored problem statements or architectural narratives.
