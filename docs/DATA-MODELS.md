# Data Models Specification

All core domain entities are strongly typed using TypeScript in `src/types/`.

---

## 1. Project (`src/types/project.ts`)
Represents an engineering system, product, case study, or repository.

```typescript
export type ProjectCategory = 'quant' | 'ai' | 'engineering' | 'product';
export type ProjectStatus = 'completed' | 'active' | 'research' | 'archived';

export interface Project {
  slug: string;                      // URL-safe unique slug
  title: string;                     // Full display title
  category: ProjectCategory[];       // Array of category tags for filtering
  projectType: string;               // Subhead badge (e.g., 'Healthcare SaaS', 'Market Intelligence')
  problem: string;                   // Problem statement
  solution?: string;                 // Technical solution description
  system?: string;                   // System pipeline description
  product?: string;                  // Product description
  outcome?: string;                  // Measurable outcome or deployment result
  featured?: boolean;                // Flag for hero featured project
  featuredSubheading?: string;       // Custom subhead for featured card
  githubUrl?: string;                // Repository link
  liveUrl?: string;                  // Live deployment URL
  image?: string;                    // Cover asset path
  technologies?: string[];           // List of tech stack items
  tags?: string[];                   // Freeform tags
  role?: string;                     // Engineering role
  status?: ProjectStatus;            // Project status
  order?: number;                    // Display sequence order
}
```

---

## 2. Site Configuration (`src/types/site.ts`)
Defines the centralized portfolio metadata and profile configuration.

```typescript
export interface NavigationItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface SocialLink {
  platform: string;
  label: string;
  url: string;
  username?: string;
  icon?: string;
}

export interface ContactMethod {
  id: string;
  label: string;
  value: string;
  url: string;
  ariaLabel: string;
  iconName?: 'email' | 'whatsapp' | 'linkedin' | 'github' | 'external';
  isPrimary?: boolean;
}

export interface AuthorInfo {
  name: string;
  title: string;
  eyebrow: string;
  headline: string;
  lede: string;
  location?: string;
  email: string;
  avatar?: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  keywords: string[];
  url: string;
  author: AuthorInfo;
  navigation: NavigationItem[];
  socialLinks: Record<string, SocialLink>;
  contactMethods: ContactMethod[];
  defaultOgImage: string;
  language: string;
  locale: string;
  themeColor: string;
}
```

---

## 3. Capability Discipline (`src/types/capability.ts`)
Represents one of the 4 pillar capabilities.

```typescript
export interface CapabilityItem {
  id: string;
  number: string;                    // e.g. "01"
  flow: string;                      // e.g. "Markets -> Signals -> Execution"
  title: string;                     // Discipline title
  description: string;               // Core capability paragraph
  tags: string[];                    // Pill badges
  punchline: string;                 // Bottom bold highlight
  visualType: 'signal' | 'network' | 'architecture' | 'product';
}
```

---

## 4. Research Theme (`src/types/research.ts`)
Represents an active research question in the Lab section.

```typescript
export interface ResearchItem {
  id: string;
  badge: string;                     // e.g. "Exploring", "Experimenting", "Building"
  title: string;
  question: string;
  approach: string;
  tags?: string[];
  link?: string;
}
```

---

## 5. Timeline Item (`src/types/timeline.ts`)
Represents a Building in Public activity signal.

```typescript
export interface TimelineItem {
  id: string;
  date: string;                      // e.g. "SEP 2026"
  title: string;
  tags: string;                      // e.g. "AI / Python"
  description?: string;
}
```
