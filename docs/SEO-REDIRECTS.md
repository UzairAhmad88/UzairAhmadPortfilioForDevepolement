# SEO Redirect Policy & Legacy Route Mapping

This document outlines URL standardization policies, legacy alias mappings, and status code conventions.

## 1. URL Normalization Directives

1. **Protocol**: Force HTTPS (`https://uzairahmad.vercel.app`).
2. **Trailing Slashes**: Uniformly stripped via canonical generator (`/work` instead of `/work/`).
3. **Case Sensitivity**: All routes strictly lowercase kebab-case.
4. **Clean Parameter Strategy**: Query strings (e.g. `?type=project`) are processed client-side while canonical tags point strictly to the parameterless canonical URL.

## 2. Legacy Route Mappings

If legacy routes from earlier prototypes are encountered, 301 permanent redirects should be applied:

| Old / Legacy Route | New Canonical Target | Redirect Type | Reason |
|---|---|---|---|
| `/projects` | `/work` | 301 Permanent | Route consolidation to `/work` |
| `/projects/*` | `/work/*` | 301 Permanent | Slug namespace migration |
| `/skills` | `/about#skills` | 301 Permanent | Content merged into comprehensive About profile |
| `/experience` | `/about#experience` | 301 Permanent | Content merged into comprehensive About profile |
| `/collaborate` | `/services` | 301 Permanent | Unified capabilities and services routing |
