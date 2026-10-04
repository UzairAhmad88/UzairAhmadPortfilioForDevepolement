# Motion Token System: Centralized Transition & Timing Tokens

## 1. Timing Tokens (Durations)

| Token | Value | Ideal Use Case |
|---|---|---|
| `--motion-duration-instant` | `50ms` | Direct manipulation, active press, toggle state update |
| `--motion-duration-fast` | `120ms` | Hover states, icon rotations, focus rings, link underlines |
| `--motion-duration-normal` | `220ms` | Card hover elevations, tab switches, filter transitions |
| `--motion-duration-slow` | `350ms` | Navigation drawer slide-in, modal dialog presentation |
| `--motion-duration-deliberate` | `480ms` | Signature Engineering Lens transitions, route crossfades |

---

## 2. Easing Tokens (Curves)

| Token | Curve | Application |
|---|---|---|
| `--motion-ease-standard` | `cubic-bezier(0.2, 0, 0, 1)` | Default UI interactions, balance of responsiveness and softness |
| `--motion-ease-emphasized` | `cubic-bezier(0.16, 1, 0.3, 1)` | Drawer slide-ins and modal entries (spring deceleration) |
| `--motion-ease-decelerate` | `cubic-bezier(0, 0, 0.2, 1)` | Elements entering the viewport or unfolding downward |
| `--motion-ease-accelerate` | `cubic-bezier(0.4, 0, 1, 1)` | Elements exiting the viewport or collapsing |
| `--motion-ease-linear` | `linear` | Strictly for continuous progress or opacity timers |

---

## 3. Spatial & Transform Tokens

| Token | Value | Application |
|---|---|---|
| `--motion-distance-micro` | `1px` | Tactile press displacement |
| `--motion-distance-sm` | `2px` | Subtle card elevation lift |
| `--motion-distance-md` | `6px` | Section reveal initial offset |
| `--motion-distance-lg` | `16px` | Modal dialog initial vertical offset |
| `--motion-scale-press` | `0.98` | Subtle button active press compression |
| `--motion-scale-card` | `1.005` | Restrained card hover scaling |

---

## 4. Composed Shorthands

```css
--motion-transition-fast: var(--motion-duration-fast) var(--motion-ease-standard);
--motion-transition-base: var(--motion-duration-normal) var(--motion-ease-standard);
--motion-transition-emphasized: var(--motion-duration-normal) var(--motion-ease-emphasized);
--motion-transition-drawer: var(--motion-duration-slow) var(--motion-ease-emphasized);
--motion-transition-deliberate: var(--motion-duration-deliberate) var(--motion-ease-standard);
```
