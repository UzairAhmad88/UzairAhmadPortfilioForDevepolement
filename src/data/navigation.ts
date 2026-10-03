import type { NavigationItem } from '@/types/site';

export const primaryNavigation: NavigationItem[] = [
  { label: 'Work', href: '/work' },
  { label: 'Research', href: '/research' },
  { label: 'Lab', href: '/lab' },
  { label: 'Notes', href: '/notes' },
  { label: 'About', href: '/about' },
  { label: 'Collaborate', href: '/collaborate' },
  { label: 'Contact', href: '/contact' },
];

export const headerExternalLinks: NavigationItem[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/UzairAhmad88',
    isExternal: true,
  },
];
