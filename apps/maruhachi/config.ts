import { Pathnames } from 'next-intl/navigation';

export const locales = ['en', 'jp', 'vi'] as const;

export const pathnames = {
  '/': '/'
  // '/pathnames': {
  //   en: '/pathnames',
  //   jp: '/pasu-mei'
  // }
} satisfies Pathnames<typeof locales>;

export const localePrefix = 'always';

export type AppPathnames = keyof typeof pathnames;
