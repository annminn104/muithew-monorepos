import createMiddleware from 'next-intl/middleware';
import { localePrefix, locales, pathnames } from './config';

export default createMiddleware({
  defaultLocale: 'en',
  locales,
  pathnames,
  localePrefix
});

export const config = {
  matcher: ['/', '/(jp|en)/:path*', '/((?!_next|_vercel|.*\\..*).*)']
};
