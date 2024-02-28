import Footer from '@components/templates/footer';
import React from 'react';
import * as S from './styles';

type MainLayoutProps = {
  params: { locale: string };
  children: React.ReactNode;
};

const MainLayout = ({ children, params: { locale } }: MainLayoutProps) => {
  return (
    <S.LocaleWrapper>
      <S.LocaleHeader>
        <S.LocaleHeaderContent />
      </S.LocaleHeader>
      <S.LocaleBody>
        <S.LocaleBodyContent>{children}</S.LocaleBodyContent>
      </S.LocaleBody>
      <S.LocaleFooter>
        <Footer />
      </S.LocaleFooter>
    </S.LocaleWrapper>
  );
};

export default MainLayout;
