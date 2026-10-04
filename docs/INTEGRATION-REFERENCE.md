# External Integrations & Services Reference

**Project:** Personal Developer Portfolio / Personal Engineering & Research Platform  
**Phase:** 34 — Final Engineering Documentation & Maintainability System  
**Integration Scope:** GitHub Intelligence, Vercel Intelligence, Contact Form, Static Delivery  

---

## 1. External Integration Overview

| Integration | Purpose | Authentication | Direction | Environment | Failure Behavior | Source of Truth |
|:---|:---|:---|:---|:---|:---|:---|
| **GitHub Intelligence** | Repository discovery, metadata caching, commit lineage | Optional PAT via `GITHUB_TOKEN` | Read-only (API / Cache) | Build / Sync CLI | Falls back gracefully to curated baseline cache | `src/lib/github/` & Curated Registry |
| **Vercel Intelligence** | Deployment discovery, live status verification | Optional Token via `VERCEL_TOKEN` | Read-only (API / Cache) | Build / Sync CLI | Falls back gracefully to curated baseline cache | `src/lib/vercel/` & Deployment Registry |
| **Project Sync Engine** | Tri-directional alignment (Portfolio <-> GitHub <-> Vercel) | Local environment tokens | Read-only match / local script | CLI / Build | Safe dry-run mode, alerts on drift | `src/lib/project-sync/` |
| **Contact Form** | Inbound collaboration inquiry submission | Client-side CSRF / Honeypot | Outbound POST / mailto | Client browser | Displays error feedback without data loss | `src/components/sections/Contact.astro` |
| **Vercel Edge Hosting** | Global static asset and HTML distribution | Vercel Platform Deployment | Outbound SSG Deploy | Production CDN | Global CDN edge caching with instant revalidation | `vercel.json` |

---

## 2. GitHub Intelligence Pipeline (`src/lib/github/`)

- **Purpose:** Synchronizes repository telemetry (stars, forks, languages, topics, commit lineage) for portfolio projects and lab workbenches.
- **Authentication:** Accepts optional `GITHUB_TOKEN` for higher rate limits. Works without authentication via standard public endpoints and cached baselines.
- **Security Rule:** Never exposes GitHub personal access tokens in client bundles or public repositories.
- **Curated Evidence:** Every portfolio project maps strictly to an existing public repository under `github.com/UzairAhmad88`.

---

## 3. Vercel Intelligence Pipeline (`src/lib/vercel/`)

- **Purpose:** Verifies live deployment states, preview targets, and SSL certificate validity for production case studies and lab sandboxes.
- **Authentication:** Uses optional `VERCEL_TOKEN` and `VERCEL_TEAM_ID` during sync CLI execution.
- **Evidence Hierarchy:** Live API telemetry > Cached baseline telemetry > Curated static evidence. Uncurated projects remain explicitly marked as `UNMATCHED` or `LOCAL_ONLY`.

---

## 4. Contact & Form Submissions

- **Spam Protection:** Employs hidden honeypot fields (`name="_gotcha"`) and client-side validation rules.
- **Zero Sensitive Data Leakage:** Form input is never logged to client consoles or transmitted to unverified third-party trackers.
- **Zero Third-Party Marketing Scripts:** No Google Tag Manager, Facebook Pixel, or tracking scripts are embedded in the platform.
