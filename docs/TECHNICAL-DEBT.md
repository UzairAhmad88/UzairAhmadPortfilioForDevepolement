# Technical Debt & Architecture Log

This document tracks intentional architectural trade-offs, known minor debt items, and future refactoring considerations.

## 1. Tracked Architecture Considerations

| Item | Context & Trade-Off | Impact | Recommended Action | Priority |
|---|---|---|---|---|
| **Client Three.js Bundle** | Three.js provides 3D background visual accents (~116 KB gzip). | Optional visual canvas; automatically disabled under `prefers-reduced-motion`. | In Phase 10, consider dynamic import with `requestIdleCallback` to defer bundle load until after user interaction. | LOW |
| **Contact Form Progressive Enhancement** | Form posts to `/contact/success` with mailto and direct channels available. | 100% resilient across all static hosting environments. | Connect transactional email serverless function when custom domain hosting is provisioned. | LOW |
| **Search Functionality** | Search omitted to avoid heavy client-side search index on 17 pages. | Users navigate cleanly via `/work`, `/research`, `/services`. | Revisit when article inventory exceeds 30 substantive pieces. | LOW |
