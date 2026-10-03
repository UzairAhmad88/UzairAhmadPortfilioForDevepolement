# Vercel Deployment Evidence Integration

## 1. Evidence Chain Architecture

The platform supports a verified four-stage evidence chain:

```
Portfolio Project / Lab
        ↓
GitHub Repository (Source Code Evidence)
        ↓
Vercel Project (Hosting Configuration)
        ↓
Production / Preview Deployment (Live Verification)
```

Each link is verified by real metadata and human curation.

---

## 2. Integration Across Platform

### 2.1 Project Case Studies (`/work/[slug]`)
- Integrated in the sticky sidebar profile via [`src/components/vercel/VercelEvidenceBadge.astro`](file:///d:/web/protfolio/src/components/vercel/VercelEvidenceBadge.astro).
- Displays verified target (`Production` or `Preview`), state (`READY`), framework (`Astro`, `Next.js`), and verification date.

### 2.2 Research Investigations (`/research/[slug]`)
- Connects empirical research papers to deployed interactive dashboards or live demo runners.

### 2.3 Lab Experiments (`/lab/[slug]`)
- Displays `Experimental Demo` badge for prototype demonstrators (e.g., SSE orderbook feed).
