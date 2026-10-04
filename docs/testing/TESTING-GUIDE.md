# Testing Guide & QA Infrastructure

## 1. Test Architecture

The platform uses Node.js's native test runner (`node:test` and `node:assert`) for blazing-fast, dependency-free automated testing.

---

## 2. Test Suites Overview

Total: **266 unit tests across 48 suites** in `tests/unit/`:

| Suite Category | File Path | What is Tested |
|:---|:---|:---|
| **SEO & Schemas** | `tests/unit/seo.test.ts` | Canonical URLs, OpenGraph, JSON-LD Schema.org types |
| **Projects** | `tests/unit/projects.test.ts` | Project data schema, lens payloads, unique slugs |
| **Research** | `tests/unit/research.test.ts` | Research models, hypotheses, open questions |
| **Lab & Artifacts** | `tests/unit/lab.test.ts`, `lab-artifacts.test.ts` | Lab fields, visual artifacts, evidence states |
| **Lab Platform Integration** | `tests/unit/lab-platform-integration.test.ts` | Reciprocal links, Knowledge Graph nodes, Discovery |
| **Lab Curation** | `tests/unit/lab-curation.test.ts` | Narrative completeness, zero marketing buzzwords |
| **Knowledge Graph** | `tests/unit/knowledge-graph.test.ts` | Graph topology, edge validation, zero invalid edges |
| **Discovery** | `tests/unit/discovery.test.ts` | Index generation, search scoring, alias mapping |
| **Timeline** | `tests/unit/timeline.test.ts` | Milestone ordering, year filtering, event taxonomy |
| **Theme & Tokens** | `tests/unit/theme.test.ts` | Token parity, zero FOUC script, color contrast |
| **Visual Polish** | `tests/unit/visual-polish.test.ts` | Design tokens in CSS, button classes, safe areas |

---

## 3. Running Tests

```bash
# Run all tests
npm test

# Run a single isolated test suite
node --test tests/unit/lab-platform-integration.test.ts
```
