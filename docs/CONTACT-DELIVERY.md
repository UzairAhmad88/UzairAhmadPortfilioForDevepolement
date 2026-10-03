# Contact Delivery Architecture & Provider Abstraction (Phase 22)

## 1. Provider Abstraction Interface

```typescript
export interface ContactDeliveryProvider {
  name: string;
  send(payload: FormattedEmailPayload): Promise<DeliveryResult>;
}
```

The system separates input validation and payload formatting from external email delivery APIs, allowing seamless transition between delivery providers (e.g. Resend, SendGrid, Postmark, AWS SES, or standard SMTP).

---

## 2. Default & Production Providers

1. **Production Provider (Resend API):**
   - Dispatches via HTTPS POST to `https://api.resend.com/emails`.
   - Uses `RESEND_API_KEY` environment secret.
   - Maps user's email to the `reply_to` header for direct, friction-free email responses.
2. **Fallback Provider (`ConsoleDeliveryProvider`):**
   - Active in development, testing, and environments without configured API keys.
   - Formats and validates the message, returning `{ success: true, messageId: ... }`.
