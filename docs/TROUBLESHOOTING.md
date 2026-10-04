# Troubleshooting & Remediation Guide

**Project:** Personal Developer Portfolio / Personal Engineering & Research Platform  
**Phase:** 34 — Final Engineering Documentation & Maintainability System  
**Coverage:** Real, Observed Engineering Issues and Solutions  

---

## 1. Build & Type Checking Issues

### 1.1 `astro check` Reports Type Errors on Data Files
- **Problem:** `astro check` fails after modifying a project or research item in `src/data/`.
- **Root Cause:** A required field in the domain interface (`src/types/project.ts` or `src/types/research.ts`) was omitted or typed incorrectly (e.g. `technologies` array containing non-canonical string).
- **Detection:** Run `npm run check` in the terminal to view file and line numbers.
- **Fix:** Cross-reference `src/types/` for the entity and provide the missing property or correct the type.
- **Prevention:** Always review TypeScript interfaces before adding new content fields.

### 1.2 Unit Tests Fail with Dangling Entity Reference
- **Problem:** `npm test` fails in `tests/unit/projects.test.ts` or `tests/unit/research.test.ts`.
- **Root Cause:** A project references a technology slug or research ID that does not exist in the respective registry (`src/data/technologies.ts` or `src/data/research.ts`).
- **Detection:** `AssertionError: Project {id} references unknown technology {tech}`.
- **Fix:** Add the canonical technology to `src/data/technologies.ts` or correct the slug in `src/data/projects.ts`.
- **Prevention:** Use constants or verify registered IDs before adding cross-references.

---

## 2. Presentation & Responsive Issues

### 2.1 Code Block Causing Mobile Horizontal Overflow
- **Problem:** Long code lines force the entire page to expand horizontally on mobile viewports (< 375px).
- **Root Cause:** The `<pre>` container was missing `max-width: 100%` or `overflow-x: auto`.
- **Detection:** Observe page shaking or horizontal scrollbar on mobile devtools.
- **Fix:** Ensure `<pre>` styles declare `overflow-x: auto; max-width: 100%; white-space: pre;` (configured in `src/styles/global.css`).
- **Prevention:** Use the centralized code block styling rules defined in `global.css`.

### 2.2 Flash of Unstyled Content (FOUC) on Light Theme
- **Problem:** When a user with light theme preference loads a page, it flashes dark before switching to light.
- **Root Cause:** Theme initialization script ran after DOM rendering (`defer` or `type="module"`).
- **Detection:** Visual flicker during page reload with `localStorage.theme = 'light'`.
- **Fix:** Ensure the theme script is inlined synchronously in the `<head>` of `BaseLayout.astro` before any stylesheets or DOM elements.
- **Prevention:** Never move the theme initialization script out of `<head>`.

---

## 3. Operations & Synchronization Issues

### 3.1 GitHub API Rate Limiting (HTTP 403) During Sync
- **Problem:** Running `npm run github:sync` fails or prints rate-limit warnings.
- **Root Cause:** GitHub public API rate limit (60 requests/hr per IP) was exceeded.
- **Detection:** Console output: `GitHub API rate limit exceeded. Falling back to cached baseline.`
- **Fix:** Either set a local `GITHUB_TOKEN` in `.env` or rely on the committed baseline cache in `src/lib/github/baseline-cache.ts`.
- **Prevention:** Use `--dry-run` during routine testing to avoid burning API requests.

### 3.2 Contact Form Submission Blocked
- **Problem:** Contact form submission fails or triggers client error.
- **Root Cause:** Honeypot field (`_gotcha`) was filled by an autofill password manager, or the email address did not match standard RFC 5322 regex format.
- **Detection:** Form displays validation message: "Please provide a valid email address".
- **Fix:** Clear browser autofill on hidden fields and ensure a valid email string is entered.
- **Prevention:** Honeypot input has `autocomplete="off"` and `tabindex="-1"` to prevent autofill interception.
