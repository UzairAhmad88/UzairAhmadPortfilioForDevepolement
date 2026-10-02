# Environment Configuration

## 1. Supported Environments
- **Local Development**: Node.js v20+, npm v10+
- **CI Environment**: Ubuntu latest, GitHub Actions
- **Production Hosting**: Vercel Edge Network

---

## 2. Environment Variables Reference

| Variable Name | Required | Default / Fallback | Description |
|---|---|---|---|
| `PUBLIC_SITE_URL` | No | `https://uzairahmad.vercel.app` | Canonical site URL used for sitemaps, canonical tags, and Open Graph. |
| `PUBLIC_SITE_NAME` | No | `Uzair Ahmad \| Quantitative AI & Product Engineer` | Default document title and branding name. |
| `PUBLIC_CONTACT_EMAIL` | No | `imuzairahmad8@gmail.com` | Primary contact email address. |
| `PUBLIC_GITHUB_URL` | No | `https://github.com/UzairAhmad88` | GitHub profile link. |
| `PUBLIC_LINKEDIN_URL` | No | `https://www.linkedin.com/in/uzair-ahmad-58007a266/` | LinkedIn profile link. |
| `PUBLIC_WHATSAPP_URL` | No | `https://wa.me/923103148117` | Direct WhatsApp chat link. |
| `PUBLIC_VERCEL_PROJECTS_URL` | No | `https://vercel.com/imuzairahmad8-6603s-projects` | Vercel deployed projects profile link. |

---

## 3. Local Setup
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```
Restart `npm run dev` after updating any environment variables.
