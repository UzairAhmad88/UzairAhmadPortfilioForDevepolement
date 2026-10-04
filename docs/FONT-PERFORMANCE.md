# Font Performance & Typography Stability Architecture

## 1. Font Selection & Weight Subsetting
The platform uses two modern, highly legible typefaces from Google Fonts:
- **Inter:** Primary sans-serif typeface for UI, editorial prose, and headings (`400, 500, 600, 700, 800`).
- **JetBrains Mono:** Monospace typeface for code blocks, mathematical parameters, and metadata tags (`500, 700`).

---

## 2. Font Loading Optimization Strategy
Defined in [`src/layouts/BaseLayout.astro`](file:///d:/web/protfolio/src/layouts/BaseLayout.astro):

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500;700&display=swap"
  rel="stylesheet"
/>
```

### Key Engineering Benefits:
1. **Preconnect Hints:** Establishes early DNS lookup, TLS handshake, and TCP connection to `fonts.googleapis.com` and `fonts.gstatic.com` during initial HTML parsing.
2. **`display=swap`:** Ensures immediate text rendering with system fallback fonts (`sans-serif`, `monospace`), completely eliminating Flash of Invisible Text (FOIT).
3. **Restricted Weight Subsets:** Excludes unused weights (e.g. 100, 200, 300, 900) to minimize font file payloads.

---

## 3. Typography Stability & FOUT Mitigation
- System fallbacks are specified in CSS custom properties (`--font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;`).
- Fluid typography tokens (`clamp(...)`) maintain exact proportional line heights (`--line-height-body: 1.68`, `--line-height-heading: 1.25`), preventing text wrap shifts when WebFonts load.
