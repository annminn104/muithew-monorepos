import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import React from 'react';

import HomePageSection from '@components/organisms/home-page-section';
import SectionAboutUs from '@components/templates/section-about-us';
import SectionContent from '@components/templates/section-contact';
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
    { key: 'services', component: <SectionServices {...t.raw('services')} /> },
    { key: 'about-us', component: <SectionAboutUs {...t.raw('aboutUs')} /> },
    { key: 'contact', component: <SectionContent /> }
  ];

  return (
    <React.Fragment>
      {sectionsHomePage.map((sec) => (
        <HomePageSection key={sec.key}>{sec.component}</HomePageSection>
      ))}
    </React.Fragment>
  );
}
