import { getPersonSchema } from './person.ts';

export function getProfilePageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    mainEntity: getPersonSchema(),
  };
}
