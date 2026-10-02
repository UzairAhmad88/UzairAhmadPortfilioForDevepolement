import { siteConfig } from '../../data/site.ts';
import type { SEOProps } from '../../types/seo.ts';

export function getCanonicalUrl(pathname: string, baseUrl?: string): string {
  const base = baseUrl || siteConfig.url;
  const cleanBase = base.replace(/\/+$/, '');
  const cleanPath = pathname === '/' ? '' : pathname.replace(/^\/+/, '').replace(/\/+$/, '');
  return cleanPath ? `${cleanBase}/${cleanPath}` : cleanBase;
}

export function buildMetadata(props: SEOProps = {}, pathname: string = '/'): SEOProps {
  const title = props.title
    ? `${props.title} | ${siteConfig.name}`
    : siteConfig.title;

  const description = props.description || siteConfig.description;
  const keywords = props.keywords || siteConfig.keywords;
  const canonical = props.canonical || getCanonicalUrl(pathname);

  const og = {
    title: props.og?.title || title,
    description: props.og?.description || description,
    type: props.og?.type || 'website',
    image: props.og?.image || siteConfig.defaultOgImage,
    imageAlt: props.og?.imageAlt || `${siteConfig.name} - Quantitative AI & Product Engineer`,
    url: props.og?.url || canonical,
  };

  const twitter = {
    card: props.twitter?.card || 'summary_large_image',
    title: props.twitter?.title || title,
    description: props.twitter?.description || description,
    image: props.twitter?.image || siteConfig.defaultOgImage,
    imageAlt: props.twitter?.imageAlt || `${siteConfig.name} - Quantitative AI & Product Engineer`,
  };

  return {
    title,
    description,
    keywords,
    canonical,
    og,
    twitter,
    noindex: props.noindex || false,
    nofollow: props.nofollow || false,
    schema: props.schema,
  };
}
