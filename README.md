# Uzair Ahmad — 3D Interactive Personal Portfolio

A production-oriented starter architecture for a 3D personal portfolio representing **software development, web development, AI/ML/DL, quantitative finance, time series, research, technical documentation and writing**.

## Vision

This is designed as a **Digital Laboratory** rather than a conventional résumé site. The experience should answer five questions: who I am, what I build, how I think, what I am learning, and where I am going.

The visual direction is inspired by the supplied Pinterest reference for atmosphere, imagery and color relationships, while the interaction philosophy is inspired by **Spline**: interactive 3D, spatial storytelling, smooth motion and object-driven exploration. Do not clone external designs; maintain an original identity.

## Current project map

- `src/app/` — Next.js application shell and page composition.
- `src/components/` — UI sections: navigation, hero, 3D area, skills, journey, projects and contact.
- `src/data/` — structured portfolio/project data.
- `src/content/projects/` — future Markdown/MDX case studies.
- `src/styles/` — global visual system and responsive styling.
- `docs/` — product, UX, architecture, 3D, performance, accessibility, testing, content and deployment documentation.
- `public/assets/` — optimized images, icons and 3D assets.
- `tests/` — unit and end-to-end test space.
- `static-export/` — standalone HTML, CSS, JavaScript and preview screenshots generated from the local `D:\web\protfolio` build.

## Design system

### Mood
Dark, premium, soft, futuristic, technical, atmospheric and minimal.

### Color
Deep charcoal/black base, graphite panels, soft-white typography, muted gray secondary text and a restrained accent. Avoid excessive neon or competing accent colors.

### Typography
Use a strong geometric/sans display face, readable sans body face and monospace selectively for technical metadata.

### Motion
Motion is purposeful: enter → discover → interact → explore → transition. Avoid constant spinning, excessive particles or animation that reduces readability.

## Information architecture

1. Home / Hero
2. About
3. Skills
4. Learning Journey
5. Projects
6. AI / ML / Deep Learning
7. Quantitative Finance
8. Time Series
9. Research
10. Technical Documentation
11. Writing / Book
12. GitHub
13. Résumé
14. Contact

Some areas may be immersive sections rather than separate routes.

## Project portfolio

### HMS
Healthcare Management System. Present as a full engineering case study: requirements → architecture → database/data model → API/UI → implementation → testing → lessons → future work.

### Curespare
Present as a product/software case study covering problem, users, requirements, design, architecture, implementation, testing, results and future improvements.

### AI Analytics
Show data → cleaning → exploration → feature engineering → model → evaluation → visualization → insights.

### CNN
Show dataset → preprocessing → convolution/pooling → architecture → training → validation → evaluation → prediction.

### RNN
Show sequential data → windowing → sequence creation → recurrent architecture → training → forecasting/evaluation. This should connect naturally to financial time-series interests.

### Quantitative Finance
Create a growing research/learning area for probability, statistics, stochastic processes, time series, Monte Carlo simulation, option pricing, risk-neutral valuation and yield-curve dynamics. Mark unfinished topics as learning/research rather than completed expertise.

## Content rules

Never use arbitrary skill percentages such as “Python 95%.” Prefer relationships, project evidence and demonstrated capabilities.

Every major project should eventually contain:

- Overview
- Problem
- Motivation
- Requirements
- Architecture
- Technology
- Implementation
- Challenges
- Testing
- Results
- Learning
- Future improvements
- GitHub
- Demo, when available
- Documentation

## 3D strategy

The 3D layer is a storytelling and identity layer, not decoration for its own sake.

### Proposed scenes

- Hero: Knowledge Core
- Skills: Technical constellation
- Projects: Interactive project environment
- Quant: Mathematical/financial visualization
- Contact: Minimal closing scene

### Interactions

Hover, click, drag, scroll, cursor proximity and scene/state transitions may be used where they provide meaning.

### Spline integration

Set `NEXT_PUBLIC_SPLINE_SCENE_URL` in `.env.local` after obtaining the actual Spline scene URL. The current starter keeps a safe fallback until the scene is configured.

## Architecture

```text
Browser
  │
  ├── Next.js / React UI
  │      ├── Navigation
  │      ├── Content Sections
  │      ├── Project Case Studies
  │      └── Responsive UI
  │
  ├── 3D Layer
  │      └── Spline / Three.js
  │
  ├── Motion Layer
  │      └── Framer Motion / future GSAP where justified
  │
  └── Content Layer
         ├── Structured project data
         └── Markdown / MDX documentation
```

## Recommended development workflow

```text
Research
  ↓
Content model
  ↓
Wireframe / visual direction
  ↓
Design system
  ↓
Responsive component implementation
  ↓
3D scene integration
  ↓
Project case studies
  ↓
Testing
  ↓
Accessibility
  ↓
Performance
  ↓
SEO
  ↓
Production deployment
```

Build responsiveness alongside every new feature. Do not postpone mobile support until the end.

## Local development

Requirements: Node.js LTS and npm.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`.

Before production:

```bash
npm run lint
npm run test
npm run build
```

## Environment variables

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_GITHUB_USERNAME`
- `NEXT_PUBLIC_EMAIL`
- `NEXT_PUBLIC_LINKEDIN_URL`
- `NEXT_PUBLIC_SPLINE_SCENE_URL`

Never commit secrets.

## Performance requirements

3D can be expensive. Use optimized geometry/textures, lazy loading, dynamic imports, code splitting, responsive scene complexity and a graceful 2D/content fallback. Test on low-powered mobile hardware, not only a development desktop.

## Accessibility requirements

- Semantic HTML
- Keyboard navigation
- Visible focus states
- Sufficient contrast
- Alt text for meaningful images
- Reduced-motion support
- Accessible buttons and links
- 3D must not be required to understand the portfolio

## SEO

Production should include title/description metadata, Open Graph metadata, canonical URLs, sitemap, robots.txt and structured data where useful. Personal identity should consistently use: **Uzair Ahmad — Software Developer · AI/ML/DL · Quantitative Finance**.

## Testing strategy

### Unit
Test utility functions, data transformations and isolated components.

### Integration
Test navigation, project data rendering, links and interactive sections.

### End-to-end
Test the critical journey:

```text
Landing → Navigation → Projects → Case Study → GitHub → Contact
```

### Visual / responsive
Check desktop, tablet and mobile layouts; 3D fallback; reduced motion; typography; spacing; loading and error states.

## Git workflow

Suggested branches:

- `main`
- `develop`
- `feature/hero`
- `feature/3d`
- `feature/projects`
- `feature/skills`
- `feature/contact`

Use meaningful commits such as `feat: add interactive hero scene`, `fix: optimize mobile 3d rendering`, `docs: add architecture documentation`.

## Deployment

```text
Local → Git → GitHub → CI/Build → Hosting → Production
```

The final hosting provider can be selected during deployment. Production must use HTTPS and verified environment variables.

## Documentation roadmap

The `docs/` directory is intentionally included so the portfolio itself demonstrates documentation discipline. Expand these files as implementation progresses:

- `product.md`
- `design.md`
- `architecture.md`
- `development.md`
- `3d.md`
- `accessibility.md`
- `performance.md`
- `testing.md`
- `deployment.md`
- `content.md`

## Important content accuracy rule

Only publish projects, technologies, achievements, links and research claims that can be verified from the owner's actual work. Placeholder contact/GitHub values in this starter must be replaced before deployment.

## Long-term identity

The portfolio should communicate:

> **I am not defined by a single technology. I build software, study intelligent systems, explore mathematical models and quantitative finance, and document what I learn.**

The objective is not to create the website with the most effects. The objective is to create the most authentic digital representation of the person behind the work.
