# Project Sync Failure Handling & Resilience

## 1. Executive Summary

The Project Sync architecture guarantees **High Availability and Resilience** for the portfolio platform. External services (GitHub API, Vercel API, network gateways, upstream DNS) are inherently variable. The portfolio must remain fully operational, browsable, and performant regardless of external API downtime, network outages, authentication expirations, or schema migrations.

---

## 2. Failure Isolation Architecture

The system enforces a decoupled **Graceful Degradation Tier**:

```
┌─────────────────────────────────────────────────────────────┐
│                    TIER 1: PORTFOLIO CORE                   │
│   (Always Available: Narratives, DNA, Notes, Research)      │
└──────────────────────────────┬──────────────────────────────┘
                               │
┌──────────────────────────────▼──────────────────────────────┐
│                  TIER 2: CACHED EVIDENCE                    │
│     (Preserved Static Cache: Last Verified Timestamps)      │
└──────────────────────────────┬──────────────────────────────┘
                               │
┌──────────────────────────────▼──────────────────────────────┐
│                 TIER 3: LIVE EXTERNAL APIS                  │
│       (Optional Sync-Time Only: GitHub, Vercel APIs)        │
└─────────────────────────────────────────────────────────────┘
```

---

## 3. Failure Scenarios & Deterministic Responses

| Scenario | Immediate Failure Impact | System Response & Fallback Behavior | Public Visitor Experience |
| :--- | :--- | :--- | :--- |
| **GitHub API Rate Limit / 403** | CLI sync cannot fetch fresh repo stats | Sync flags `UNAVAILABLE` status, records warning in report, keeps existing cache intact | Complete project page renders; badge shows cached/unverified |
| **GitHub Repository Deleted** | Upstream repository 404s | Sync flags `REMOVED_REPOSITORY`, preserves portfolio project, marks evidence `UNAVAILABLE` | Project narrative intact; repository link disabled/omitted |
| **GitHub Repository Renamed** | Repository slug mismatch | Matcher links stable `id`, updates `fullName`, flags change in sync report | Unbroken navigation; repo URL updated to new alias |
| **Vercel API Downtime / 500** | Deployment health check fails | Sync records `UNAVAILABLE`, retains previously verified `liveUrl` | "Visit Live Site" button remains functional to canonical URL |
| **Production Deployment Error** | Vercel deployment enters `ERROR` | Sync records `STATE_CONFLICT`, flags warning in review report | Public link remains active; status flagged for maintainer |
| **Network Gateway Timeout** | Local CLI or CI script loses network | Sync gracefully aborts fetch step, uses local static cache | Zero build disruption; build succeeds using cached assets |
| **Corrupted Cache JSON** | Syntax error in `cache.json` | Validator catches schema error, falls back to empty default registry | System logs error; build continues without throwing runtime crash |

---

## 4. Operational Invariant: The Decoupled Source Rule

> **The existence and publication of portfolio content is strictly sovereign.**
> External infrastructure events (API failures, repository deletions, cloud provider outages) NEVER trigger automated deletion, unpublishing, or degradation of human-authored portfolio case studies.
