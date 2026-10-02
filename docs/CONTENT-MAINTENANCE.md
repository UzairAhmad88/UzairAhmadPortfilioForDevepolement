# Content Freshness & Maintenance Governance

This document establishes review cadence, updating rules, and freshness guidelines for technical projects and research entries.

## 1. Maintenance Cadence Matrix

| Content Category | Review Frequency | Key Verification Items |
|---|---|---|
| **Featured Projects** (`/work/*`) | Quarterly | Verify GitHub repository links, dependency updates, live demo status, and performance metrics. |
| **Research Inquiries** (`/research/*`) | Bi-annually | Audit mathematical citations, review newly published preprints/papers in the domain, verify code snippets. |
| **Engineering Capabilities** (`/services`) | Quarterly | Verify deliverables against latest tech stack and real project deliverables. |
| **Contact Channels & Direct Links** (`/contact`) | Monthly | Test form submission endpoint, verify WhatsApp/LinkedIn links, check response SLA. |

## 2. Updated Timestamp Rules

- **Meaningful Updates Only**: Only bump `updatedAt` ISO date when substantive content, new empirical data, or architectural updates are committed.
- **No Manipulative Date Bumping**: Do not artificially update `updatedAt` on minor typo fixes solely to mimic search engine freshness.
