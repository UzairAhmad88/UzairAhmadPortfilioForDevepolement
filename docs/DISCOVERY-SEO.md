# DISCOVERY SEO SPECIFICATION & INDEXATION STRATEGY
## Uzair Ahmad — Personal Engineering & Research Platform

---

## 1. Indexation Strategy

- **Canonical Discovery Route (`/discover`):** Fully indexable with unique title, meta description, Open Graph tags, and Schema.org WebSite search action metadata.
- **Search Query States (`/discover?q=...`):** Dynamic query states are prevented from causing thin-content duplication or indexing crawl budget waste by setting the canonical URL to the root `/discover` endpoint.
- **Internal Anchor Discovery:** Every discovery result links directly to its canonical page (`/work/[slug]`, `/research/[slug]`, `/lab/[slug]`, `/notes/[slug]`, `/technology/[slug]`), reinforcing search engine crawling of the entire engineering network.
