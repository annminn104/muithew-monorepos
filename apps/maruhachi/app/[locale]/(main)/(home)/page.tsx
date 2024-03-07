import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import React from 'react';

import Introduction from '@components/templates/introduction';

import { Grid } from '@mui/material';
import * as S from './styles';

type MainPageProps = {
  params: { locale: string };
};

export default function HomePage({ params: { locale } }: MainPageProps): React.JSX.Element {
  unstable_setRequestLocale(locale);

  const t = useTranslations('homePage');

  const sectionsHomePage = [
    {
      key: 'introduction',
      component: <Introduction {...t.raw('introduction')} />
    }
  ];

  return (
    <S.HomePageWrap maxWidth='xl'>
      <Grid container>
        {sectionsHomePage.map((sec) => (
          <Grid item xs={12} key={sec.key}>
            <S.HomePageSection>{sec.component}</S.HomePageSection>
          </Grid>
        ))}
      </Grid>
    </S.HomePageWrap>
  );
}
