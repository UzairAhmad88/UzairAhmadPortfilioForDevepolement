import { siteConfig } from '../../../data/site.ts';

export interface BreadcrumbItem {
  label: string;
  href: string;
}

export function getBreadcrumbSchema(items: BreadcrumbItem[]) {
  const itemListElement = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: siteConfig.url,
    },
    ...items.map((crumb, index) => {
      const fullUrl = crumb.href.startsWith('http')
        ? crumb.href
        : `${siteConfig.url.replace(/\/+$/, '')}/${crumb.href.replace(/^\/+/, '')}`;
      return {
        '@type': 'ListItem',
        position: index + 2,
        name: crumb.label,
        item: fullUrl,
      };
    }),
  ];

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement,
  };
}
