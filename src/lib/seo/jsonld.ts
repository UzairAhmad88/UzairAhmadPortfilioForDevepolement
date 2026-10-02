import { siteConfig } from '../../data/site.ts';

export function getPersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.name,
    jobTitle: siteConfig.author.title,
    description: siteConfig.description,
    url: siteConfig.url,
    email: `mailto:${siteConfig.author.email}`,
    sameAs: [
      siteConfig.socialLinks.github.url,
      siteConfig.socialLinks.linkedin.url,
      siteConfig.socialLinks.whatsapp.url,
      siteConfig.socialLinks.vercel.url,
    ],
    knowsAbout: [
      'Quantitative Finance',
      'High Frequency Trading (HFT)',
      'Artificial Intelligence',
      'Machine Learning',
      'Deep Learning',
      'Agentic AI',
      'Full Stack Software Engineering',
      'Python',
      'TypeScript',
      'Financial Engineering',
    ],
  };
}

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

export function getProfilePageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    mainEntity: getPersonSchema(),
  };
}
