# Security Operations & Threat Model

**Project:** Personal Developer Portfolio / Personal Engineering & Research Platform  
**Phase:** 34 — Final Engineering Documentation & Maintainability System  
**Classification:** Application Security, Secret Isolation & Threat Mitigation  

---

## 1. Security Philosophy & Invariants

The platform adheres to a strict **static security-by-default architecture**. Because the application compiles to static HTML/CSS/JS with zero dynamic server-side database evaluations in the request path, the attack surface is orders of magnitude smaller than traditional monolithic web applications.

```text
┌─────────────────────────────────────────────────────────────────────────────┐
│                       SECURITY BOUNDARY ARCHITECTURE                        │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  [PUBLIC INTERNET]                                                          │
│         │                                                                   │
│         ▼                                                                   │
│  [Vercel Global Edge CDN] ─── Strict HTTP Security Headers Enforced         │
│         │                     (HSTS, X-Frame-Options, CSP-ready, nosniff)   │
│         ▼                                                                   │
│  [Static HTML & JS Bundles] ── Zero Server Execution / Zero DB Connections │
│         │                                                                   │
│         ▼                                                                   │
│  [Client DOM] ─────────────── XSS-Escaped Search Highlighting & Form Trap   │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Threat Modeling & Mitigation Matrix

| Threat Vector | Risk Level | Target Area | Mitigation Mechanism | Verification Method |
|:---|:---|:---|:---|:---|
| **Secret Exposure** | Critical | Codebase / Client Bundles | Zero secrets in repo. Automated secret scanner in QA assertions (`tests/unit/production-qa.test.ts`). | Scanned all `_astro/*.js` for `ghp_`, `vercel_`, `postgres://`. |
| **Cross-Site Scripting (XSS)** | High | Discovery Search Engine | Query terms are sanitized via HTML entity encoding and strict regex escaping prior to DOM insertion. | Tested in `tests/unit/discovery.test.ts`. |
| **Reverse Tabnabbing** | Medium | Outbound Links | All external links declare `target="_blank" rel="noopener noreferrer"`. | Verified across all cards and footer links. |
| **Clickjacking** | Medium | All Pages | HTTP Header `X-Frame-Options: DENY` enforced on all responses via `vercel.json`. | Verified in HTTP header configuration. |
| **MIME Sniffing** | Low | Static Assets | `X-Content-Type-Options: nosniff` enforced on all responses. | Verified in HTTP header configuration. |
| **Spam / Bot Abuse** | Medium | Contact Form | Hidden honeypot trap field (`name="_gotcha"`), client-side input constraints. | Verified in `tests/unit/contact.test.ts`. |
| **Man-in-the-Middle (MitM)** | High | Transport Layer | HSTS header enforced with `max-age=63072000; includeSubDomains; preload` over TLS 1.3. | Verified in `vercel.json`. |

---

## 3. Secret Isolation Guidelines

- **Build Time:** Local API tokens (`GITHUB_TOKEN`, `VERCEL_TOKEN`) are restricted to manual CLI synchronization scripts in `scripts/`. They are never imported by Astro `.astro` component scripts.
- **Client Bundles:** Astro strictly isolates variables. Only variables prefixed with `PUBLIC_` are exposed to client code.
- **Git Commits:** Automated `.gitignore` rules prevent `.env`, `.env.local`, and credential dumps from entering version control.
