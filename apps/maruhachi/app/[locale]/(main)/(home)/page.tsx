import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import React from 'react';

import HomePageSection from '@components/organisms/home-page-section';
import SectionAboutUs from '@components/templates/section-about-us';
import SectionContact from '@components/templates/section-contact';
import SectionIntroduction from '@components/templates/section-introduction';
import SectionServices from '@components/templates/section-services';
import * as S from './styles';

type MainPageProps = {
  params: { locale: string };
};

export default function HomePage({ params: { locale } }: MainPageProps): React.JSX.Element {
  unstable_setRequestLocale(locale);

  const t = useTranslations('homePage');

  const sectionsHomePage = [
    { key: 'introduction', scrolling: 'section-home', component: <SectionIntroduction {...t.raw('introduction')} /> },
    { key: 'services', scrolling: 'section-services', component: <SectionServices {...t.raw('services')} /> }
  ];

  const sectionBGPage = [
    { key: 'about-us', scrolling: 'section-about-us', component: <SectionAboutUs {...t.raw('aboutUs')} /> },
    { key: 'contact', scrolling: 'section-contact', component: <SectionContact {...t.raw('contact')} /> }
  ];

  return (
    <React.Fragment>
      {sectionsHomePage.map((sec) => (
        <HomePageSection key={sec.key} id={sec.scrolling}>
          {sec.component}
        </HomePageSection>
      ))}
      <S.SectionBGPage>
        {sectionBGPage.map((sec) => (
          <HomePageSection key={sec.key} id={sec.scrolling}>
            {sec.component}
          </HomePageSection>
        ))}
      </S.SectionBGPage>
    </React.Fragment>
  );
}
