# Security Foundation & Best Practices

## 1. Secrets Management
- **Never commit `.env` files**: All local environment secrets and keys are strictly excluded via `.gitignore`.
- `.env.example` documents all expected environment variables without revealing private keys.
- Variables prefixed with `PUBLIC_` are intentionally exposed to the client bundle (e.g., public URLs, contact email); non-prefixed variables remain server-only.

---

## 2. External Links Security
All external links (GitHub, LinkedIn, WhatsApp, Vercel) include secure relationship attributes:
```html
target="_blank" rel="noreferrer"
```
This protects against tab-nabbing vulnerabilities and prevents the target page from accessing `window.opener`.

---

## 3. Recommended HTTP Security Headers (Vercel)
When deploying to Vercel, the following security headers can be attached via `vercel.json`:
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: camera=(), microphone=(), geolocation=()`

---

## 4. Dependencies & Supply Chain Security
- Regularly execute `npm audit` to identify vulnerabilities in build dependencies.
- Keep GitHub Dependabot enabled to receive automated dependency alerts.
