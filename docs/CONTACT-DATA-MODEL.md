# Contact Data Model Specification (Phase 22)

## 1. Type Definitions (`src/types/contact.ts`)

```typescript
export type InquiryType =
  | 'project'
  | 'research'
  | 'technical'
  | 'academic'
  | 'open-source'
  | 'consulting'
  | 'employment'
  | 'general';

export interface ContactInquiry {
  name: string;
  email: string;
  inquiryType: InquiryType;
  subject?: string;
  organization?: string;
  timeline?: string;
  message: string;
  relevantLink?: string;
  projectContext?: string;
  researchContext?: string;
  expectedOutcome?: string;
  honeypot?: string;
  timestamp?: number;
}

export interface ContactValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
  sanitizedData?: ContactInquiry;
}

export interface FormattedEmailPayload {
  subject: string;
  fromName: string;
  replyTo: string;
  plainText: string;
  htmlText: string;
}

export interface DeliveryResult {
  success: boolean;
  messageId?: string;
  error?: string;
}

export interface ContactDeliveryProvider {
  name: string;
  send(payload: FormattedEmailPayload): Promise<DeliveryResult>;
}

export interface InquiryTypeOption {
  value: InquiryType;
  label: string;
  description: string;
  hint: string;
}
```

---

## 2. Field Rules & Constraints

| Field | Type | Required? | Min Length | Max Length | Notes |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `name` | String | **Yes** | 2 chars | 100 chars | Sanitized against HTML tags and control chars. |
| `email` | String | **Yes** | 5 chars | 100 chars | Validated via standard email syntax regex. |
| `inquiryType` | Enum | **Yes** | — | — | Must match one of the 8 controlled `InquiryType` values. |
| `message` | String | **Yes** | 10 chars | 4000 chars | Central field. Preserves paragraph breaks but strips raw HTML. |
| `organization` | String | Optional | 0 chars | 100 chars | Company, research institution, or lab team name. |
| `subject` | String | Optional | 0 chars | 150 chars | Header-safe sanitized subject line. |
| `relevantLink` | URL String | Optional | 0 chars | 300 chars | Protocol whitelisted (`http:`, `https:` only). |
| `projectContext` | Slug String | Optional | 0 chars | 100 chars | Validated against canonical slugs in `projects.ts`. |
| `researchContext` | Slug String | Optional | 0 chars | 100 chars | Validated against canonical slugs in `research.ts`. |
| `honeypot` | String | Anti-Bot | 0 chars | — | Must be empty. Submissions with populated values are rejected. |
