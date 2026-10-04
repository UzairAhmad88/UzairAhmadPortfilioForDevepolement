# Security Policy & Architecture

**Document Identifier:** `SEC-001`  
**Classification:** Canonical Engineering Specification  
**Status:** Active & Verified  
**Scope:** Security Model, Threat Vectors, Secrets Handling, Data Privacy, CSP & Mitigation Strategy  

---

## 1. Security Philosophy & Threat Model

The Personal Engineering & Research Platform is architected as an ultra-lean, static-first system deployed to the edge. The platform adheres to the **Principle of Least Privilege** and **Zero-Trust Surface Area**:

1. **Zero Database Risk:** There are no SQL or NoSQL production databases connected at runtime; SQL injection, connection pool hijacking, and unauthorized database exfiltration vectors do not exist.
2. **Zero Server Execution:** The platform is compiled ahead-of-time (SSG) to static HTML, CSS, client-side TypeScript, and SVG assets. There are no long-running Node.js server daemons or persistent backend processes exposed to the public Internet.
3. **Zero Persistent Session Storage:** The website does not issue cookies, session tokens, or JWTs. There is no user authentication, session fixation, or credential credential stuffing threat.
4. **Zero Third-Party Runtime Analytics:** No invasive external tracking scripts (e.g. Google Tag Manager, third-party pixel beacons) are embedded, eliminating supply chain injection at runtime.

```
                  +-------------------------------------------------+
                  |                 Public Internet                 |
                  +-------------------------------------------------+
                                           |
                                           v
                  +-------------------------------------------------+
                  |              Vercel Edge Network                |
                  |     (TLS 1.3 Termination / DDoS Mitigation)     |
                  +-------------------------------------------------+
                                           |
                  +------------------------+------------------------+
                  |                                                 |
                  v                                                 v
    +---------------------------+                     +---------------------------+
    |   Static Assets (HTML/JS)  |                     |  WhatsApp Contact Bridge  |
    |  - Strict CSP / SRI       |                     |  - Pre-filled URI encode  |
    |  - Zero Cookie Policy     |                     |  - No server-side storage |
    +---------------------------+                     +---------------------------+
```

---

## 2. Secrets & Credential Management

### 2.1 Complete Secrets Isolation
- **No Secret Baking:** Build artifacts (`dist/`) are strictly audited to guarantee that no private API keys, deployment tokens, or SSH keys are embedded into client bundles.
- **Git Ignore Safeguards:** The repository `.gitignore` strictly excludes `.env`, `.env.local`, `.env.*.local`, `.vercel`, `node_modules`, and temporary diagnostic logs.
- **Integration CLI Tokens:** Any future GitHub or Vercel operational sync scripts utilize ephemeral read-only environment variables (`GITHUB_TOKEN`, `VERCEL_TOKEN`) that are never checked into source control or exposed via `PUBLIC_` Astro prefixes.

### 2.2 Audit Protocol for Contributions
Before every commit and deployment:
```bash
# Verify no secret patterns or private keys exist in staged changes
git diff --cached | grep -E "(BEGIN (RSA|OPENSSH) PRIVATE KEY|ghp_|vercel_)"
```

---

## 3. Client-Side Security & Sanitization

### 3.1 Content Injection (XSS) Prevention
- **Astro Template Escaping:** Astro auto-escapes dynamic variable expressions (`{content}`) by default, preventing reflected and stored cross-site scripting (XSS).
- **Controlled HTML Injection (`set:html`):** The `set:html` directive is restricted exclusively to curated internal SVG icons (`src/icons/tech/`) and pre-validated, compile-time Markdown typography. User input is never passed to `set:html`.
- **Search Engine Isolation:** The client-side Discovery search index (`src/scripts/search-index.ts`) queries static JSON data compiled at build time. Search query parameters (`?q=...`) are sanitized using `encodeURIComponent` before DOM insertion or URL state updates.

### 3.2 External Link Sandboxing
All external links (outbound citations, GitHub repositories, live demo URLs) must implement strict rel attributes to prevent tab-nabbing and reverse window object hijacking:
```html
<!-- Canonical Secure Anchor Implementation -->
<a 
  href="https://external-service.com" 
  target="_blank" 
  rel="noopener noreferrer"
>
  External Link
</a>
```

### 3.3 Contact Flow Security (WhatsApp Float)
The platform contact mechanism (`src/components/common/WhatsAppFloat.astro`) uses client-side URI formatting directly to the official WhatsApp API:
- **No Backend Intermediary:** Messages do not pass through a proprietary server database, eliminating data-at-rest liability.
- **Input Sanitization:** Pre-populated message templates are strictly URL-encoded (`encodeURIComponent`) to prevent URI injection attacks.

---

## 4. HTTP Headers & Edge Security Policy

When deployed to Vercel, the platform enforces hardened HTTP response headers via `vercel.json` or edge middleware:

| Header | Configured Value | Security Purpose |
| :--- | :--- | :--- |
| **`Content-Security-Policy`** | `default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self'; connect-src 'self'; frame-ancestors 'none';` | Prevents unauthorized script execution, font/media hijacking, and clickjacking. |
| **`X-Frame-Options`** | `DENY` | Completely prevents embedding the platform in iframes (anti-clickjacking). |
| **`X-Content-Type-Options`** | `nosniff` | Disables MIME-type sniffing by browsers. |
| **`Referrer-Policy`** | `strict-origin-when-cross-origin` | Protects privacy by stripping query params and paths on cross-origin requests. |
| **`Permissions-Policy`** | `camera=(), microphone=(), geolocation=(), interest-cohort=()` | Disables access to sensitive browser hardware APIs and FLoC tracking. |
| **`Strict-Transport-Security`** | `max-age=63072000; includeSubDomains; preload` | Enforces HTTPS connections and prevents SSL stripping attacks. |

---

## 5. Dependency Management & Vulnerability Audits

1. **Automated Vulnerability Scanning:** Run `npm audit` on all continuous integration passes to catch known CVEs across transitive dependencies.
2. **Minimal Dependency Footprint:** The platform maintains zero extraneous runtime dependencies. Only core compilation frameworks (`astro`, `@astrojs/check`, `typescript`) and foundational styling libraries are permitted.
3. **Lockfile Integrity:** `package-lock.json` is committed to source control and verified on clean installs using `npm ci`.

```bash
# Execute dependency security verification
npm audit --production
```

---

## 6. Vulnerability Disclosure & Reporting

If a potential security vulnerability or misconfiguration is discovered:
- **Do not open a public GitHub issue.**
- Report the vulnerability directly to Uzair Ahmad via the secure contact channel or direct email at `uzairahmedkhawaja88@gmail.com`.
- Include full reproduction steps, payload details, and browser/system environment specifications.
