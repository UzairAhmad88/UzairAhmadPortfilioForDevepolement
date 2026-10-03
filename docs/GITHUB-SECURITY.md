# GitHub Intelligence — Security Specification

## 1. Zero Client Token Exposure
- Client-side bundles contain zero GitHub API tokens.
- `GITHUB_TOKEN` is used strictly in build scripts and CI environments (`process.env.GITHUB_TOKEN`).
- Public repository endpoints are queried without credentials whenever rate limits permit.

---

## 2. External Content Sanitization
External repository data (names, descriptions, topic strings, README snippets) is treated as untrusted user input:
- **HTML Escaping**: `safeEscapeHtml()` escapes `&`, `<`, `>`, `"`, and `'`.
- **Dangerous Tag Stripping**: `sanitizeReadmeContent()` strips `<script>`, `<iframe>`, `<object>`, `<embed>`, and `javascript:` URIs.
- **Protocol Validation**: `isValidExternalUrl()` validates that external links strictly use `http:` or `https:` schemes.
