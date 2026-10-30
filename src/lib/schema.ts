import { content } from '../content/guide';
import type { Locale } from '../i18n';

export function buildAttraction(locale: Locale, canonical?: string, _image?: string) {
  const c = content[locale];
  return {
    '@context': 'https://schema.org',
    '@type': ['TouristAttraction', 'Park'],
    '@id': 'https://panfilovpark.com/#park',
    name: c.attractionName,
    alternateName: c.attractionAlternate,
    description: c.attractionDescription,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Алматы',
      addressCountry: 'KZ',
    },
    geo: { '@type': 'GeoCoordinates', latitude: 43.25972, longitude: 76.95472 },
    ...(canonical ? { url: new URL('/',canonical).href, mainEntityOfPage:canonical } : {}),

  };
}

export function buildFaq(locale: Locale) {
  const c = content[locale];
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: c.faq.items.map((it) => ({
      '@type': 'Question',
      name: it.q,
      acceptedAnswer: { '@type': 'Answer', text: it.a },
    })),
  };
}
