# Third-Party Services Audit

This document records all external dependencies, third-party APIs, and hosted assets utilized across the website.

## 1. Inventory & Risk Assessment

| Service / Asset | Purpose | Provider | Privacy & Data Impact | Failure Impact & Graceful Degradation |
|---|---|---|---|---|
| **Google Fonts** (`Inter`, `JetBrains Mono`) | Modern typography | Google LLC | IP address transmitted during font file fetch | System fallback fonts (`-apple-system`, `monospace`) render cleanly |
| **Formspree / Web3Forms (Optional)** | Inbound form processing gateway | Formspree / Web3Forms | Processes submitted inquiry text strictly for email delivery | Native `mailto:` links and direct contact cards provide instant backup |
| **Vercel Edge Network** | Global hosting & CDN distribution | Vercel Inc. | Standard edge request routing logs | High-availability global edge redundancy |
| **GitHub** | Code repository hosting | GitHub / Microsoft | External outbound link | Zero impact on portfolio runtime |
| **LinkedIn** | Professional networking profile | LinkedIn / Microsoft | External outbound link | Zero impact on portfolio runtime |
| **WhatsApp** | Direct messaging channel | Meta | External outbound link | Zero impact on portfolio runtime |

## 2. Policy on Third-Party Scripts

- **Zero Intrusive Trackers**: No Meta Pixel, Google Ads remarketing, or third-party behavioral heatmaps.
- **Zero Render-Blocking Scripts**: External scripts are forbidden in the critical rendering path.
