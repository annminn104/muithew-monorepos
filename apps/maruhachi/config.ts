import { Pathnames } from 'next-intl/navigation';

export const locales = ['en', 'jp'] as const;

export const pathnames = {
  '/': '/'
  // '/pathnames': {
  //   en: '/pathnames',
  //   jp: '/pasu-mei'
  // }
} satisfies Pathnames<typeof locales>;

export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;
