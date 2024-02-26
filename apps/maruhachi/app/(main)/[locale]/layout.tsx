import React from 'react';
import * as S from './styles';
import { NextIntlClientProvider, useMessages } from 'next-intl';

export default function MainLayout({ children }: { children: React.ReactNode }): JSX.Element {
  const messages = useMessages();

  return (
    <React.Fragment>
      <NextIntlClientProvider messages={messages}>
        <S.MainWrapper>
          <S.MainHeader>
            <S.MainHeaderContent />
          </S.MainHeader>
          <S.MainBody>
            <S.MainBodyContent>{children}</S.MainBodyContent>
          </S.MainBody>
          <S.MainFooter>
            <S.MainFooterContent />
          </S.MainFooter>
        </S.MainWrapper>
      </NextIntlClientProvider>
    </React.Fragment>
  );
}
