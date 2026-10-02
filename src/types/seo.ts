export interface OpenGraphMeta {
  title?: string;
  description?: string;
  type?: 'website' | 'profile' | 'article';
  image?: string;
  imageAlt?: string;
  url?: string;
}

export interface TwitterMeta {
  card?: 'summary' | 'summary_large_image';
  site?: string;
  creator?: string;
  title?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
}

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonical?: string;
  og?: OpenGraphMeta;
  twitter?: TwitterMeta;
  noindex?: boolean;
  nofollow?: boolean;
  schema?: Record<string, unknown> | Array<Record<string, unknown>>;
}
