# Vercel Failure Handling & Resilience

## 1. Failure Scenarios & Mitigations

| Scenario | Symptom | Mitigation Strategy |
|:---|:---|:---|
| **API Timeout / Offline** | Network unreachable or `AbortError` | Fall back immediately to `cachedVercelProjects`. Build proceeds with zero downtime. |
| **Rate Limiting (429)** | Exceeded Vercel API limits | Gracefully log notice, switch to static cache, and emit warning in report. |
| **Invalid Credentials** | 401/403 Unauthorized | Use local baseline records; prevent build crashes in PRs or non-privileged environments. |
| **Deleted Vercel Project** | Project removed from Vercel | Portfolio project remains intact; deployment evidence marked `UNAVAILABLE`. |
| **Malformed / Insecure URL** | HTTP or loopback IP | Validator rejects URL from rendering; logs warning in build output. |
