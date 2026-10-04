# Environment Variable & Security Audit

> **Platform:** Uzair Ahmad — Personal Engineering & Research Platform  
> **Phase:** Final System Integration & Production Freeze  
> **Security Clearance:** Zero secret leaks in client bundles, safe defaults for all variables.

---

## 1. Environment Variable Inventory

| Variable Name | Purpose | Required? | Scope | Used By | Safe Example Value |
|---|---|---|---|---|---|
| `PUBLIC_SITE_URL` | Canonical origin URL for SEO canonical tags, sitemaps, and Open Graph metadata | Optional (Defaults to `https://uzairahmad.vercel.app`) | Public (Build-time) | `astro.config.mjs`, `src/lib/seo/metadata.ts` | `https://uzairahmad.vercel.app` |
| `RESEND_API_KEY` | Transactional email provider API key for serverless contact form delivery | Optional (Fallback to direct mailto/WhatsApp if omitted) | Server-only (Private) | `api/contact.ts`, Serverless Function | `re_123456789abcdef` *(Never commit)* |
| `CONTACT_FROM_EMAIL` | Sender email address for contact notification routing | Optional | Server-only | `api/contact.ts` | `inquiry@uzairahmad.com` |
| `CONTACT_TO_EMAIL` | Destination inbox for incoming contact form inquiries | Optional | Server-only | `api/contact.ts` | `inbox@example.com` |
| `GITHUB_TOKEN` | Personal Access Token for optional GitHub repository sync script | Optional (Sync script only) | CLI / Dev-only | `scripts/sync-projects.mjs` | `ghp_xxxxxxxxxxxx` *(Never commit)* |
| `VERCEL_TOKEN` | Access Token for optional Vercel deployment sync script | Optional (Sync script only) | CLI / Dev-only | `scripts/sync-vercel.mjs` | `vercel_xxxxxxxx` *(Never commit)* |

---

## 2. Security Verification & Bundle Isolation

1. **Client-Side Bundle Scan:** All client-side JavaScript assets generated in `dist/_astro/` have been audited. Zero server environment variables, tokens, or private emails are embedded in client scripts.
2. **Git Repository Scan:** `.env` files are strictly ignored by `.gitignore`. Only `.env.example` with blank placeholder values is tracked.
3. **Graceful Fallbacks:** If zero environment variables are configured in the deployment environment, the site still builds and deploys 100% successfully as a high-performance static website with static contact links (`mailto:` and `https://wa.me/`).
