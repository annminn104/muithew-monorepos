import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import React from 'react';

import { NextIntlClientProvider } from 'next-intl';
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

export default function LocaleLayout({ children, params: { locale } }: LocaleLayoutProps): JSX.Element {
  unstable_setRequestLocale(locale);

  return (
    <React.Fragment>
      <html lang={locale}>
        <body>
          <NextIntlClientProvider locale={locale} messages={{}}>
            {children}
          </NextIntlClientProvider>
        </body>
      </html>
    </React.Fragment>
  );
}
