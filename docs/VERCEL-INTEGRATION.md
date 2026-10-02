# Vercel Deployment Verification Architecture

**Project**: Uzair Ahmad Personal Professional Website  
**Vercel Profile**: [vercel.com/imuzairahmad8-6603s-projects](https://vercel.com/imuzairahmad8-6603s-projects)  
**Primary Principle**: *Vercel is Deployment Evidence. The Public Production URL is the Visitor Experience.*  

---

## 1. Overview
The Vercel integration captures verified live deployment evidence for published portfolio projects.

**Core Rules**:
1. **Public URL Priority**: Public visitors are directed to verified live URLs (e.g. `https://uzairahmad.vercel.app`), never to internal Vercel dashboard management pages.
2. **Preview vs Production**: Failed or transient preview builds are never displayed as active production deployments.
3. **Graceful Fallback**: Projects without a live Vercel deployment cleanly display "View Source Code on GitHub" with zero empty or disabled "Live Demo" buttons.

---

## 2. Verified Deployments Registry (`src/lib/vercel/index.ts`)

| Portfolio Slug | Vercel Project | Verified Live URL | Matched GitHub Repo | Deployment Status |
| :--- | :--- | :--- | :--- | :--- |
| `portfolio-website` | `uzairahmad` | `https://uzairahmad.vercel.app` | `UzairAhmad88/UzairAhmadPortfilioForDevepolement` | **READY (Production)** |
| `curasphere-hms` | `curasphere-hms` | `https://vercel.com/imuzairahmad8-6603s-projects` | `UzairAhmad88/-CuraSphere-HMS-DevelopbyUzaii` | **READY (Demo/Preview)** |

---

## 3. GitHub $\leftrightarrow$ Vercel $\leftrightarrow$ Portfolio Matching Strategy
The matcher (`src/lib/vercel/index.ts`) connects projects across three dimensions:
1. **GitHub Repository Name**: Evaluated against Vercel git integration links.
2. **Project Slug**: Alphanumeric matching between portfolio slug and Vercel project name.
3. **Manual Mapping Registry**: Explicit mapping overrides for non-standard repository name conventions.
