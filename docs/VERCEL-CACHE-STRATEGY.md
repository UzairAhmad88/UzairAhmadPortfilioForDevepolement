# Vercel Cache & Freshness Strategy

## 1. Multi-Tier Cache Architecture

1. **Tier 1: Ground-Truth Static Cache** ([`src/data/vercel/projects.ts`](file:///d:/web/protfolio/src/data/vercel/projects.ts))
   - Checked into Git version control.
   - Used for zero-dependency offline builds, CI/CD static checks, and unit tests.
2. **Tier 2: Build-Time In-Memory Cache**
   - Hydrated during SSG generation.
3. **Tier 3: Provenance State Tracking**
   - `LIVE_VERIFIED`: Directly verified from Vercel API during the current run.
   - `CACHED`: Loaded from baseline cache file.
   - `MANUAL`: Manually curated with direct human sign-off.
   - `UNAVAILABLE`: Resource unreachable or deleted.

---

## 2. Staleness Handling

- Every evidence payload records `lastVerifiedAt`.
- If cached data exceeds acceptable freshness limits, the UI renders `Verified <Date>` instead of claiming real-time currency.
