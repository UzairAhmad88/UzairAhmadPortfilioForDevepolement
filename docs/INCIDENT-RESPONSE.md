# Incident Response Playbook

This document defines standard recovery procedures for operational anomalies on the personal portfolio website.

## 1. Scenario Playbooks

### Scenario A: Form Submission Endpoint Failure
1. **Symptom**: User receives network error or submission fails on `/contact`.
2. **Immediate Mitigation**: The contact page clearly displays direct email (`imuzairahmad8@gmail.com`), LinkedIn, and WhatsApp channel cards.
3. **Resolution**: Verify transactional provider API status or rotate provider token in Vercel project settings.

### Scenario B: Accidental Secret Exposure in Commit
1. **Symptom**: Token or secret inadvertently committed to Git history.
2. **Immediate Action**: Immediately invalidate/rotate the exposed token at the provider console.
3. **Remediation**: Remove the secret from Git via `git filter-repo` or clean commit amendment, then force-push.

### Scenario C: Broken Route / 404 Spike
1. **Symptom**: Inbound links pointing to obsolete URL.
2. **Resolution**: Add 301 redirect entry in `vercel.json` or Astro redirect config mapping old path to canonical route.
