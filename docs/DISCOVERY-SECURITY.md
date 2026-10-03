# DISCOVERY SECURITY & DATA PRIVACY SPECIFICATION
## Uzair Ahmad — Personal Engineering & Research Platform

---

## 1. Zero Public Data Leakage

The Discovery index is constructed only from public, verified engineering assets:
- **Private Project Protection:** Projects marked as private are indexed with only their public descriptions and technology stacks. Internal repository URLs, staging endpoints, and private API keys are omitted.
- **Environment Variable Isolation:** Zero environment variables (`VERCEL_*`, `GITHUB_TOKEN`, etc.) are included in the search payload.
- **No Private Notes or Drafts:** Only published notes (`status === 'Published'`) are ingested into the discovery index.

---

## 2. Cross-Site Scripting (XSS) Prevention

- **Escaped Highlighting (`safeHighlight`):**
  - All input text is escaped using `escapeHtml()` replacing `&`, `<`, `>`, `"`, and `'` with standard HTML entities before wrapping matched tokens in `<mark>` elements.
  - Search queries are escaped with `escapeRegex()` before being passed into dynamic RegExp constructors.
- **Pure Static Rendering:** The index is delivered as serialized JSON data and rendered via typed DOM manipulation without `innerHTML` interpolation of raw user inputs.
