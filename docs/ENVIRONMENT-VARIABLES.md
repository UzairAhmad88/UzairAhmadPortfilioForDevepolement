# Environment Variables & Configuration Reference

**Project:** Personal Developer Portfolio / Personal Engineering & Research Platform  
**Phase:** 34 — Final Engineering Documentation & Maintainability System  
**Security Baseline:** Zero Secrets Committed | Safe Placeholders Only  

---

## 1. Environment Variables Catalog

| Variable Name | Purpose | Required? | Scope | Default / Fallback Value | Used In |
|:---|:---|:---|:---|:---|:---|
| `PUBLIC_SITE_URL` | Canonical site origin for sitemap, Open Graph meta, and canonical URLs. | Optional (Recommended) | Public / Build | `https://uzairahmad.vercel.app` | `astro.config.mjs`, `src/data/site.ts`, `src/lib/seo/metadata.ts` |
| `RESEND_API_KEY` | Optional API key for Resend email delivery provider if transactional emails are enabled. | Optional | Server-only | `undefined` (Form falls back to mailto/static feedback) | `src/lib/contact/` (Optional Provider) |
| `CONTACT_FROM_EMAIL` | Sender address for transactional contact notifications. | Optional | Server-only | `inquiry@uzairahmad.com` | `src/lib/contact/` |
| `CONTACT_TO_EMAIL` | Recipient address receiving contact inquiries. | Optional | Server-only | `imuzairahmad8@gmail.com` | `src/lib/contact/` |
| `GITHUB_TOKEN` | Optional Personal Access Token for GitHub API rate-limit expansion during sync CLI runs. | Optional | Local CLI only | `undefined` (Uses public endpoint / baseline cache) | `scripts/sync-projects.mjs` |
| `VERCEL_TOKEN` | Optional token for Vercel Deployments API during sync CLI runs. | Optional | Local CLI only | `undefined` (Uses baseline cache) | `scripts/sync-vercel.mjs` |
| `VERCEL_TEAM_ID` | Optional team scope identifier for Vercel API. | Optional | Local CLI only | `undefined` | `scripts/sync-vercel.mjs` |

---

## 2. Security Standards & Safeguards

- **Never Commit Secrets to Version Control:** `.env` and `.env.local` are strictly ignored by `.gitignore`.
- **Safe Placeholders in `.env.example`:** The committed `.env.example` file contains only empty strings and non-sensitive public placeholders.
- **Client Script Isolation:** Variables without the `PUBLIC_` prefix are never exposed to browser bundles by Astro's build compiler.
- **Zero Exposed Tokens In Dist:** Automated QA tests (`tests/unit/production-qa.test.ts`) assert that all generated JS chunks in `dist/_astro/` are 100% free of token prefixes (`ghp_`, `vercel_`, `postgres://`).
