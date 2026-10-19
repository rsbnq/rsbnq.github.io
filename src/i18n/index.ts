import en, { type Dict } from './en';
import hi from './hi';
import bn from './bn';

export const locales = ['en', 'hi', 'bn'] as const;
export type Lang = (typeof locales)[number];
export type OccasionKey = 'weddings' | 'birthdays' | 'corporate' | 'exhibitions';

/** Address of each occasion page; the words are in the language files under `occasionPages`. */
export const occasionRoutes = {
  weddings: '/weddings',
  birthdays: '/birthday-parties',
  corporate: '/corporate-events',
  exhibitions: '/exhibitions',
} as const satisfies Record<OccasionKey, string>;

export const occasionKeys = Object.keys(occasionRoutes) as OccasionKey[];

export type Route = '/' | '/services' | '/gallery' | '/contact' | (typeof occasionRoutes)[OccasionKey];

export const localeInfo: Record<Lang, { htmlLang: string; label: string; short: string; og: string }> = {
  en: { htmlLang: 'en-IN', label: 'English', short: 'EN', og: 'en_IN' },
  hi: { htmlLang: 'hi-IN', label: 'हिन्दी', short: 'हिं', og: 'hi_IN' },
  bn: { htmlLang: 'bn-IN', label: 'বাংলা', short: 'বাং', og: 'bn_IN' },
};

const dicts: Record<Lang, Dict> = { en, hi, bn };

export const t = (lang: Lang): Dict => dicts[lang];

/** "/services" in Hindi → "/hi/services"; English stays at the root. */
export function localePath(lang: Lang, route: Route): string {
  if (lang === 'en') return route;
  return route === '/' ? `/${lang}/` : `/${lang}${route}`;
}

export type { Dict };
