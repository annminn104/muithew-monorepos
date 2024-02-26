import { createLocalizedPathnamesNavigation } from 'next-intl/navigation';
import { localePrefix, locales, pathnames } from './config';

export const { usePathname } = createLocalizedPathnamesNavigation({
  locales,
  pathnames,
  localePrefix
});
