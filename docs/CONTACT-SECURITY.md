# Contact Security & Secret Protection Architecture (Phase 22)

## 1. Threat Modeling & Safeguards

```text
┌─────────────────────────────────────────────────────────────┐
│ 1. Secret Protection & Zero Client Leakage                  │
│    API keys (RESEND_API_KEY) exist solely server-side.      │
├─────────────────────────────────────────────────────────────┤
│ 2. Email Header Injection Prevention                        │
│    All single-line fields (Name, Org, Subject) strip CRLF.  │
├─────────────────────────────────────────────────────────────┤
│ 3. Cross-Site Scripting (XSS) Prevention                    │
│    HTML tags stripped before formatting; safe escaping.     │
├─────────────────────────────────────────────────────────────┤
│ 4. Protocol & URL Injection Defense                         │
│    Non-HTTP/HTTPS schemes (javascript:, data:) rejected.    │
├─────────────────────────────────────────────────────────────┤
│ 5. HTTP Method & Rate Enforcement                           │
│    Strict POST-only routing with 405 Method Not Allowed.    │
└─────────────────────────────────────────────────────────────┘
```

---

## 2. Environment Variables & Secret Hygiene

All secrets are documented via [`.env.example`](file:///d:/web/protfolio/.env.example):
- `RESEND_API_KEY`: Serverless environment variable only.
- `CONTACT_FROM_EMAIL`: Configured sender email address.
- `CONTACT_TO_EMAIL`: Recipient inbox.

**Git Safety:** `.env`, `.env.local`, and `.env.production` are strictly tracked in `.gitignore`. Zero credentials exist in client bundles or public repositories.
