import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import React from 'react';

type MainPageProps = {
  params: { locale: string };
};

export default function MainPage({ params: { locale } }: MainPageProps): JSX.Element {
  unstable_setRequestLocale(locale);

  const t = useTranslations('MainPage');

  return (
    <React.Fragment>
      <h1>{t('title')}</h1>
    </React.Fragment>
  );
}
