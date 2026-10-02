# Observability & Reliability Governance

This document outlines the monitoring, logging, error handling, and health inspection practices for the website.

## 1. Observability Topology

```
Production Observability Layers
├── 1. Build & CI Observability
│   └── GitHub Actions workflow logs (Type checks, test outputs, Astro build artifacts).
│
├── 2. Edge & CDN Telemetry (Vercel)
│   └── Edge latency, status code distributions (2xx, 3xx, 4xx, 5xx), cache hit ratios.
│
├── 3. Application Logging & Sanitization
│   └── Structured console warnings/errors without secret or PII exposure.
│
└── 4. Error Boundaries & Fallback Routing
    └── Dedicated 404 page (/404.astro) providing clean navigation recovery.
```

## 2. What Is Intentionally NOT Logged

To maintain strict security and privacy standards:
- Form input message contents, sender names, and email addresses are never written to server logs.
- API keys, private tokens, and environment credentials are excluded from all logging sinks.
