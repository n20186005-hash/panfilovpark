import { content } from '../content/guide';
import type { Locale } from '../i18n';
import type { SubPage } from '../content/subpages/types';

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
    ...(canonical ? { url: new URL('/', canonical).href, mainEntityOfPage: canonical } : {}),
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

/** JSON-LD for the 35 English sub-pages: always a BreadcrumbList + a typed main entity. */
export function buildSubpageJsonLd(page: SubPage, canonical: string, image: string): Record<string, unknown>[] {
  const base = 'https://panfilovpark.com';
  const breadcrumb: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Panfilov Park',
        item: base + '/en/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: page.cluster,
        item: canonical,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: page.hero.h1,
        item: canonical,
      },
    ],
  };

  const graph: Record<string, unknown>[] = [breadcrumb];

  const placeBase: Record<string, unknown> = {
    '@type': ['TouristAttraction', 'Place'],
    name: page.hero.h1,
    description: page.description,
    image,
    url: canonical,
    mainEntityOfPage: canonical,
    address: { '@type': 'PostalAddress', addressLocality: 'Almaty', addressCountry: 'KZ' },
  };
  if (page.geo) {
    placeBase.geo = { '@type': 'GeoCoordinates', latitude: page.geo.latitude, longitude: page.geo.longitude };
  }

  switch (page.schema) {
    case 'FAQPage':
      if (page.faq.length) {
        graph.push({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: page.faq.map((it) => ({
            '@type': 'Question',
            name: it.q,
            acceptedAnswer: { '@type': 'Answer', text: it.a },
          })),
        });
      }
      break;
    case 'TouristTrip':
      graph.push({
        '@context': 'https://schema.org',
        '@type': 'TouristTrip',
        name: page.hero.h1,
        description: page.description,
        mainEntityOfPage: canonical,
      });
      break;
    case 'TouristAttraction':
    case 'Place':
      graph.push({ '@context': 'https://schema.org', ...placeBase });
      break;
    default:
      graph.push({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: page.title,
        description: page.description,
        inLanguage: 'en',
        mainEntityOfPage: canonical,
        image,
      });
  }

  return graph;
}
