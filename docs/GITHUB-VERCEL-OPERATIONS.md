# GitHub & Vercel Intelligence Operations

**Project:** Personal Developer Portfolio / Personal Engineering & Research Platform  
**Phase:** 34 — Final Engineering Documentation & Maintainability System  
**Implementation:** `src/lib/github/`, `src/lib/vercel/`, `scripts/sync-*.mjs`  

---

## 1. Intelligence Systems Architecture

The platform connects to GitHub and Vercel through dedicated intelligence and evidence verification engines. These engines ensure that all repository links, live deployment statuses, commit histories, and deployment targets shown in the portfolio are grounded in factual truth.

```text
┌─────────────────────────────────────────────────────────────────────────────┐
│                 GITHUB & VERCEL INTELLIGENCE PIPELINE                       │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  [GitHub Public API / Token]           [Vercel Deployments API / Token]     │
│              │                                        │                     │
│              ▼                                        ▼                     │
│     GitHub Normalizer Engine                Vercel Normalizer Engine        │
│              │                                        │                     │
│              ▼                                        ▼                     │
│     GitHub Baseline Cache                   Vercel Baseline Cache           │
│              │                                        │                     │
│              ▼                                        ▼                     │
│     GitHub Matcher Engine                   Vercel Matcher Engine           │
│              │                                        │                     │
│              └───────────────────┬────────────────────┘                     │
│                                  │                                          │
│                                  ▼                                          │
│                     Project Sync & Evidence Engine                          │
│                                  │                                          │
│                                  ▼                                          │
│                   Portfolio Case Studies & Lab UI                           │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Evidence Classification Hierarchy

Every external deployment or repository record displayed on the site is categorized into one of four evidence tiers:

1. **`LIVE EVIDENCE`:** Telemetry fetched directly from GitHub/Vercel APIs within the active sync cycle.
2. **`CACHED BASELINE EVIDENCE`:** Validated snapshots committed in `src/lib/github/baseline-cache.ts` and `src/lib/vercel/baseline-cache.ts` to ensure 100% offline reproducibility and deterministic builds.
3. **`MANUAL CURATION EVIDENCE`:** Verified manual mappings in `src/lib/github/curation-registry.ts` and `src/lib/vercel/curation-registry.ts`.
4. **`LOCAL / UNMATCHED`:** Projects that are purely local or archived with zero deployment claim.

---

## 3. Operational Workflows & CLI Commands

### 3.1 GitHub Synchronization
- **Dry-Run Sync (Safe inspection):**
  ```bash
  npm run github:sync:dry
  # or: node scripts/sync-projects.mjs --dry-run
  ```
- **Validation Run:**
  ```bash
  npm run github:validate
  # or: node scripts/validate-github.mjs
  ```

### 3.2 Vercel Synchronization
- **Dry-Run Sync (Safe inspection):**
  ```bash
  npm run vercel:sync:dry
  # or: node scripts/sync-vercel.mjs --dry-run
  ```
- **Validation Run:**
  ```bash
  npm run vercel:validate
  # or: node scripts/validate-vercel.mjs
  ```

---

## 4. Failure Handling & Rate-Limit Resilience

- **GitHub API Rate Limits:** When rate limits are reached (HTTP 403), the engine automatically falls back to `src/lib/github/baseline-cache.ts` without throwing fatal build errors.
- **Vercel API Errors:** If the Vercel API is unreachable or tokens are omitted, the Vercel intelligence engine gracefully resolves cached baseline deployment records.
- **Zero Build Interruption:** Build pipelines (`astro build`) never fail due to external API downtime.
