import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import React from 'react';

type MainPageProps = {
  params: { locale: string };
};

export default function HomePage({ params: { locale } }: MainPageProps): React.JSX.Element {
  unstable_setRequestLocale(locale);

  const t = useTranslations('homePage');

  return (
    <React.Fragment>
      <h1>{t('title')}</h1>
    </React.Fragment>
  );
}
