# Incident Response & Outage Recovery Playbook

**Project:** Personal Developer Portfolio / Personal Engineering & Research Platform  
**Stage:** Post-Production Governance & Long-Term Stewardship  
**Scope:** Production Outage Recovery, Defect Remediation & Incident Post-Mortem  

---

## 1. Incident Response Lifecycle

```text
┌─────────────────────────────────────────────────────────────────────────────┐
│                        INCIDENT RESPONSE LIFECYCLE                          │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  1. Problem Detected       Alert / Monitoring / Manual Smoke Test           │
│            ↓                                                                │
│  2. Assess Severity        Classify as P0 (Critical) or P1 (High)           │
│            ↓                                                                │
│  3. Protect Production     Trigger Vercel Instant Rollback if live defect   │
│            ↓                                                                │
│  4. Diagnose Root Cause    Inspect build logs, git diff, or browser console │
│            ↓                                                                │
│  5. Implement Fix          Smallest correct patch on isolated branch        │
│            ↓                                                                │
│  6. Verify & QA            npm run check && npm test && npm run build       │
│            ↓                                                                │
│  7. Deploy & Smoke Test    Push to main -> Verify live production URL       │
│            ↓                                                                │
│  8. Document Post-Mortem   Record incident in CHANGELOG & docs/             │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Specific Scenario Playbooks

### 2.1 Scenario A: Production Build or Route 500 Outage (P0)
1. **Action:** Open Vercel Dashboard -> Deployments -> Select last healthy commit -> Click **Instant Rollback**.
2. **Diagnosis:** Run `astro build` locally to identify failing Astro template or broken dynamic `getStaticPaths()` parameter.
3. **Fix:** Correct the syntax or missing data field, test locally with `npm run preview`.
4. **Deploy:** Push fix to `main` to trigger clean automated redeployment.

### 2.2 Scenario B: Accidental Secret Exposure in Commit (P0)
1. **Immediate Revocation:** Invalidate/rotate the exposed token immediately at the provider dashboard (GitHub, Vercel, Resend).
2. **Git History Clean:** Purge the secret from local Git history using `git filter-repo` or amend recent commit before push.
3. **Audit:** Re-run `tests/unit/production-qa.test.ts` to assert zero secrets in client JS chunks.

### 2.3 Scenario C: Broken Inbound Route or 404 Spike (P1)
1. **Diagnosis:** Check server analytics or access logs for the 404 URL pattern.
2. **Mitigation:** Add a clean redirect entry in `vercel.json` or Astro redirect config mapping the legacy URL to the canonical destination.
3. **Verification:** Test HTTP 308 redirect behavior via curl or browser.

### 2.4 Scenario D: Contact Form Submission Failure (P2)
1. **Mitigation:** The contact page natively displays direct fallback channels (direct email `imuzairahmad8@gmail.com`, LinkedIn, and WhatsApp).
2. **Resolution:** Inspect transactional email API provider status or rotate API token in Vercel environment settings.
