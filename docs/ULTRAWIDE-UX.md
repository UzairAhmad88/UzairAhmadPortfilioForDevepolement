# Ultrawide UX: Large Display Ergonomics & Maximum Bounds Strategy

## 1. Ergonomic Challenges on Ultrawide Displays (3440px – 3840px+)

On large screens (e.g. 21:9 ultrawide 3440×1440, 4K/5K displays):
- **Excessive Line Length Risk**: Text stretching beyond 80 characters causes severe eye fatigue and disorientation.
- **Visual Scattering Risk**: Navigation, content, and controls floating at extreme edges alienate the user.

---

## 2. Containment & Whitespace Architecture

1. **Maximum Shell Constraint**: Main content shells are bounded by `--container-max: 1200px;` with automatic horizontal centering (`margin: 0 auto;`).
2. **Fixed Header Alignment**: Sticky navigation remains centered at `width: min(1200px, ...)`.
3. **Restrained Fluid Scaling**: Typography clamps (`--font-size-display: clamp(...)`) cap maximum font sizes at `5.25rem` to prevent gargantuan headlines.
4. **Balanced Negative Space**: Ambient radial gradient backgrounds softly occupy peripheral margins without distraction.
