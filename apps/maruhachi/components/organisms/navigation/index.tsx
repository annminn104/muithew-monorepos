import { useTranslations } from 'next-intl';
import React from 'react';

import { Typography } from '@mui/material';
import { navigationMock } from 'mocks';
import * as S from './styles';

type NavigationProps = {};

const Navigation: React.FC<NavigationProps> = () => {
  const t = useTranslations('mainLayout');

  return (
    <S.NavWrap>
      <S.NavLeft>
        <S.NavLogo>Logo + name</S.NavLogo>
      </S.NavLeft>
      <S.NavCenter>
        <S.NavLinkList>
          {navigationMock.map((nav) => (
            <S.NavLinkItem href={nav.slug} key={nav.key}>
              <p>{t(`header.navigation.${nav.i18n}`)}</p>
            </S.NavLinkItem>
          ))}
        </S.NavLinkList>
      </S.NavCenter>
      <S.NavRight>
        <S.NavLanguages />
        <S.NavContactBtn>
          <S.NavContactBtnIcon />
          <S.NavContactBtnContent>
            <Typography variant='body2'>Hotline</Typography>
            <Typography variant='body2'>0123-456-789</Typography>
          </S.NavContactBtnContent>
        </S.NavContactBtn>
      </S.NavRight>
    </S.NavWrap>
  );
};

export default Navigation;
