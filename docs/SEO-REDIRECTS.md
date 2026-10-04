# Redirect Architecture & Status Codes

## 1. Status Code Compliance
- **200 OK:** Served for all 58 valid canonical static HTML pages.
- **404 Not Found:** Served by `dist/404.html` with explicit recovery links and `noindex, nofollow` metadata.
- **No Soft 404s:** Unknown or broken route requests cleanly return a 404 status.
- **Zero Redirect Chains:** Direct routing ensures all internal links point to the final canonical destination without intermediate hops.

---

## 2. Legacy Redirect Mappings
- Legacy alias `/knowledge-graph` redirects or renders the primary `/knowledge` hub without orphaned routes.
- Legacy project and lab slugs resolve directly to canonical entities.
