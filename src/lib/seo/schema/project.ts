import { siteConfig } from '../../../data/site.ts';
import type { Project } from '../../../types/project.ts';

export function getSoftwareApplicationSchema(project: Project) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: project.title,
    description: project.summary,
    applicationCategory: project.category === 'quant' ? 'FinanceApplication' : 'DeveloperApplication',
    operatingSystem: 'Cross-platform',
    author: {
      '@type': 'Person',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    url: `${siteConfig.url}/work/${project.slug}`,
    codeRepository: project.repoUrl || project.githubUrl,
  };
}
