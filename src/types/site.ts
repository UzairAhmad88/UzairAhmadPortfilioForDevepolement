export interface NavigationItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface SocialLink {
  platform: string;
  label: string;
  url: string;
  username?: string;
  icon?: string;
}

export interface ContactMethod {
  id: string;
  label: string;
  value: string;
  url: string;
  ariaLabel: string;
  iconName?: 'email' | 'whatsapp' | 'linkedin' | 'github' | 'external';
  isPrimary?: boolean;
}

export interface AuthorInfo {
  name: string;
  title: string;
  eyebrow: string;
  headline: string;
  lede: string;
  location?: string;
  email: string;
  avatar?: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  keywords: string[];
  url: string;
  author: AuthorInfo;
  navigation: NavigationItem[];
  socialLinks: Record<string, SocialLink>;
  contactMethods: ContactMethod[];
  defaultOgImage: string;
  language: string;
  locale: string;
  themeColor: string;
}
