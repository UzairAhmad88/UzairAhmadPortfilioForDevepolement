# Lab Interaction & Demonstration Safety Policy

**Uzair Ahmad — Personal Engineering & Research Platform**  
**Phase 12 Specification**

---

## 1. Interaction & Sandbox Safety Principles

The Lab exposes technical code snippets, mathematical formulas, and architectural flow diagrams while adhering to strict security and privacy standards:

1. **Zero Client-Side Arbitrary Execution:** No `eval()`, `Function()`, or arbitrary user-submitted Python/JavaScript code execution is permitted on the platform.
2. **Safe Code Snippets:** Code listings are statically syntax-highlighted strings without live server-side execution endpoints.
3. **External Link Safety:** All external links to GitHub repositories or documentation are served with `rel="noopener noreferrer"` and `target="_blank"`.
4. **Sanitized Stack Traces & Error Logs:** No production database hostnames, internal network IPs, or user credentials appear in snippet fixtures or diagnostic diagrams.
5. **No Iframe Vulnerabilities:** No un-sandboxed or third-party iframe embeds are utilized without strict Content Security Policy directives.

---

## 2. PII & Sensitive Infrastructure Rules

- All financial examples utilize publicly available historical market data (e.g. S&P 500, AAPL, BTC/USD).
- All healthcare database examples utilize synthetic patient schemas (e.g. `Patient(id="p-101", name="Synthetic Patient")`).
- All multi-agent search tests use public mock domains or rate-limited official API sandboxes.
