import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import React from 'react';

import HomePageSection from '@components/organisms/home-page-section';
import SectionIntroduction from '@components/templates/section-introduction';
import SectionServices from '@components/templates/section-services';

type MainPageProps = {
  params: { locale: string };
};

export default function HomePage({ params: { locale } }: MainPageProps): React.JSX.Element {
  unstable_setRequestLocale(locale);

  const t = useTranslations('homePage');

  const sectionsHomePage = [
    { key: 'introduction', component: <SectionIntroduction {...t.raw('introduction')} /> },
    { key: 'sections', component: <SectionServices {...t.raw('sections')} /> }
  ];

  return (
    <React.Fragment>
      {sectionsHomePage.map((sec) => (
        <HomePageSection key={sec.key}>{sec.component}</HomePageSection>
      ))}
    </React.Fragment>
  );
}
