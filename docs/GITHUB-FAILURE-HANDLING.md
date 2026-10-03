# GitHub Intelligence — Failure Handling Specification

## 1. Failure Scenarios & Recovery Matrix

| Scenario | Detection Mechanism | System Behavior |
| :--- | :--- | :--- |
| **API Rate Limit Exceeded (HTTP 403)** | `response.status === 403` / `x-ratelimit-remaining === 0` | Fall back immediately to verified baseline cache (`baselineApiRepositories`). Log warning. |
| **Network Failure / Offline** | `fetch()` throws or AbortController triggers after 8000ms | Load offline baseline data with `isOfflineFallback: true`. Build succeeds without blocking. |
| **Repository Renamed / Moved** | Mismatched name in API response | Retain connection via repository ID and URL mapping. Output warning in sync audit report. |
| **Repository Deleted / Made Private** | 404 or absence from user repository list | Mark GitHub evidence as `Unavailable`. Preserve curated portfolio project narrative intact. |
| **Invalid Username** | HTTP 404 on user endpoint | Log configuration error. Revert to baseline cache without crashing. |
