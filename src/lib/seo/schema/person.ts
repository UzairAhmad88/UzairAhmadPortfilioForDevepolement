import { siteConfig } from '../../../data/site.ts';

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
      'High-Frequency Trading & Market Regimes',
      'Artificial Intelligence & Machine Learning',
      'Deep Learning & Neural Time Series',
      'Deterministic Multi-Agent Systems',
      'Full-Stack Software Architecture',
      'Python',
      'TypeScript',
      'FastAPI & Microservices',
      'Astro Static Site Generation',
    ],
  };
}
