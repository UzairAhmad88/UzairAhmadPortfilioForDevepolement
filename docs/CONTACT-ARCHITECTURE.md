# Contact Architecture & Page Strategy

This document details the user experience, pathways, and technical architecture of the contact experience at `/contact` and `/contact/success`.

## 1. Page Hierarchy & Layout

```
/contact
├── 1. Header & Context Banner
│   └── Sets a calm, welcoming tone; defines what topics are appropriate.
├── 2. Direct Channels (Direct Cards)
│   └── Email, LinkedIn, GitHub, WhatsApp with clear use-case recommendations.
├── 3. Structured Inquiry Form
│   ├── Inquiry Type Selector (Project, Full-time Role, Research, Consultation, General)
│   ├── Dynamic Progressive Fields (Contextual hints based on selection)
│   ├── Core Fields (Name, Email, Organization, Message, Timeline)
│   └── Honeypot Spam Barrier (_gotcha hidden field)
├── 4. Response SLA & Expectations Card
│   └── Realistic 24–48h response timeframe; guidance on what details to include.
└── 5. Fallback Direct Email Callout
```

## 2. Progressive Form Disclosure

Depending on the chosen `inquiryType`:
- **Project**: Prompts for project scope, desired deliverables, and estimated timeline.
- **Employment / Role**: Prompts for role title, team domain, and remote/location parameters.
- **Research Collaboration**: Prompts for topic, methodology, and paper/code repository link.
- **General Inquiry**: Simple message input without extraneous fields.

## 3. Post-Submission Success Experience (`/contact/success`)

- Confirms receipt of the inquiry and summarizes next steps.
- Reassures the sender that their message was securely delivered.
- Provides immediate contextual links to continue reading Case Studies (`/work`) or Research Inquiries (`/research`).
