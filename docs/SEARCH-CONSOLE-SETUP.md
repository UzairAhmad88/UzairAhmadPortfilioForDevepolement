# Search Console & Webmaster Setup Guide

This document provides operational instructions for verifying domain ownership, submitting XML sitemaps, and monitoring indexation across Google Search Console and Bing Webmaster Tools.

## 1. Domain Verification Steps

### Google Search Console:
1. Navigate to [Google Search Console](https://search.google.com/search-console).
2. Choose **Domain Property** (`uzairahmad.vercel.app` or custom domain).
3. Add the DNS TXT record or HTML meta verification tag:
   ```html
   <meta name="google-site-verification" content="YOUR_VERIFICATION_TOKEN" />
   ```
4. Confirm verification.

### Bing Webmaster Tools:
1. Navigate to [Bing Webmaster Tools](https://www.bing.com/webmasters).
2. Import verified property directly from Google Search Console or add XML verification file.

## 2. Sitemap Submission

Submit the following generated XML sitemap URLs:
- `https://uzairahmad.vercel.app/sitemap-index.xml`
- `https://uzairahmad.vercel.app/sitemap-0.xml`

## 3. Post-Launch URL Inspection & Monitoring

- **URL Inspection Tool**: Test live rendering of `/`, `/about`, `/work/deep-learning-stock-return-prediction`, and `/research/signal-research`.
- **Rich Results Test**: Validate Schema.org `Person`, `WebSite`, `TechArticle`, `SoftwareApplication`, and `ContactPage` JSON-LD markup.
- **Coverage Check**: Ensure 0 excluded URLs due to crawl errors or 5xx server faults.
