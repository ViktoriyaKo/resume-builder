export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'ru'],
} as const;

export type Locales = (typeof i18n)['locales'][number];
