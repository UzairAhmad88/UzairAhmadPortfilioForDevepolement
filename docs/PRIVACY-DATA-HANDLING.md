# Privacy Architecture & Data Handling Policy

**Project:** Personal Developer Portfolio / Personal Engineering & Research Platform  
**Phase:** 34 — Final Engineering Documentation & Maintainability System  
**Compliance Standard:** Zero Tracking / Privacy-by-Default  

---

## 1. Data Handling & Privacy Overview

The platform operates on a **privacy-first, zero-telemetry architecture**. It does not collect user tracking data, set advertising cookies, or transmit personal visitor information to third-party ad networks.

```text
┌─────────────────────────────────────────────────────────────────────────────┐
│                         DATA CLASSIFICATION MATRIX                          │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  Data Type          Storage Location   Purpose               Retention      │
│  ─────────────────  ─────────────────  ────────────────────  ─────────────  │
│  Theme Preference   Browser Local      Persist Dark/Light    Until cleared  │
│                     Storage ('theme')  Theme Choice          by user        │
│                                                                             │
│  Search Query       Browser Memory     Filter Local Search   Session only   │
│                     (In-memory only)   Index in Discover     (Volatile)     │
│                                                                             │
│  Contact Form       Outbound Email /   Deliver Inbound       Only as long   │
│  Submission         Direct Message     Inquiry to Author     as needed      │
│                                                                             │
│  Third-Party        NONE               No Tracking Scripts   N/A            │
│  Tracking / Pixels                     or Analytics Cookies  (0 Cookies)    │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 2. In-Depth Data Handling Specifications

### 2.1 Browser Local Storage (`localStorage`)
- **Key Used:** `'theme'` (Values: `'dark'` | `'light'` | `'system'`).
- **Purpose:** Prevents theme flash on reload by storing the user's explicit theme selection.
- **Privacy Impact:** Zero tracking capability; stored entirely within the user's browser sandbox.

### 2.2 In-Memory Search Queries
- **Mechanism:** User search input on `/discover` is processed entirely within client-side JavaScript against a static pre-compiled JSON index.
- **Privacy Impact:** Search queries are **never sent to a remote logging server or analytics provider**.

### 2.3 Contact Form Submissions
- **Data Collected:** Name, Email, Inquiry Type, and Message.
- **Purpose:** Exclusively used to respond to professional collaboration inquiries, project consultations, or engineering research questions.
- **Sharing:** Contact details are **never sold, shared, or distributed to third-party marketing lists**.

---

## 3. Cookie & Tracker Audit

- **Cookies Set by Site:** **0 (Zero Cookies)**.
- **Google Analytics / Tag Manager:** **Not Installed**.
- **Facebook / LinkedIn Tracking Pixels:** **Not Installed**.
- **Third-Party CDN Trackers:** **Not Installed** (All core assets and fonts are self-hosted).
