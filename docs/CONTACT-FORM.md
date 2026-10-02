# Contact Form UX & Accessibility Specification

This document defines the field specifications, keyboard behavior, accessibility landmarks, and error handling for the portfolio's contact form.

## 1. Field Specifications

| Field Name | Type | Required | HTML Attributes & Validation | Accessibility / Labeling |
|---|---|---|---|---|
| `inquiry_type` | `select` | Yes | `aria-required="true"`, `autocomplete="off"` | Explicit `<label for="inquiry_type">` |
| `name` | `text` | Yes | `autocomplete="name"`, `minlength="2"`, `maxlength="100"` | Explicit `<label for="name">` |
| `email` | `email` | Yes | `autocomplete="email"`, RFC 5322 regex validation | Explicit `<label for="email">` |
| `organization` | `text` | No | `autocomplete="organization"`, `maxlength="100"` | Explicit `<label for="organization">` |
| `timeline` | `text` | No | `maxlength="50"` | Explicit `<label for="timeline">` |
| `message` | `textarea` | Yes | `minlength="10"`, `maxlength="3000"`, `rows="5"` | Explicit `<label for="message">` |
| `_gotcha` | `text` | Honeypot | `tabindex="-1"`, `autocomplete="off"`, CSS hidden (`display:none`) | Hidden from visual & screen readers |

## 2. Accessibility Guidelines

- **No Placeholder-Only Labels**: Every input has an associated `<label>` element with a unique `id`.
- **Keyboard Navigation**: Standard Tab order (`inquiry_type` -> `name` -> `email` -> `organization` -> `timeline` -> `message` -> submit button).
- **Visible Focus Rings**: Clear `outline: 2px solid var(--color-accent)` with `outline-offset: 2px` on all inputs.
- **Error Feedback**: Validation errors display below the offending input in high-contrast text accompanied by an error icon (never relying solely on color).
- **Screen Reader Announcements**: Success and error messages utilize `aria-live="polite"` regions.
