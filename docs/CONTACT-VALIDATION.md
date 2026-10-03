# Contact Validation & Sanitization Engine (Phase 22)

## 1. Multi-Layer Validation Strategy

Validation occurs at two distinct layers:
1. **Client-Side:** Immediate feedback before network request dispatch.
2. **Serverless Boundary (`/api/contact`):** Authoritative validation rejecting forged, malformed, or malicious payloads.

---

## 2. Validation Rules & Implementation

### 1. Name
- **Rule:** Required, trimmed length between 2 and 100 characters.
- **Sanitization:** `sanitizeInput(name)` strips `<tags>` and line breaks.

### 2. Email Address
- **Rule:** Required, normalized to lowercase, trimmed length between 5 and 100 characters.
- **Regex:** `/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/`

### 3. Inquiry Type
- **Rule:** Required, must be a member of `VALID_INQUIRY_TYPES`:
  `['project', 'research', 'technical', 'academic', 'open-source', 'consulting', 'employment', 'general']`

### 4. Message Body
- **Rule:** Required, trimmed length between 10 and 4000 characters.
- **Sanitization:** `sanitizeMessage(message)` strips `<tags>` while preserving standard multi-line paragraph formatting.

### 5. Relevant Link
- **Rule:** Optional, max length 300 characters.
- **Security Check:** Protocol must strictly be `http:` or `https:`. Rejects dangerous schemes (`javascript:`, `data:`, `vbscript:`).

### 6. Canonical Context Lookups
- **Project Context:** Validated against `projects.some(p => p.slug === slug)`.
- **Research Context:** Validated against `researchItems.some(r => r.slug === slug)`.
