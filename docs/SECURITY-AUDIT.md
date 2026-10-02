# Security Audit & Threat Model

This document outlines the security audit performed on the repository, dependencies, headers, form submission endpoints, and data transmission layers.

## 1. Threat Model & Audit Findings

| Threat Category | Risk Assessment | Mitigation Implemented | Verification Status |
|---|---|---|---|
| **Secret Leakage** | Zero secret tokens in client bundle or Git history | Scanned `.env.example`, `.gitignore`, and source files | VERIFIED CLEAN |
| **XSS (Cross-Site Scripting)** | Low risk on static architecture; form inputs sanitized | HTML tag stripping and entity escaping in validation pipeline | VERIFIED |
| **Email Header Injection** | Low risk; newline stripping on name/email/org fields | `sanitizeInput()` strips `\r` and `\n` characters | VERIFIED |
| **Clickjacking** | Prevented via HTTP headers | `X-Frame-Options: DENY` configured in `vercel.json` | VERIFIED |
| **MIME Sniffing** | Prevented via HTTP headers | `X-Content-Type-Options: nosniff` configured in `vercel.json` | VERIFIED |
| **Automated Bot Abuse** | Prevented via Honeypot barrier | Hidden `_gotcha` input field drops automated spam | VERIFIED |
| **Insecure Transport** | Prevented via HSTS preload | `Strict-Transport-Security` configured in `vercel.json` | VERIFIED |

## 2. Dependency Vulnerability Review

Ran dependency scan via `npm audit`:
- **0 Vulnerabilities**: All production dependencies (`astro`, `@astrojs/sitemap`, `@astrojs/check`, `three`, `typescript`) are up to date and clean.
