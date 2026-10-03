# Contact Accessibility Specification (Phase 22)

## 1. WCAG 2.2 Level AA Compliance

The Contact System (`src/pages/contact.astro` and `src/pages/contact/success.astro`) adheres to WCAG 2.2 AA accessibility guidelines.

---

## 2. Implemented Accessibility Features

1. **Form Labels & Associations:**
   - Every input, select, and textarea has a dedicated `<label for="...">` element.
   - Required fields are visually indicated with `*` and announced to screen readers via `required` HTML5 attributes.
2. **Error & Hint Relationship:**
   - Dynamic hints and field errors are programmatically associated with inputs via `aria-describedby` (e.g. `aria-describedby="type-hint"`, `aria-describedby="email-error"`).
   - Error summaries use `role="alert"` and `aria-live="assertive"` for immediate screen-reader announcement.
3. **Touch Targets:**
   - All inputs, selects, textareas, buttons, and direct channel cards enforce a minimum height of `44px` (`--touch-target-min`).
4. **Keyboard Focus & Navigation:**
   - Standard tab ordering throughout all form controls.
   - High-contrast `:focus-visible` focus rings (`2px solid var(--teal)` with `2px` offset).
5. **Autofill Support:**
   - Standard `autocomplete` attributes (`name`, `email`, `organization`) configured for browser autofill.
