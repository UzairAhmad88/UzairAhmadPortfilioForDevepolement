# Project Sync Security & Threat Model

## 1. Executive Summary

The Project Sync system processes third-party API data, web URLs, and git metadata. In accordance with zero-trust engineering principles, all external data is treated as untrusted user input. The synchronization layer enforces strict boundaries to prevent credential leakage, cross-site scripting (XSS), server-side request forgery (SSRF), and arbitrary code execution.

---

## 2. Security Invariants & Principles

```
┌────────────────────────────────────────────────────────┐
│                   UNTRUSTED EXTERNAL                   │
│        (GitHub API, Vercel API, Public Tarballs)       │
└───────────────────────────┬────────────────────────────┘
                            │
┌───────────────────────────▼────────────────────────────┐
│                  SANITIZATION BARRIER                  │
│  - Strip HTML / Scripts / Markdown injection           │
│  - Enforce strict HTTPS URL schemas                    │
│  - Redact private repos & internal preview URLs        │
│  - Strip authorization tokens & environment variables  │
└───────────────────────────┬────────────────────────────┘
                            │
┌───────────────────────────▼────────────────────────────┐
│                    ISOLATED RUNTIME                    │
│        (No client-side tokens, Static AST Only)        │
└────────────────────────────────────────────────────────┘
```

---

## 3. Threat Vectors & Mitigations

### 1. Client-Side Credential & Token Exposure
* **Threat:** Leaking `GITHUB_TOKEN`, `VERCEL_TOKEN`, or private team tokens into client-side JS bundles or public JSON files.
* **Mitigation:**
  * External API fetches are performed **strictly during build-time or offline CLI execution** (`scripts/sync-projects.mjs`).
  * No API tokens exist in client-side bundles.
  * `project-sync-report.json` explicitly sanitizes all metadata fields to ensure zero secret inclusion.

### 2. Private Repository & Internal Staging Exposure
* **Threat:** Unintentionally publishing internal research, private clients' repositories, or staging Vercel URLs to public visitors.
* **Mitigation:**
  * Repositories with `visibility !== 'public'` or `private === true` are automatically excluded from public links.
  * Preview deployments are stripped of internal staging domains unless explicitly published via `publishDeploymentEvidence: true` and mapped to a custom domain.

### 3. Untrusted Metadata & Content Injection (XSS)
* **Threat:** Malicious repository descriptions, commit messages, or topic tags containing HTML `<script>` tags, iframe embeds, or markdown exploits.
* **Mitigation:**
  * All external strings (repository names, descriptions, languages) undergo schema validation and HTML entity escaping before rendering in Astro components.
  * Astro templates use automatic HTML escaping by default.

### 4. Malicious External URLs & Open Redirects
* **Threat:** Compromised GitHub homepage URLs or hijacked domains pointing visitors to phishing sites.
* **Mitigation:**
  * URL validator enforces strict `https://` protocols and disallows `javascript:`, `data:`, and local loopback (`localhost`, `127.0.0.1`) schemes in public links.

### 5. Denial of Service via Rate Limits
* **Threat:** API rate limiting blocking production static site builds.
* **Mitigation:**
  * Build pipeline relies on static cached metadata (`src/data/github/cache.json`, `src/data/vercel/cache.json`).
  * If API limits occur during CLI sync, existing verified caches remain preserved and the system records an `UNAVAILABLE` status without terminating the build.

---

## 4. Security Checklist for Phase 17

- [x] Zero API tokens shipped to client bundles.
- [x] Sanitization of all external strings in sync reports and UI badges.
- [x] Strict URL scheme verification (`https://` only).
- [x] Public-only repository link exposure.
- [x] Non-destructive error boundaries on failed API requests.
- [x] Deterministic dry-run safety guarantees.
