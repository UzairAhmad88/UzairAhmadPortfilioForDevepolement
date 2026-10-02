# Developer Onboarding & Engineering Manual

**Project**: Uzair Ahmad Personal Professional Website  
**Technology Stack**: Astro 5 (Static Site Generation), TypeScript, CSS Modules / Custom Properties, Node.js  
**Last Updated**: October 2026  

---

## 1. Prerequisites
- **Node.js**: `v18.17.0` or `v20.x` LTS recommended.
- **Package Manager**: `npm` (v9+) or `pnpm`.
- **Git**: Configured with user credentials.
- **VS Code** with *Astro* and *TypeScript* extensions.

---

## 2. Repository Setup & Installation
Clone the repository and install all dependencies:
```bash
git clone https://github.com/UzairAhmad88/UzairAhmadPortfilioForDevepolement.git
cd UzairAhmadPortfilioForDevepolement
npm install
```

---

## 3. Environment Configuration
Copy the example environment configuration:
```bash
cp .env.example .env
```
Key variables:
- `PUBLIC_SITE_URL`: `https://uzairahmad.vercel.app` (default production URL).
- `CONTACT_EMAIL_TO`: Recipient inbox (`imuzairahmad8@gmail.com`).
- `CONTACT_EMAIL_FROM`: Verified transactional sender.

---

## 4. Local Development Server
Start the development server with live reload:
```bash
npm run dev
```
Open `http://localhost:4321` in your browser.

---

## 5. Directory Structure & Key Files
```text
├── src/
│   ├── components/       # Reusable UI components (cards, layout, navigation, seo)
│   ├── data/             # Strongly-typed data collections (projects, research, site, skills)
│   ├── layouts/          # Base HTML layout and SEO shell (BaseLayout.astro)
│   ├── lib/              # Utility helpers (analytics, contact, seo schema)
│   ├── pages/            # Astro file-based routing
│   ├── styles/           # Design system tokens and global CSS variables
│   └── types/            # TypeScript interface definitions
├── tests/                # Unit test suites (node:test)
├── public/               # Static assets (favicons, robots.txt)
└── docs/                 # Production architecture and maintenance documentation
```

---

## 6. How to Add a New Project
1. Open `src/data/projects.ts`.
2. Add a new `Project` object adhering to the `Project` interface in `src/types/project.ts`.
3. Provide all required fields: `id`, `slug`, `title`, `category`, `problem`, `solution`, `technologies`, and structured `caseStudy` object.
4. Run `npm test` to verify data relationships and slugs.

---

## 7. How to Add a New Research Inquiry
1. Open `src/data/research.ts`.
2. Append a new `ResearchItem` object adhering to `src/types/research.ts`.
3. Ensure you provide: `question`, `hypothesis`, `methodology`, `mathematicalFormulation`, `findings`, and authentic `references`.
4. Bidirectionally link related project slugs in `relatedProjects`.

---

## 8. Updating Site Profile or Contact Methods
- Edit `src/data/site.ts` to update the name, headline, bio, or social links.
- Edit `src/data/navigation.ts` to modify top-level navbar links.

---

## 9. Running Automated Tests & Diagnostics
Execute the complete test suite:
```bash
npm test
```
Run the full Astro type checker:
```bash
npm run check
```

---

## 10. Building for Production
Generate the static production build:
```bash
npm run build
```
Verify generated output in `dist/` with preview server:
```bash
npm run preview
```

---

## 11. Continuous Integration (CI)
The project includes a GitHub Actions workflow (`.github/workflows/ci.yml`) that automatically runs on every push and pull request to `main`:
1. `npm test`
2. `npx astro check`
3. `npm run build`

---

## 12. Deployment Workflow
- The repository is connected to **Vercel** with automated Git deployments.
- Pushes to `main` trigger a production deployment after all CI checks pass.
- HTTP security headers and caching are governed by `vercel.json`.
