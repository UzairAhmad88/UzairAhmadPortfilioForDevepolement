# Contact Form Security & Anti-Abuse Controls

This document details the security controls implemented to protect against spam, injection, header manipulation, and payload abuse.

## 1. Security Safeguards

| Threat Vector | Mitigation Strategy | Implementation |
|---|---|---|
| **Automated Bot Spam** | Honeypot Field (`_gotcha`) | Hidden from legitimate users; any submission with content in this field is silently dropped. |
| **Cross-Site Scripting (XSS)** | HTML Entity Encoding | All input text is escaped before being converted to HTML notifications. |
| **Email Header Injection** | Newline Stripping in Subject/From | Strips `\r` and `\n` characters from `name`, `email`, and `organization` fields. |
| **Oversized Payloads** | Strict Input Constraints | Name max 100 chars, email max 100 chars, message max 3000 chars. Total payload capped at 10 KB. |
| **Credential Leakage** | Strict Server Isolation | Zero client-side API secrets; all backend keys use server-only environment variables. |

## 2. Server-Side Validation Rules

```typescript
function sanitizeInput(text: string): string {
  return text.replace(/[<>]/g, '').trim();
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email.trim());
}
```
