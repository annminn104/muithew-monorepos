import React from 'react';

import Body from '@components/templates/body';
import Footer from '@components/templates/footer';
import Header from '@components/templates/header';

import { unstable_setRequestLocale } from 'next-intl/server';
import * as S from './styles';

type MainLayoutProps = {
  params: { locale: string };
  children: React.ReactNode;
};

const MainLayout = ({ children, params: { locale } }: MainLayoutProps) => {
  unstable_setRequestLocale(locale);

  return (
    <S.LocaleWrapper>
      <S.LocaleHeader>
        <Header />
      </S.LocaleHeader>
      <S.LocaleBody>
        <Body>{children}</Body>
      </S.LocaleBody>
      <S.LocaleFooter>
        <Footer />
      </S.LocaleFooter>
    </S.LocaleWrapper>
  );
};

export default MainLayout;
