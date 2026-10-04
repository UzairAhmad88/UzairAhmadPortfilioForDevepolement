# Security Governance & Secret Isolation Policy

**Project:** Personal Developer Portfolio / Personal Engineering & Research Platform  
**Stage:** Post-Production Governance & Long-Term Stewardship  
**Scope:** Security Invariants, Secret Protection & Input Validation  

---

## 1. Core Security Invariants

All future platform maintenance must uphold these 6 security invariants:

1. **Zero Secrets in Source Control:** No API keys, private tokens, database credentials, or passwords may ever be committed to Git.
2. **Client Bundle Isolation:** Secrets or build-time tokens must never be referenced in client-side scripts or `.astro` component templates without the `PUBLIC_` scope prefix check.
3. **Strict Input Sanitization:** User inputs (e.g. Discovery search tokens, contact form inputs) must be sanitized against XSS and HTML injection before insertion into the DOM.
4. **Honeypot Form Protection:** Contact forms must maintain hidden anti-bot honeypot fields (`name="_gotcha"`).
5. **Safe Outbound Links:** All external hyperlinks must enforce `rel="noopener noreferrer"` and `target="_blank"`.
6. **Strict Transport Security (HSTS):** Enforce TLS 1.3 with subdomains preloaded in `vercel.json`.

---

## 2. Security Review Protocol for Future Changes

Whenever modifying forms, external APIs, build scripts, or HTTP headers:

```text
PROPOSED SECURITY-SENSITIVE CHANGE
                │
                ▼
1. Secret Audit (Scan for ghp_, vercel_, postgres://, api_key)
                │
                ▼
2. Client Bundle Audit (Verify dist/_astro/*.js contains 0 tokens)
                │
                ▼
3. Input Validation Review (Verify XSS escaping and length limits)
                │
                ▼
4. HTTP Headers Check (Verify HSTS, X-Frame-Options, nosniff in vercel.json)
                │
                ▼
5. Automated Test Pass (Run tests/unit/production-qa.test.ts)
```

---

## 3. Vulnerability Reporting & Response

If a security vulnerability or exposed key is detected:
1. **Immediate Revocation:** Revoke the exposed API token or credential immediately in the provider dashboard (GitHub, Vercel, Resend).
2. **Repository Purge:** Clean Git commit history using `git-filter-repo` if a sensitive value was committed.
3. **Deploy Hotfix:** Push clean commit to `main` to trigger an instant Vercel edge deployment.
