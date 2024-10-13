import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';

import { appModeMock } from '@mocks';
import { localePrefix, locales, pathnames } from './config';

export default createMiddleware({ defaultLocale: 'jp', locales, pathnames, localePrefix });

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  if (!request.cookies.has(appModeMock.key)) {
    response.cookies.set(appModeMock.key, appModeMock.defaultMode, { httpOnly: true, path: '/;' });
  }

  return response;
}

export const config = {
  matcher: ['/', '/(jp|en|vi)/:path*', '/((?!_next|_vercel|.*\\..*).*)']
};
