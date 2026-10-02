# Email Architecture & Provider Abstraction

This document outlines the provider-independent email dispatching architecture.

## 1. Provider-Agnostic Interface

The email subsystem is isolated in `src/lib/email/` through a unified contract:

```typescript
export interface ContactEmailPayload {
  name: string;
  email: string;
  inquiryType: string;
  organization?: string;
  timeline?: string;
  message: string;
  recipientEmail: string;
}

export interface EmailDispatchResult {
  success: boolean;
  messageId?: string;
  error?: string;
}
```

## 2. Dispatch Adapters

The system supports multiple interchangeable adapters:
1. **Direct Formspree / Web3Forms Form Action**: Zero-backend static site deployment compatibility where the HTML form posts securely over HTTPS.
2. **Resend / SendGrid / Nodemailer Adapter**: Serverless function or Node.js server dispatch for full backend control.
3. **Mailto Fallback**: Instant local client fallback when client-side JavaScript or network endpoints fail.

## 3. Environment Variable Security

All private provider API keys reside strictly on the server:
- `CONTACT_EMAIL_TO`: Destination inbox address.
- `CONTACT_EMAIL_FROM`: Verified sending domain address.
- `EMAIL_PROVIDER_API_KEY`: Secret provider key (never prefixed with `PUBLIC_`).
