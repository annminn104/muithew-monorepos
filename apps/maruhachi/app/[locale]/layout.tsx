import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import React from 'react';

import { AppModeEnum, appModeMock } from '@mocks';
import { PaletteMode } from '@mui/material';
import RootProvider from 'app/provider';
import { NextIntlClientProvider } from 'next-intl';
import { cookies } from 'next/headers';
import { locales } from '../../config';

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: { locale: string };
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }: Omit<LocaleLayoutProps, 'children'>) {
  const t = await getTranslations({ locale, namespace: 'localeLayout' });

  return {
    title: t('title')
  };
}

export default function LocaleLayout({ children, params: { locale } }: LocaleLayoutProps): React.JSX.Element {
  unstable_setRequestLocale(locale);
  const cookieStorage = cookies();

  return (
    <React.Fragment>
      <html lang={locale}>
        <head>
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link href='https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&display=swap' rel='stylesheet' />
        </head>
        <body suppressHydrationWarning={true}>
          <NextIntlClientProvider locale={locale} messages={{}}>
            <RootProvider mode={(cookieStorage.get(appModeMock.key)?.value || AppModeEnum.Light) as PaletteMode}>{children}</RootProvider>
          </NextIntlClientProvider>
        </body>
      </html>
    </React.Fragment>
  );
}
