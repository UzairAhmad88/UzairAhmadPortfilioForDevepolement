import { siteConfig } from '../../../data/site.ts';
import type { ResearchItem } from '../../../types/research.ts';

export function getScholarlyArticleSchema(research: ResearchItem) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: research.title,
    description: research.summary,
    author: {
      '@type': 'Person',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    datePublished: research.publishedAt || '2025-01-01',
    dateModified: research.updatedAt || research.publishedAt || '2025-01-01',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteConfig.url}/research/${research.slug}`,
    },
    keywords: [
      research.domain,
      'Empirical Investigation',
      'Quantitative Analysis',
      ...(research.methodology || []).slice(0, 3),
    ],
    citation: (research.references || []).map((ref) => ref.citation),
  };
}
