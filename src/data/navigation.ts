import type { NavigationItem } from '@/types/site';

export const primaryNavigation: NavigationItem[] = [
  { label: 'Work', href: '#work' },
  { label: 'Research', href: '#research' },
  { label: 'Systems', href: '#systems' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const headerExternalLinks: NavigationItem[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/UzairAhmad88',
    isExternal: true,
  },
];
