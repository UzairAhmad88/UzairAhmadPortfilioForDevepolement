# Project Structure Specification

```
portfolio/
│
├── .github/
│   └── workflows/
│       └── ci.yml             # Automated CI pipeline for type check and build
│
├── docs/                      # Comprehensive engineering documentation
│   ├── adr/                   # Architecture Decision Records
│   │   ├── ADR-001-astro-typescript.md
│   │   ├── ADR-002-static-first-rendering.md
│   │   ├── ADR-003-content-data-separation.md
│   │   └── ADR-004-vanilla-css-architecture.md
│   ├── README.md
│   ├── ARCHITECTURE.md
│   ├── PROJECT-STRUCTURE.md
│   ├── DEVELOPMENT.md
│   ├── CONTENT-MANAGEMENT.md
│   ├── DATA-MODELS.md
│   ├── COMPONENT-GUIDELINES.md
│   ├── ROUTING.md
│   ├── SEO.md
│   ├── ACCESSIBILITY.md
│   ├── PERFORMANCE.md
│   ├── SECURITY.md
│   ├── ENVIRONMENT.md
│   ├── DEPLOYMENT.md
│   ├── TESTING.md
│   ├── CHANGELOG.md
│   ├── ROADMAP.md
│   └── PHASE-01-REPORT.md
│
├── public/                    # Static public assets served directly
│   ├── images/
│   │   ├── branding/          # Preview and branding assets
│   │   ├── og/                # Open Graph social share images
│   │   ├── profile/           # Author portrait and avatar images
│   │   ├── projects/          # Screenshots and project covers
│   │   └── research/          # Research visualizations and diagrams
│   ├── favicon.svg            # SVG favicon matching brand monogram
│   ├── robots.txt             # Search engine crawling rules
│   └── site.webmanifest       # PWA web manifest
│
├── src/
│   ├── components/
│   │   ├── cards/             # Reusable card UI components
│   │   │   ├── CapabilityCard.astro
│   │   │   ├── FeaturedProjectCard.astro
│   │   │   ├── LabCard.astro
│   │   │   └── ProjectCard.astro
│   │   ├── common/            # Shared utilities & background effects
│   │   │   ├── BackgroundEffects.astro
│   │   │   └── WhatsAppFloat.astro
│   │   ├── layout/            # Layout components (Header, Footer)
│   │   │   ├── Footer.astro
│   │   │   └── Header.astro
│   │   ├── navigation/        # Navigation components
│   │   │   └── Nav.astro
│   │   ├── sections/          # Page sections
│   │   │   ├── About.astro
│   │   │   ├── ArchitectureSection.astro
│   │   │   ├── Contact.astro
│   │   │   ├── Hero.astro
│   │   │   ├── ResearchLab.astro
│   │   │   ├── Systems.astro
│   │   │   ├── TechStack.astro
│   │   │   ├── Ticker.astro
│   │   │   ├── Timeline.astro
│   │   │   └── Work.astro
│   │   └── seo/               # SEO and Schema.org components
│   │       ├── SEO.astro
│   │       └── SchemaOrg.astro
│   │
│   ├── data/                  # Strongly-typed static data modules
│   │   ├── architecturePipeline.ts
│   │   ├── capabilities.ts
│   │   ├── contact.ts
│   │   ├── navigation.ts
│   │   ├── projects.ts
│   │   ├── research.ts
│   │   ├── site.ts
│   │   ├── skills.ts
│   │   ├── social.ts
│   │   └── timeline.ts
│   │
│   ├── layouts/               # Page shell layouts
│   │   ├── BaseLayout.astro
│   │   ├── PageLayout.astro
│   │   └── ProjectLayout.astro
│   │
│   ├── lib/                   # Shared logic and utilities
│   │   ├── constants/
│   │   │   └── site.ts
│   │   ├── seo/
│   │   │   ├── jsonld.ts
│   │   │   └── metadata.ts
│   │   └── utils/
│   │       └── cn.ts
│   │
│   ├── pages/                 # File-based routing
│   │   ├── 404.astro
│   │   └── index.astro
│   │
│   ├── styles/                # CSS architecture
│   │   ├── global.css
│   │   ├── utilities.css
│   │   └── variables.css
│   │
│   └── types/                 # Shared TypeScript domain models
│       ├── capability.ts
│       ├── project.ts
│       ├── research.ts
│       ├── seo.ts
│       ├── site.ts
│       ├── skill.ts
│       └── timeline.ts
│
├── tests/                     # Test suite
│   ├── e2e/
│   ├── integration/
│   └── unit/
│       └── seo.test.ts
│
├── .env.example               # Example environment variable documentation
├── .gitignore                 # Git ignore rules
├── astro.config.mjs           # Astro configuration
├── env.d.ts                   # Environment type declarations
├── package.json               # Node dependencies and npm scripts
├── tsconfig.json              # Strict TypeScript compiler options
└── README.md                  # Root project documentation
```
