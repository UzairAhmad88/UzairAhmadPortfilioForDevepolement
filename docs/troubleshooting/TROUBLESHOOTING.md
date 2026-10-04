# Troubleshooting & Diagnostic Guide

**Document Identifier:** `OPS-003`  
**Classification:** Canonical Engineering Specification  
**Status:** Active & Verified  
**Scope:** Real-world Failure Modes, Root Cause Analyses, Diagnostic Procedures & Remediations  

---

## 1. Quick Diagnostic Flowchart

When encountering unexpected behavior, follow this systematic resolution tree:

```
[Issue Encountered]
        |
        +---> Build / Type Error? -----------> See Section 2: TypeScript & Astro Compiler Issues
        |
        +---> Broken Route / Link (404)? ----> See Section 3: Static Routing & Hydration Failures
        |
        +---> Theme Glitch / FOUC? ----------> See Section 4: Styling & Theme Engine Failures
        |
        +---> Search / Discovery Empty? -----> See Section 5: Discovery Engine & Data Layer
        |
        +---> Vercel Deployment Failure? ----> See Section 6: Edge & Deployment Failures
```

---

## 2. TypeScript & Astro Compiler Issues

### Issue 2.1: `Cannot find module '../data/...' or type declarations`
* **Symptoms:** `npm run check` or `npm run build` fails with `TS2307: Cannot find module` or `TS2305: Module has no exported member`.
* **Root Cause:** Path aliases (`@data/*`, `@components/*`) misconfigured or relative file paths broken during refactoring.
* **Remediation:**
  1. Verify path aliases in `tsconfig.json` match `compilerOptions.paths`.
  2. If using relative imports, check exact relative depth (`../../data/projects.ts` vs `../data/projects.ts`).
  3. Ensure all exported data structures have matching TypeScript interfaces in `src/types/`.

### Issue 2.2: `Astro component type mismatch in props`
* **Symptoms:** `astro check` errors out stating `Property 'experiment' does not exist on type 'Props'`.
* **Root Cause:** Astro component `interface Props` does not match the actual data shape being passed by the parent page.
* **Remediation:**
  1. Inspect the component's frontmatter:
     ```astro
     ---
     import type { LabExperiment } from '../../types/lab';
     interface Props {
       experiment: LabExperiment;
     }
     const { experiment } = Astro.props;
     ---
     ```
  2. Verify that optional properties (`evidence?: VisualArtifact[]`) have default fallbacks or safe optional chaining (`experiment.evidence?.length`).

---

## 3. Static Routing & Hydration Failures

### Issue 3.1: Dynamic Sub-route Returns 404 in Production
* **Symptoms:** `/lab/neural-viz/` works in `npm run dev` but returns 404 on Vercel or in `npm run preview`.
* **Root Cause:** Missing `getStaticPaths()` entry or trailing slash mismatch.
* **Remediation:**
  1. Ensure every dynamic route `[slug].astro` exports `getStaticPaths`:
     ```typescript
     export async function getStaticPaths() {
       return labExperiments.map((experiment) => ({
         params: { slug: experiment.slug },
         props: { experiment },
       }));
     }
     ```
  2. Verify Astro configuration `trailingSlash` setting in `astro.config.mjs` matches deployment routing rules (`'always'` vs `'never'`).

### Issue 3.2: Dynamic Sub-tab Navigator Not Switching View
* **Symptoms:** Clicking "Hypothesis" or "Evidence" tabs on a project detail page does not change active card.
* **Root Cause:** Client-side event listener failed to attach due to DOM ready race condition.
* **Remediation:**
  1. Ensure client scripts in `.astro` files use `DOMContentLoaded` or inline initialization immediately after the element.
  2. Ensure tab buttons have matching `data-tab-target` attributes corresponding to `data-tab-content` container IDs.

---

## 4. Styling & Theme Engine Failures

### Issue 4.1: Flash of Unstyled Content (FOUC) or Flash of Wrong Theme
* **Symptoms:** Brief white flash when loading the page in dark mode.
* **Root Cause:** Theme initialization script placed after stylesheets or inside an asynchronous script tag.
* **Remediation:**
  1. Ensure the theme detection script is placed synchronously in the `<head>` of `src/layouts/BaseLayout.astro` before any CSS stylesheets:
     ```html
     <script is:inline>
       const saved = localStorage.getItem('theme');
       const pref = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
       const theme = saved || pref;
       document.documentElement.setAttribute('data-theme', theme);
     </script>
     ```
  2. Confirm `is:inline` directive is present so Astro does not bundle or defer execution.

### Issue 4.2: CSS Variable Not Resolving in Custom Component
* **Symptoms:** Background or border renders transparent or fallback black.
* **Root Cause:** Misspelled design token name or missing token definition in `src/styles/tokens.css`.
* **Remediation:**
  1. Check token definition in `src/styles/tokens.css` under `:root` and `[data-theme="dark"]`.
  2. Replace ad-hoc colors with verified semantic tokens (`var(--color-bg-surface)`, `var(--color-border-subtle)`).

---

## 5. Discovery Engine & Data Layer

### Issue 5.1: Search Bar Returns 0 Results for Known Project/Lab Title
* **Symptoms:** Typing "Neural" in `/discovery/` yields "No records matching query".
* **Root Cause:** The search index data array does not include the entity or the search tokenizer stripped special characters.
* **Remediation:**
  1. Verify the entity exists in its source file (`src/data/lab.ts`, `src/data/projects.ts`).
  2. Verify that `src/data/discovery.ts` (or the compile-time search builder) aggregates items from all canonical sources.
  3. Run node test suite:
     ```bash
     npm test
     ```
     Inspect output from `tests/unit/discovery-search.test.mjs`.

### Issue 5.2: Knowledge Graph Shows Disconnected / Orphan Nodes
* **Symptoms:** Node exists on `/knowledge/` visualizer but has 0 connecting edges.
* **Root Cause:** Cross-reference ID mismatch (e.g. `techId: "react"` used in project, but technology defined as `id: "reactjs"`).
* **Remediation:**
  1. Check canonical IDs in `src/data/technologies.ts`.
  2. Run `tests/unit/knowledge-graph-topology.test.mjs` to automatically list all unlinked references and orphaned node IDs.

---

## 6. Edge & Deployment Failures

### Issue 6.1: Vercel Build Fails with `Command "npm run build" exited with 1`
* **Symptoms:** Deployment aborted in Vercel dashboard.
* **Root Cause:** Build step caught a compilation error, unclosed tag, or missing static asset that dev server tolerated.
* **Remediation:**
  1. Run exact production build locally:
     ```bash
     npm run build
     ```
  2. If local build succeeds, verify Node.js version parity: Ensure Vercel project settings use **Node.js 20.x or 22.x**.
  3. Check build logs for unhandled Promise rejections or missing static images in `/public/images/`.

### Issue 6.2: Local Development Server Port 4321 Busy
* **Symptoms:** `npm run dev` outputs `Port 4321 is in use, trying 4322...` or throws `EADDRINUSE`.
* **Root Cause:** Previous background Astro dev server instance still running.
* **Remediation:**
  ```powershell
  # Windows PowerShell: Find and terminate process on port 4321
  Get-Process -Id (Get-NetTCPConnection -LocalPort 4321).OwningProcess | Stop-Process -Force
  ```
