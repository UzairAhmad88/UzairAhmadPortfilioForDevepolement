# Dependency Governance & Supply Chain Policy

**Project:** Personal Developer Portfolio / Personal Engineering & Research Platform  
**Stage:** Post-Production Governance & Long-Term Stewardship  
**Current Dependency Footprint:** 3 Runtime Dependencies (`astro`, `@astrojs/sitemap`, `@astrojs/check`) + Three.js for 3D Graph  

---

## 1. Zero-Bloat Dependency Philosophy

The platform operates under a **minimalist dependency policy**. Third-party npm packages introduce long-term maintenance overhead, potential security vulnerabilities, build complexity, and bundle weight.

New dependencies are **REJECTED BY DEFAULT** if the required behavior can be cleanly implemented in 50–100 lines of standard TypeScript or vanilla CSS.

---

## 2. The 9-Point Dependency Evaluation Gate

Before installing any new npm package (`npm install <package>`), the maintainer must evaluate:

1. **Necessity:** Is this dependency genuinely required, or can native browser APIs (Fetch, Canvas, CSS Grid, IntersectionObserver) accomplish the task?
2. **Internal Alternative:** Does an internal utility or helper already exist in `src/lib/` or `src/utils/`?
3. **Maintenance Health:** Is the library actively maintained with recent releases, responsive issue triage, and zero unpatched CVEs?
4. **Bundle Size Impact:** Does it add more than 5 KB to the client bundle? (Run `bundlephobia.com` check).
5. **Security Risk:** Does it pull in a deeply nested dependency tree (> 5 sub-dependencies)?
6. **Build Complexity:** Does it require complex Vite plugins, Webpack loaders, or native Node C++ bindings?
7. **Accessibility Impact:** If it renders UI, does it natively comply with WCAG 2.1 keyboard and screen-reader standards?
8. **Licensing:** Is it released under a permissive open-source license (MIT, Apache 2.0, BSD-3)?
9. **Lock-In:** Does it tie the platform to a proprietary cloud vendor or framework-specific runtime?

---

## 3. Approved Dependency Baseline

| Package | Purpose | Justification |
|:---|:---|:---|
| `astro` (`^4.16.18`) | Static Site Generation Core | Pure HTML compilation with zero client framework overhead. |
| `@astrojs/sitemap` (`^3.1.6`) | XML Sitemap Generator | Automated generation of standard `sitemap-index.xml`. |
| `@astrojs/check` (`^0.9.4`) | Template Diagnostic Tool | Static type checking of Astro template props and slots. |
| `typescript` (`^5.7.3`) | Language Compiler | Strict mode type verification across 100% of files. |
| `three` (`^0.160.0`) | WebGL Force Graph | Physics simulation for Knowledge Graph visualizer (isolated with HTML table fallback). |

---

## 4. Periodic Maintenance & Vulnerability Scanning

- **Security Audits:** Run `npm audit` quarterly.
- **Dependency Upgrades:** Perform minor/patch upgrades (`npm update`) with full test verification (`npm test && npm run build`).
