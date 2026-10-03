import type { NavigationItem } from '@/types/site';

export const primaryNavigation: NavigationItem[] = [
  { label: 'Work', href: '/work' },
  { label: 'Research', href: '/research' },
  { label: 'Notes', href: '/notes' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
];

export const headerExternalLinks: NavigationItem[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/UzairAhmad88',
    isExternal: true,
  },
];
