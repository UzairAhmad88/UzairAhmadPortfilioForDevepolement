# Contact Spam Protection & Abuse Defense (Phase 22)

## 1. Multi-Tiered Anti-Spam Architecture

The Contact System defends against automated crawlers and denial-of-service abuse using a layered, privacy-preserving defense strategy:

```text
┌─────────────────────────────────────────────────────────────┐
│ Tier 1: Invisible Honeypot Field                            │
│    • Name: "_gotcha" | aria-hidden="true" | tabindex="-1"   │
│    • Hidden from human users via CSS display: none.         │
│    • Automated scrapers auto-fill the field -> Rejected.    │
├─────────────────────────────────────────────────────────────┤
│ Tier 2: IP-Based Sliding Window Rate Limiter                │
│    • Maximum 5 submissions per IP within a 10-minute window.│
│    • Responds with HTTP 429 Too Many Requests & Retry-After.│
├─────────────────────────────────────────────────────────────┤
│ Tier 3: Payload Size & String Length Caps                   │
│    • Maximum body size: 64 KB                               │
│    • Message cap: 4,000 characters                          │
├─────────────────────────────────────────────────────────────┤
│ Tier 4: Provider-Level Spam Intelligence                    │
│    • Transactional provider (Resend) automated filtering.   │
└─────────────────────────────────────────────────────────────┘
```

---

## 2. Zero-CAPTCHA Accessibility Decision

By combining honeypot traps with deterministic sliding-window rate limiting, the contact experience avoids invasive, accessibility-degrading third-party CAPTCHA widgets (e.g. reCAPTCHA image challenges), ensuring a frictionless, private user experience for all users including those utilizing screen readers.
