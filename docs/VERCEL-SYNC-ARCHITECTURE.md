# Vercel Intelligence Synchronization Architecture

## 1. Synchronization Model

All Vercel synchronization operations are **asynchronous, build-time, or manual CLI tasks**.

### Key Rules:
1. **Zero Browser Execution**: Browser bundles never make calls to `api.vercel.com`.
2. **Deterministic Builds**: If no network or token is available, the build uses the verified ground-truth cache in [`src/data/vercel/projects.ts`](file:///d:/web/protfolio/src/data/vercel/projects.ts).
3. **Dry-Run by Default**: Sync commands inspect and report without mutating curated content.

---

## 2. CLI Commands

```bash
# Validate all deployment URLs, curation entries, and schema constraints
npm run vercel:validate

# Run a dry-run synchronization and report discovery diffs
npm run vercel:sync:dry

# Run a live synchronization (when VERCEL_TOKEN is configured)
npm run vercel:sync -- --live
```

---

## 3. Difference Detection & Reporting

The sync engine [`src/lib/vercel/sync.ts`](file:///d:/web/protfolio/src/lib/vercel/sync.ts) detects:
- **New Projects**: Unmapped Vercel projects categorized as `VERCEL_ONLY`.
- **State Changes**: Transitions between `READY`, `BUILDING`, `ERROR`, `CANCELED`.
- **Target Changes**: Deployments promoted to `production`.
- **Domain Changes**: New custom domains assigned.
- **Warnings**: Malformed URLs, inaccessible deployments, or suggested matches requiring human sign-off.
