# Long-Term Maintenance & Reliability Plan

**Project**: Uzair Ahmad Personal Professional Website  
**Domain**: `uzairahmad.vercel.app`  
**Philosophy**: Minimal Operational Overhead with High Reliability  

---

## Maintenance Cadence

### 1. Weekly / As-Needed Tasks
- **Contact Inbox Monitoring**: Check `imuzairahmad8@gmail.com` for inbound client, recruiter, and collaborator inquiries.
- **Incident Response**: Address any reported form delivery failures or downtime notifications.

---

### 2. Monthly Tasks
- **Broken Link Verification**: Audit external links (GitHub repos, paper DOIs, LinkedIn) to ensure no dead outbound links.
- **Vercel Deployment Health**: Review Vercel analytics, bandwidth usage, and edge function metrics.
- **Form Spam Inspection**: Verify honeypot bot trap effectiveness and confirm zero legitimate inquiries were flagged.

---

### 3. Quarterly Tasks
- **Dependency Audit & Security Update**:
  - Run `npm audit` to identify any CVEs in development dependencies.
  - Test and update Astro minor versions and core plugins (`@astrojs/sitemap`).
  - Run full test suite (`npm test`) and type check (`npm run check`) prior to committing.
- **Content & Project Status Review**:
  - Update timelines and milestone progress on active research inquiries.
  - Review academic/FYP project status and transition completed milestones.
- **Core Web Vitals Spot-Check**: Measure LCP, CLS, and INP metrics using PageSpeed Insights.

---

### 4. Annual Tasks
- **Domain & DNS Renewal**: Verify apex domain registration, SSL certificate auto-renewal, and DNS routing.
- **Architecture & Tooling Review**: Assess whether Astro major updates or new web standards warrant non-breaking refactoring.
- **Design System Polish**: Review visual consistency, typography scaling, and dark-theme contrast against evolving WCAG recommendations.
- **Security & Privacy Posture Audit**: Ensure no legacy API tokens or outdated credentials exist in preview environments.

---

## Prohibited Maintenance Anti-Patterns
- ❌ Do NOT run automated weekly `npm update` on major dependencies without manual regression testing.
- ❌ Do NOT add complex database migration scripts for static content collections.
- ❌ Do NOT introduce external SaaS CMS dependencies that can become single points of failure.
