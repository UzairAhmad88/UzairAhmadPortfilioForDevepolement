# Environment Matrix & Deployment Configuration

This document specifies the behavior, environment variables, and feature flags across **LOCAL**, **PREVIEW**, and **PRODUCTION** environments.

## 1. Environment Comparison Matrix

| Configuration Variable | Local Development (`dev`) | Preview Deployment (`preview`) | Production (`prod`) |
|---|---|---|---|
| `PUBLIC_SITE_URL` | `http://localhost:4321` | `https://*.vercel.app` (Preview URL) | `https://uzairahmad.vercel.app` |
| `PUBLIC_SITE_NAME` | `Uzair Ahmad (Local Dev)` | `Uzair Ahmad (Preview)` | `Uzair Ahmad | Quantitative AI & Product Engineer` |
| `PUBLIC_CONTACT_EMAIL` | `imuzairahmad8@gmail.com` | `imuzairahmad8@gmail.com` | `imuzairahmad8@gmail.com` |
| `CONTACT_EMAIL_TO` | Mock / Local Log | `imuzairahmad8@gmail.com` | `imuzairahmad8@gmail.com` |
| `EMAIL_PROVIDER_API_KEY` | Optional / Mocked | Test API Key | Live Production Secret |
| `Robots Indexation` | `noindex, nofollow` | `noindex, nofollow` | `index, follow` (for approved routes) |
| `Sitemap Generation` | Generated | Generated | Generated & Indexed |

## 2. Security Principle

Private environment variables (e.g. `EMAIL_PROVIDER_API_KEY`) must **never** be prefixed with `PUBLIC_` to prevent accidental bundling into client-side JavaScript.
