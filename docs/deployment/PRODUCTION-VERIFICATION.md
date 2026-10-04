# Production Deployment Verification

## 1. Post-Deployment Smoke Test

Following a deployment to production, verify the live deployment at `https://uzair-ahmad-portfilio-for-devepolem.vercel.app/`:

1. **Homepage Loading**:
   - Verify HTTP 200 status and zero visual layout shifts.
   - Test Dark/Light theme toggle persistence.
2. **Core Routes**:
   - `/work` and `/work/market-regime-engine` (Test 6-lens navigator).
   - `/research` and `/research/signal-research`.
   - `/lab` and `/lab/fractional-diff-cli` (Verify visual artifacts).
   - `/notes` and `/notes/gmm-state-flipping-variance-ordering`.
   - `/technology` and `/technology/python`.
   - `/discover` (Test search bar with query `"SSE"` and `"GMM"`).
   - `/knowledge-graph` (Verify canvas rendering and semantic table fallback).
   - `/timeline`, `/archive`, `/collaborate`, `/contact`.
3. **SEO & Headers**:
   - Verify `/sitemap-index.xml` returns valid XML.
   - Verify `/robots.txt` returns `User-agent: *` directives.
   - Check security headers in browser DevTools: `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`.
