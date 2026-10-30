export type Locale = 'kk' | 'ru' | 'en';

export const locales: Locale[] = ['kk', 'ru', 'en'];

export const SITE = 'https://panfilovpark.com';

export const localeMeta: Record<Locale, { htmlLang: string; ogLocale: string }> = {
  kk: { htmlLang: 'kk', ogLocale: 'kk_KZ' },
  ru: { htmlLang: 'ru', ogLocale: 'ru_RU' },
  en: { htmlLang: 'en', ogLocale: 'en_US' },
};

/** Path prefix for a locale. Kazakh is the root; ru/en are nested. */
export function pagePath(locale: Locale): string {
  return locale === 'kk' ? '/' : `/${locale}/`;
}

/** Absolute URL for a locale page, given the site origin (no trailing slash). */
export function pageUrl(base: string, locale: Locale): string {
  return base + pagePath(locale);
}

/** hreflang alternates incl. x-default -> English (international fallback). */
export function hreflangAlternates(base: string): { hreflang: string; href: string }[] {
  const pairs: {hreflang:string;href:string}[] = locales.map((l) => ({ hreflang: l, href: pageUrl(base, l) }));
  pairs.push({ hreflang: 'x-default', href: pageUrl(base, 'en') });
  return pairs;
}
