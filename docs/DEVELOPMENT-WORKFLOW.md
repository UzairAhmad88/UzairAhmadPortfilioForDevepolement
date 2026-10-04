# Engineering Development Workflow & Lifecycle

**Project:** Personal Developer Portfolio / Personal Engineering & Research Platform  
**Phase:** 34 — Final Engineering Documentation & Maintainability System  
**Tooling Baseline:** Node.js v20+, npm, Astro 4.16.18, TypeScript 5.7.3  

---

## 1. Local Development Lifecycle

```text
┌─────────────────────────────────────────────────────────────────────────────┐
│                       LOCAL ENGINEERING LIFECYCLE                           │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  1. Clone & Setup          git clone <repo> && npm install                  │
│            ↓                                                                │
│  2. Start Dev Server       npm run dev (http://localhost:4321)              │
│            ↓                                                                │
│  3. Author & Implement     Edit files in src/data, src/components, src/lib  │
│            ↓                                                                │
│  4. Type Check             npm run check (astro check)                      │
│            ↓                                                                │
│  5. Automated Testing      npm test (node:test across 45 suites)            │
│            ↓                                                                │
│  6. Production Build       npm run build (astro build -> dist/)             │
│            ↓                                                                │
│  7. Local Preview          npm run preview                                  │
│            ↓                                                                │
│  8. Commit & Push          git commit -> push main -> Vercel Edge Deploy    │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Quickstart Instructions

```bash
# 1. Clone the repository
git clone https://github.com/UzairAhmad88/UzairAhmadPortfilioForDevepolement.git
cd UzairAhmadPortfilioForDevepolement

# 2. Install dependencies cleanly
npm install

# 3. Copy environment configuration
cp .env.example .env

# 4. Run local development server
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) to explore the live local platform.

---

## 3. Quality Assurance Pipeline Commands

Before pushing any changes or opening a pull request, run the standard quality verification gate:

```bash
# Step 1: Check TypeScript and Astro template types
npm run check

# Step 2: Run all 244 automated unit tests
npm test

# Step 3: Compile production static assets
npm run build
```

---

## 4. Git Branching & Commit Conventions

- **Branch Strategy:** Mainline trunk development (`main`). Feature branches (`feat/name`, `fix/issue`, `docs/update`) are used for multi-step tasks.
- **Commit Messages:** Follow Conventional Commits format:
  - `feat(scope): add new research dossier`
  - `fix(scope): resolve mobile drawer escape key listener`
  - `docs(scope): update route catalog in routes reference`
  - `refactor(scope): streamline knowledge engine graph builder`
  - `test(scope): add assertions for new technology mappings`
