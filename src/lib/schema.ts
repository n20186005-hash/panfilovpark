import { content } from '../content/guide';
import type { Locale } from '../i18n';

const openingHoursSpecification = [
  {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '00:00',
    closes: '23:59',
  },
];

export function buildAttraction(locale: Locale, canonical?: string, image?: string) {
  const c = content[locale];
  return {
    '@context': 'https://schema.org',
    '@type': ['TouristAttraction', 'Park'],
    name: c.attractionName,
    alternateName: c.attractionAlternate,
    description: c.attractionDescription,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '7X53+GMJ, р. Малая Алматинка',
      addressLocality: 'Алматы',
      addressCountry: 'KZ',
    },
    geo: { '@type': 'GeoCoordinates', latitude: 43.25972, longitude: 76.95472 },
    openingHoursSpecification,
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.8', reviewCount: '14293', bestRating: '5' },
    isAccessibleForFree: true,
    ...(canonical ? { url: canonical } : {}),
    ...(image ? { image: [image] } : {}),
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
