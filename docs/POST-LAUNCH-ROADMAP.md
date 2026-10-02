# Post-Launch Engineering Roadmap

**Project**: Uzair Ahmad Personal Professional Website  
**Philosophy**: Purpose-Driven Enhancements Over Feature Bloat  

---

## 1. NOW (Essential Launch Phase — V1.0)
- ✅ **Complete Production Build**: 17 static HTML routes with `@astrojs/sitemap` generation.
- ✅ **Production Security**: Strict HTTP headers configured in `vercel.json` (HSTS, CSP-ready policies, immutable caching).
- ✅ **Unit Test Verification**: 31 unit tests across 6 suites passing with 100% success rate.
- ✅ **Zero Build Diagnostics**: 0 errors, 0 warnings, 0 hints across all 77 codebase files (`astro check`).
- ✅ **Continuous Integration**: Automated GitHub Actions workflow (`.github/workflows/ci.yml`) enforcing tests, type checking, and builds.

---

## 2. NEXT (Measured Content & Tooling Refinements)
- **Deep Research Notes**: Publish detailed empirical backtest results for the fractional differentiation order grid search in `/research/signal-research`.
- **Interactive Backtest Chart Embeds**: Add lightweight SVG/Canvas equity curve visualizations for quantitative backtests without third-party runtime bloat.
- **Custom Domain Transition**: Connect custom domain (e.g. `uzairahmad.com` / `uzair.dev`) with automatic HTTPS and 301 redirects from Vercel preview domain.
- **Transactional Email Provider**: Connect verified Resend / SendGrid API for direct serverless contact form delivery if traffic exceeds basic mailto channels.

---

## 3. LATER (Potential Long-Term Experiments)
- **Interactive Live Model Demos**: WebAssembly (Wasm) or client-side ONNX runtime execution for live market regime classification simulations.
- **Interactive Architecture Graph Explorer**: Vector-based interactive knowledge graph visualization connecting research notes to system implementations.
- **Automated Synthetic Backtest Pipeline**: CI-triggered scheduled backtesting pipeline publishing updated Sharpe and Max Drawdown telemetry into static data feeds.

---

## 4. Explicitly Excluded (Anti-Roadmap)
- 🚫 No complex CMS or headless database layer (maintaining TypeScript static collections).
- 🚫 No user authentication or paywalled accounts.
- 🚫 No heavy third-party surveillance tracking scripts.
- 🚫 No artificial AI chatbot widgets on public pages.
