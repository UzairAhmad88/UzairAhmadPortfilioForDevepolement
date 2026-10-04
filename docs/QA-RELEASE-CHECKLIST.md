# Production QA & Release Verification Checklist

**Project:** Personal Developer Portfolio / Personal Engineering & Research Platform  
**Phase:** 34 — Final Engineering Documentation & Maintainability System  
**Baseline:** Grounded in Phase 33 Production QA Audit Results  

---

## 1. Automated Pipeline Gates

- [ ] `npm run check` passes with 0 errors and 0 warnings across 172 source files.
- [ ] `npm test` passes with 244/244 tests passing across 45 suites.
- [ ] `npm run build` generates exactly 60 static HTML pages and `sitemap-index.xml` in `dist/`.
- [ ] Client JS bundle budget check: Total client JS $\le 20\text{ KB}$ raw ($\le 8\text{ KB}$ gzip).

---

## 2. Route & Navigation Verification

- [ ] Homepage (`/`) renders Hero, Living Status, Metrics, and Featured Projects.
- [ ] Work Index (`/work`) and all 8 Project Detail case studies load cleanly.
- [ ] Research Index (`/research`) and all 3 Research Inquiries load with verified formulas.
- [ ] Engineering Notes (`/notes`) and all 6 Notes load with syntax-highlighted code.
- [ ] Lab Workbenches (`/lab`) and all 6 Lab experiments load with status pills.
- [ ] Technology Ecosystem (`/technology`) and all 19 entity pages display bi-directional links.
- [ ] Discovery Engine (`/discover`) filters instantly across types, topics, and stack tags.
- [ ] Interactive Knowledge Graph (`/knowledge-graph`) renders graph and accessible table.
- [ ] Engineering Timeline (`/timeline`) displays events in strict descending chronological order.
- [ ] Archive Hub (`/archive`) displays paused and historical projects with repository tags.
- [ ] About (`/about`) and Collaboration (`/collaborate`) load verified biography and offerings.
- [ ] Contact (`/contact`) form blocks empty submissions and enforces email regex.
- [ ] 404 (`/404.html`) renders helpful recovery navigation and search links.

---

## 3. Experience, Theme & Accessibility Gates

- [ ] Zero FOUC on theme toggle (Dark / Light / System).
- [ ] All interactive elements accessible via Tab / Shift+Tab / Enter / Space / Escape.
- [ ] WCAG 2.1 AAA color contrast maintained across both dark and light modes.
- [ ] Mobile drawer menu opens, traps focus safely, and closes on Escape or backdrop click.
- [ ] Fluid typography scales cleanly from 320px mobile to 3840px 4K ultrawide screens.
- [ ] Touch targets on mobile enforce minimum 44×44 CSS pixel dimensions.

---

## 4. Security & Content Truth Gates

- [ ] Zero exposed API keys, private tokens, or connection strings in client JS or HTML.
- [ ] Contact form spam mitigation field (`name="_gotcha"`) verified present.
- [ ] All outbound hyperlinks enforce `target="_blank" rel="noopener noreferrer"`.
- [ ] Zero fabricated skill percentages, fake star counters, or fictitious metrics.
- [ ] All project retrospectives, challenges, and limitations honestly documented.
