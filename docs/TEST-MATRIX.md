# End-to-End Test Matrix & Quality Verification

This document logs the automated and manual test matrix covering all key features, routes, accessibility requirements, and security configurations.

## 1. Test Execution Matrix

| Test Suite / Feature | Test Type | Environment | Expected Outcome | Actual Result | Status |
|---|---|---|---|---|---|
| **Canonical URL Logic** | Unit Test | Node.js Test Runner | Absolute URL without trailing slashes | Matches canonical standard | PASS |
| **Schema Generators** | Unit Test | Node.js Test Runner | Valid JSON-LD for Person, WebSite, Profile, Research, Project | 100% valid schema structure | PASS |
| **Contact Validation** | Unit Test | Node.js Test Runner | Rejects bot honeypots & invalid emails; sanitizes HTML | Strict validation passed | PASS |
| **Project Cross-Links** | Unit Test | Node.js Test Runner | All relatedProjects & relatedResearch resolve without 404 | All slugs resolved | PASS |
| **Analytics Event Builder**| Unit Test | Node.js Test Runner | Outputs sanitized event payloads without PII | PII-free payloads verified | PASS |
| **Astro Type Check** | Static Analysis | `@astrojs/check` | 0 type errors in `.astro` & `.ts` files | 0 errors | PASS |
| **Production Build** | Static Generation | Astro & Vite | 17 static HTML pages generated in `dist/` | 17 pages built cleanly | PASS |
| **Keyboard Navigation** | Manual QA | Chromium / WebKit | Tab focus moves logically through header, cards, form | Complete focus control | PASS |
| **Reduced Motion** | Accessibility QA | Media Query Emulation | Disables background canvas and reduces animations | Animations halted | PASS |
| **Mobile Responsiveness**| Responsive QA | Viewports 320px–1920px | Zero horizontal scroll; all controls usable | Clean layouts | PASS |
