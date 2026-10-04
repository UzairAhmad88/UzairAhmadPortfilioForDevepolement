# Local Development Setup & Workflow

## 1. Prerequisites

- **Node.js**: `v20.0.0` or higher (tested on Node.js v24 LTS).
- **npm**: `v10.0.0` or higher.
- **Git**: For version control.

---

## 2. Installation & Quickstart

```bash
# 1. Clone the repository
git clone https://github.com/UzairAhmad88/UzairAhmadPortfilioForDevepolement.git
cd UzairAhmadPortfilioForDevepolement

# 2. Install dependencies
npm install

# 3. Setup local environment file (optional for local mock mode)
cp .env.example .env

# 4. Start the local Astro development server
npm run dev
```

Visit `http://localhost:4321` in your browser. Hot Module Replacement (HMR) is active.

---

## 3. Daily Verification Commands

```bash
# TypeScript & Astro diagnostic typecheck
npm run check

# Execute complete unit test suite
npm test

# Build and verify static generation
npm run build

# Preview static build
npm run preview
```
