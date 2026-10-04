# Form Accessibility & Interactive Input Architecture

## 1. Contact Form Semantic Schema
The contact and inquiry interface (`src/pages/contact.astro`) adheres to WCAG 2.2 Level AA input guidelines:

- **Explicit Label Associations:** Every `<input>`, `<select>`, and `<textarea>` is tied to a corresponding `<label for="[id]">`.
- **Required Indicator:** Required fields feature `<span class="required" aria-hidden="true">*</span>` with semantic `required` attributes and accessible hints.
- **Autofill & Autocomplete:** Implemented per WCAG 1.3.5 (Identify Input Purpose):
  - `name="name"` -> `autocomplete="name"`
  - `name="email"` -> `autocomplete="email"`
- **Live Error Association:** When a validation failure occurs:
  - The input receives `aria-invalid="true"`.
  - The input is programmatically linked to its error description via `aria-describedby="[field]-error"`.
  - The error message text is visibly displayed below the field.

---

## 2. Accessible Form Submission Feedback
1. **Submission In-Progress:** Submit button reflects `disabled` state with `aria-busy="true"` and text updating to `"Submitting inquiry..."`.
2. **Success Confirmation:** Direct navigation to `/contact/success` with a dedicated heading `<h1>Inquiry Received</h1>`, reference ID, and next-steps summary.
3. **Client Validation Alert:** A prominent banner with `role="alert"` appears if submission is attempted with invalid inputs, directing keyboard focus to the first invalid field.
