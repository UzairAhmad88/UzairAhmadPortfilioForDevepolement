# Content Publishing Checklist

Before any research entry, article, case study, or technical note is published to the production website, it must satisfy this verification checklist.

## Pre-Publication Verification Checklist

- [ ] **Metadata & Frontmatter**
  - [ ] Unique `slug` (kebab-case, URL-safe, lowercase).
  - [ ] Compelling `title` (concise, technical, non-clickbait).
  - [ ] `summary` or `description` (120–160 characters for SEO search snippet).
  - [ ] Accurate `publishedAt` and `updatedAt` ISO dates (no backdating or fake freshness).
  - [ ] Assigned to a validated `domain` / `topic` in the taxonomy.
  - [ ] Tag count is restrained (max 4–6 verified tags).

- [ ] **Technical Integrity & Ethics**
  - [ ] All code snippets are syntactically valid and free of hardcoded credentials/secrets.
  - [ ] All equations are checked for notation accuracy.
  - [ ] No fabricated claims, metrics, or non-existent backtest profitability.
  - [ ] Research items explicitly list systemic limitations, assumptions, and edge cases.
  - [ ] Coursework or tutorials are clearly labeled as study notes / explanations, not novel research.

- [ ] **Knowledge Graph & Link Integrity**
  - [ ] Bidirectional project links (`relatedProjects`) resolve to valid project slugs.
  - [ ] Cross-research links (`relatedResearch`) resolve to existing research slugs.
  - [ ] Citations and references point to real, verified academic papers or official docs.
  - [ ] No 404 dead-ends in internal content links.

- [ ] **SEO & Structured Data**
  - [ ] Canonical URL properly set.
  - [ ] Open Graph and Twitter card meta tags populated.
  - [ ] JSON-LD structured data (`TechArticle` or `ScholarlyArticle`) validated.

- [ ] **Rendering, Accessibility & Performance**
  - [ ] All figures and images have descriptive `alt` text.
  - [ ] Tables formatted properly with header cells (`<th>`) and responsive overflow containers.
  - [ ] Astro build passes with zero static route compilation errors (`npm run build`).
  - [ ] Automated test suite passes (`npm test`).
