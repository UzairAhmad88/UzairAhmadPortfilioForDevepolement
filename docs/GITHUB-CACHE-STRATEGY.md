# GitHub Intelligence — Cache Strategy

## 1. Multi-Tiered Cache Model
To ensure high availability and zero build brittleness:

```
[Tier 1: Live API Request]
     │ (Executed during npm run github:sync)
     ▼
[Tier 2: Generated JSON Cache] (data/generated/github-repositories.json)
     │ (Committed snapshot with timestamps & detection flags)
     ▼
[Tier 3: Verified In-Memory Baseline] (src/data/github/repositories.ts)
     │ (Immutable verified fallback compiled into static build bundle)
```

---

## 2. Stale Data & Verification States
Each repository record carries a clear provenance tag:
- `Verified`: Freshly validated from GitHub API with live timestamp.
- `Cached`: Sourced from previous synchronization cycle with preserved `fetchedAt` record.
- `Manual`: Entered manually for non-standard deployments.
- `Unavailable`: Offline or private codebase.
