# Security Baseline & Hardening Certification

**Platform:** Uzair Ahmad — Personal Engineering & Research Platform  
**Audit Scope:** Environment Variables, Client-Side Bundles, Headers, Inbound Sanitization, External Links  

---

## 1. Zero Secret Leakage Certification
- [x] **Client Bundle Inspection:** Scanned client scripts (`dist/_astro/*.js`); zero API keys, GitHub tokens, or private environment variables are included in client code.
- [x] **Environment Variable Isolation:** Strict `PUBLIC_` prefix enforcement in `.env.example`. Private tokens (`GITHUB_TOKEN`, `VERCEL_TOKEN`, `EMAIL_PROVIDER_API_KEY`) are exclusively referenced in build scripts or serverless dispatch.
- [x] **`.gitignore` Hygiene:** Local `.env`, `node_modules/`, and `dist/` explicitly ignored.

---

## 2. Inbound Form Security & Sanitization
- **XSS Sanitization:** All inbound contact submissions are sanitized with HTML entity encoding and tag stripping (`src/lib/contact/validation.ts`).
- **Email Injection Defense:** Newline characters (`\r`, `\n`) are stripped from single-line fields (Name, Email, Subject) to prevent header injection.
- **Honeypot Bot Trap:** Hidden `_hp_company` field immediately rejects automated spam bots without processing.
- **Payload Size Limits:** Messages capped at 5,000 characters to prevent resource exhaustion.

---

## 3. HTTP Security Headers (`vercel.json`)
- **Strict-Transport-Security:** `max-age=63072000; includeSubDomains; preload`
- **X-Content-Type-Options:** `nosniff`
- **X-Frame-Options:** `DENY` (Clickjacking prevention)
- **X-XSS-Protection:** `1; mode=block`
- **Referrer-Policy:** `strict-origin-when-cross-origin`
- **Permissions-Policy:** Restricted camera, microphone, geolocation, and payment access.
- **External Links:** All external links enforce `target="_blank" rel="noopener noreferrer"`.
