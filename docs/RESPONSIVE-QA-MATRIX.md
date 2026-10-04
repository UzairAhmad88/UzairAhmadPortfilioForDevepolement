# Responsive QA Matrix: Comprehensive Viewport & Device Validation

| Viewport | Device Class | Orientation | Key Routes Tested | Issue / Severity | Status |
|---|---|---|---|---|---|
| `320 × 568` | Mobile Small (iPhone SE 1) | Portrait | `/`, `/work`, `/research`, `/contact` | Zero horizontal overflow; touch targets >= 44px | **PASS** |
| `360 × 800` | Mobile Standard (Galaxy S20) | Portrait | `/`, `/lab`, `/notes`, `/timeline` | Fluid cards stack cleanly; drawer opens smoothly | **PASS** |
| `375 × 812` | Mobile Standard (iPhone 13 mini) | Portrait | `/`, `/knowledge`, `/about`, `/collaborate` | Navigation and theme toggle fully accessible | **PASS** |
| `390 × 844` | Mobile Standard (iPhone 14) | Portrait | `/`, `/work/[slug]`, `/research/[slug]` | Case study diagrams scale without distortion | **PASS** |
| `414 × 896` | Mobile Large (iPhone XR/11) | Portrait | `/`, `/discover`, `/archive`, `/contact` | Search filters wrap cleanly into readable rows | **PASS** |
| `430 × 932` | Mobile Large (iPhone 15 Pro Max) | Portrait | `/`, `/signature`, `/notes/[slug]` | Full fluid typography scaling verified | **PASS** |
| `568 × 320` | Mobile Landscape (iPhone SE) | Landscape | `/`, `/contact`, `/timeline` | Short viewport: drawer scrolls vertically | **PASS** |
| `600 × 800` | Small Tablet (Nexus 7) | Portrait | `/`, `/work`, `/research` | 2-column card layout active | **PASS** |
| `768 × 1024` | Tablet Portrait (iPad 9.7") | Portrait | `/`, `/how-i-build`, `/technology` | Balanced grid margins and header layout | **PASS** |
| `820 × 1180` | Tablet Portrait (iPad Air) | Portrait | `/`, `/knowledge-graph`, `/timeline` | Split views and timeline cards legible | **PASS** |
| `1024 × 768` | Tablet Landscape (iPad 9.7") | Landscape | `/`, `/work`, `/lab` | Full desktop navigation active | **PASS** |
| `1280 × 720` | Laptop (720p) | Landscape | All Routes | Container bounds active; no layout clipping | **PASS** |
| `1366 × 768` | Laptop Standard | Landscape | All Routes | Perfect 3-column project distribution | **PASS** |
| `1440 × 900` | Desktop Standard (MacBook Pro) | Landscape | All Routes | Optimal typographic measure (70ch) | **PASS** |
| `1920 × 1080` | Full HD Desktop | Landscape | All Routes | Max width centered at 1200px; zero jitter | **PASS** |
| `2560 × 1440` | QHD Desktop (2K) | Landscape | All Routes | Crisp typography, balanced peripheral space | **PASS** |
| `3440 × 1440` | Ultrawide (21:9) | Landscape | All Routes | Centered container prevents horizontal drift | **PASS** |
| `3840 × 2160` | 4K UHD Display | Landscape | All Routes | Fluid clamp caps prevent oversized headlines | **PASS** |
| `1024 × 768` (200% Zoom) | Accessibility Zoom (WCAG) | Landscape | All Routes | Reflows cleanly without loss of content | **PASS** |
| `1280 × 800` (150% Zoom) | Accessibility Zoom (WCAG) | Landscape | All Routes | Zero horizontal page-level scrolling | **PASS** |
