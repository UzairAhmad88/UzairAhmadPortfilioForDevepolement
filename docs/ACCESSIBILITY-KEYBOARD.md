# Keyboard Navigation & Focus Management System

## 1. Universal Focus Outline Contract
All interactive elements across both themes implement a 2px high-contrast focus outline with an offset ring:

```css
a:focus-visible,
button:focus-visible,
input:focus-visible,
select:focus-visible,
textarea:focus-visible,
summary:focus-visible,
[tabindex]:focus-visible {
  outline: 2px solid var(--color-accent, #7ed8c4);
  outline-offset: 3px;
  border-radius: var(--radius-sm, 4px);
}
```

- **Dark Mode Focus:** Uses `#7ed8c4` (Teal) against `#07110f` background (10.2:1 contrast ratio).
- **Light Mode Focus:** Uses `#0d7663` (Deep Pine) against `#fbf9f5` background (6.8:1 contrast ratio).

---

## 2. Keymap Standards & Operations

| Control / Context | Key Sequence | Expected Behavior |
| :--- | :--- | :--- |
| **Global Bypass** | `Tab` (on load) | Focus lands on "Skip to main content"; `Enter` jumps to `#main-content`. |
| **Navigation** | `Tab` / `Shift+Tab` | Sequential traversal in natural DOM order. |
| **Theme Toggle** | `Enter` / `Space` | Cycles system -> dark -> light mode with live announcement. |
| **Filter Chips** | `Enter` / `Space` | Toggles selection state; updates search query parameters. |
| **Discovery Search** | `Escape` | Clears search input or closes active dropdown. |
| **Mobile Drawer** | `Escape` | Closes drawer and returns focus to the invoking hamburger button. |
| **Engineering Lenses** | `Tab` / `Enter` | Activates multi-lens architectural perspectives cleanly. |

---

## 3. Tab Order Invariants
- Zero positive `tabindex` attributes anywhere in the codebase (`tabindex="1"`, `tabindex="2"` are forbidden).
- `tabindex="0"` is reserved for custom focusable list items or scrollable containers.
- `tabindex="-1"` is used exclusively for programmatic focus targets such as `<main id="main-content">`.
