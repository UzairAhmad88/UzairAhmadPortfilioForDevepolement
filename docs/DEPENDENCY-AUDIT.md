# Dependency Audit & Package Health Baseline

**Platform:** Uzair Ahmad — Personal Engineering & Research Platform  
**Package Manager:** npm  

---

## 1. Production Dependencies

| Package | Version | Classification | Purpose & Rationale |
|---|---|---|---|
| `astro` | `^4.16.18` | **ESSENTIAL** | Core static site generator and MPA build engine. |
| `@astrojs/check` | `^0.9.4` | **ESSENTIAL** | Diagnostic type-checker for Astro components. |
| `@astrojs/sitemap` | `^3.1.6` | **ESSENTIAL** | Automated XML sitemap generator. |
| `typescript` | `^5.7.3` | **ESSENTIAL** | Type system and static analysis. |
| `three` | `^0.160.0` | **UNUSED (Ready for removal)** | Retained in package.json from previous phase; removed from runtime bundle. Can be cleanly pruned in a future cleanup. |

---

## 2. Development Dependencies

| Package | Version | Classification | Purpose |
|---|---|---|---|
| `@typescript-eslint/parser` | `^8.20.0` | **USEFUL** | AST parser for TypeScript linting. |
| `@typescript-eslint/eslint-plugin` | `^8.20.0` | **USEFUL** | TypeScript lint rules. |
| `eslint` | `^9.18.0` | **USEFUL** | Static code analysis. |
| `eslint-plugin-astro` | `^1.3.1` | **USEFUL** | Astro template linting rules. |
| `prettier` | `^3.4.2` | **USEFUL** | Code formatting engine. |
| `prettier-plugin-astro` | `^0.14.1` | **USEFUL** | Astro formatting plugin. |
| `@types/three` | `^0.160.0` | **UNUSED** | Type definitions for Three.js. |

---

## 3. Vulnerability Status
- Zero known high or critical vulnerabilities reported.
- Native Node test runner (`node:test`) is leveraged for tests, avoiding heavy external test frameworks (Jest/Vitest) and minimizing dependency bloat.
