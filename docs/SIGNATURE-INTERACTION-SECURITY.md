# 🔒 Signature Interaction Security Architecture

## Security & Injection Protection

### 1. Zero Raw HTML Injection
- All payload strings from canonical project datasets are strictly escaped and rendered via standard Astro template expressions (`{title}`, `{description}`, etc.).
- No untrusted `innerHTML` or `dangerouslySetInnerHTML` methods are used.

### 2. URL Sanitization & Deep-Linking Safety
- The URL parameter reader only accepts predefined canonical lens keys (`architecture`, `constraints`, `implementation`, `evidence`, `tradeoffs`, `connections`).
- Any unknown or malformed `?lens=` query parameter safely falls back to the default `architecture` lens without error or execution.

### 3. Cross-Site Scripting (XSS) & State Poisoning Defense
- Code snippets and schema contracts are rendered inside `<pre><code>` blocks with strict character escaping.
- No dynamic `eval()` or runtime script compilation is performed.
