import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';

import { localePrefix, locales, pathnames } from './config';

export default createMiddleware({ defaultLocale: 'en', locales, pathnames, localePrefix });

export function middleware(request: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/(jp|en|vi)/:path*', '/((?!_next|_vercel|.*\\..*).*)']
};
