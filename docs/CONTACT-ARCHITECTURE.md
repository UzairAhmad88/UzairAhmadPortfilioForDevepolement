# Contact System Architecture & Pipeline (Phase 22)

## 1. System Topology

```text
┌─────────────────────────────────────────────────────────────┐
│ 1. Client UI (/contact)                                     │
│    • Semantic HTML5 Form with dynamic context detection     │
│    • Client-side immediate format & constraint validation    │
│    • Accessible loading state & touch targets (44px min)    │
└──────────────────────────────┬──────────────────────────────┘
                               │
                               ▼ JSON Payload (POST)
┌─────────────────────────────────────────────────────────────┐
│ 2. Edge / Serverless API Boundary (/api/contact)            │
│    • Method Guard: Strictly rejects non-POST requests (405) │
│    • IP Rate Limiter: Maximum 5 requests / 10-min window    │
│    • Payload Size Check: Rejects oversized bodies (> 64KB)  │
└──────────────────────────────┬──────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────┐
│ 3. Validation & Sanitization Engine                         │
│    • Honeypot Inspection: Silently discards bot entries     │
│    • HTML Tag Stripping (XSS prevention)                    │
│    • Header Injection Neutralization (CRLF stripping)       │
│    • URL Protocol Whitelist (http/https only)               │
│    • Canonical Context Verification (projects / research)   │
└──────────────────────────────┬──────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────┐
│ 4. Email Formatting & Delivery Dispatcher                   │
│    • Structured layout generation (Plain Text & HTML)       │
│    • Reply-To Header Mapping (Sender spoofing protection)   │
│    • Transactional Provider (Resend API / Fallback Logger)  │
└──────────────────────────────┬──────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────┐
│ 5. User Confirmation & Feedback                             │
│    • HTTP 200 OK: Redirect to /contact/success              │
│    • HTTP 400/429/500: Safe user error presentation         │
└─────────────────────────────────────────────────────────────┘
```

---

## 2. Zero-Database Architectural Decision

The portfolio deliberately avoids maintaining an unauthenticated relational database for incoming contact submissions:
- Eliminates attack surface for public database exploitation.
- Guarantees zero persistent PII exposure in internal databases.
- Submissions are dispatched directly to the engineer's authenticated inbox via secure transactional delivery.
