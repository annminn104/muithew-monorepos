'use client';

import { navigationMock } from 'mocks';
import React from 'react';
import { ScrollingUtils } from 'utils';

import { Typography } from '@mui/material';

import ToggleMode from '@components/molecules/toggle-mode';
import Image from 'next/image';
import * as S from './styles';

type NavigationProps = {
  i18n: {
    navigation: {
      home: string;
      aboutUs: string;
      services: string;
      contact: string;
    };
  };
};

const Navigation: React.FC<NavigationProps> = ({ i18n }) => {
  return (
    <React.Fragment>
      <S.NavWrap>
        <S.NavLeft>
          <S.NavLogo>
            <Image src='/images/logo-480.png' width={40} height={40} alt='Logo maruhachinousan' quality={100} />
          </S.NavLogo>
        </S.NavLeft>
        <S.NavCenter>
          <S.NavLinkList>
            {navigationMock.map((nav) => (
              <S.NavLinkItem key={nav.key} onClick={() => ScrollingUtils.session(nav.scrolling)}>
                <p>{i18n.navigation[`${nav.i18n}`]}</p>
              </S.NavLinkItem>
            ))}
          </S.NavLinkList>
        </S.NavCenter>
        <S.NavRight>
          <S.NavLanguages />
          <ToggleMode />
          <S.NavContactBtn>
            <S.NavContactBtnIcon />
            <S.NavContactBtnContent>
              <Typography variant='body2'>Hotline</Typography>
              <S.NavLinkTel href='tel:+818075524801'>
                <Typography variant='body2'>(+81) 80 7552 4801</Typography>
              </S.NavLinkTel>
            </S.NavContactBtnContent>
          </S.NavContactBtn>
        </S.NavRight>
      </S.NavWrap>
    </React.Fragment>
  );
};

export default Navigation;
