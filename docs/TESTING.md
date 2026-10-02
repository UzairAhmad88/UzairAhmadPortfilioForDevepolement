# Testing Strategy & Foundation

## 1. Testing Philosophy
Phase 01 establishes testing infrastructure for domain validation, canonical SEO metadata generation, and build verification.

---

## 2. Test Architecture

### 1. Unit Tests (`tests/unit/`)
- Tests core pure utility functions:
  - Canonical URL calculation (`getCanonicalUrl`).
  - Open Graph and Twitter metadata builder (`buildMetadata`).
  - Schema.org JSON-LD generation (`getPersonSchema`, `getWebSiteSchema`).
- Executable via Node test runner:
  ```bash
  npm test
  ```

### 2. Integration / Type Checking
- Astro & TypeScript type check:
  ```bash
  npm run check
  ```
  Ensures all component props, data models, and layouts strictly adhere to declared interfaces.

### 3. Build & Static Output Validation
- Compiles the entire site into static HTML:
  ```bash
  npm run build
  ```
  Validates that every route renders valid HTML with no broken imports.

---

## 3. Future Testing Scope (Phase 09 Roadmap)
- End-to-End (E2E) visual regression testing via Playwright.
- Automated Lighthouse CI scoring within GitHub Actions.
- Broken link crawler testing across all project links.
