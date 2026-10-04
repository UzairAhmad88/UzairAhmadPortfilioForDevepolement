# Environment Variables & Configuration

## 1. Safety & Secret Isolation Standard

All environment variables used for local development and build-time synchronization are defined with safe placeholders in `.env.example`. **Real secrets are NEVER committed to version control.**

---

## 2. Environment Variables Catalog

| Variable Name | Purpose | Required / Optional | Scope | Example Placeholder |
|:---|:---|:---:|:---|:---|
| `PUBLIC_SITE_URL` | Canonical site origin for SEO & OpenGraph | Optional (Default fallback provided) | Build-time | `https://uzair-ahmad-portfilio-for-devepolem.vercel.app` |
| `GITHUB_TOKEN` | Optional GitHub API token for extended rate limits during sync scripts | Optional | Scripts only | `<your-github-pat>` |
| `VERCEL_TOKEN` | Optional Vercel API token for automated deployment sync | Optional | Scripts only | `<your-vercel-token>` |
| `CONTACT_FORM_ENDPOINT` | Optional webhook endpoint for contact form submissions | Optional | Client/Build | `https://api.example.com/contact` |

---

## 3. Local Configuration Setup

```bash
# Copy template to local .env
cp .env.example .env
```
