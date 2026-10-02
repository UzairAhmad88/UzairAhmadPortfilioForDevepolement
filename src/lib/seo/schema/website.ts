import { siteConfig } from '../../../data/site.ts';

export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.title,
    url: siteConfig.url,
    description: siteConfig.description,
    author: {
      '@type': 'Person',
      name: siteConfig.name,
    },
    inLanguage: siteConfig.language,
  };
}
