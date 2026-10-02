import { siteConfig } from '../../../data/site.ts';
import type { Project } from '../../../types/project.ts';

export function getSoftwareApplicationSchema(project: Project) {
  const isQuant = Array.isArray(project.category) && project.category.includes('quant');
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: project.title,
    description: project.shortDescription || project.problem || project.title,
    applicationCategory: isQuant ? 'FinanceApplication' : 'DeveloperApplication',
    operatingSystem: 'Cross-platform',
    author: {
      '@type': 'Person',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    url: `${siteConfig.url}/work/${project.slug}`,
    codeRepository: project.githubUrl,
  };
}
