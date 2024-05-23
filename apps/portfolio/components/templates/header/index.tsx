'use client';

import { IHeaderNav } from '@/common/@types';
import { BreakPointEnum } from '@/common/enums';
import { ScrollingUtils } from '@/common/utils';
import { Button } from '@mui/material';
import { HamburgerMenuIcon } from '@styles/ui-mui/icons';
import React, { useEffect, useState } from 'react';
import { useWindowSize } from 'usehooks-ts';
import * as S from './styles';

type HeaderProps = {
  nav: IHeaderNav;
};

const Header: React.FC<HeaderProps> = ({ nav }) => {
  const { width = 0 } = useWindowSize();
  const [isMobile, setIsMobile] = useState<boolean>(width < BreakPointEnum.Mobile);

  useEffect(() => {
    if (width && width < BreakPointEnum.Mobile) {
      setIsMobile(true);
    }
  }, [width]);

  return (
    <S.HeaderWrap>
      <S.HeaderNav>
        <S.HeaderNavIcon onClick={() => setIsMobile(!isMobile)}>
          <HamburgerMenuIcon fontSize='large' />
        </S.HeaderNavIcon>
        <S.HeaderNavList isMobile={isMobile}>
          <Navigation nav={nav} />
        </S.HeaderNavList>
      </S.HeaderNav>
    </S.HeaderWrap>
  );
};

export default Header;

const Navigation: React.FC<{ nav: IHeaderNav }> = ({ nav }) => {
  return (
    <React.Fragment>
      {nav.map((item) => (
        <S.HeaderNavItem key={item.hash}>
          <Button onClick={() => ScrollingUtils.session(item.hash, 100)}>{item.name}</Button>
        </S.HeaderNavItem>
      ))}
    </React.Fragment>
  );
};
