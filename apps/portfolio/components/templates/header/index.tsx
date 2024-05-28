'use client';

import { IHeaderNav } from '@/common/@types';
import { ScrollingUtils } from '@/common/utils';
import { Button, Drawer } from '@mui/material';
import { HamburgerMenuIcon } from '@styles/ui-mui/icons';
import React, { useState } from 'react';
import { useWindowSize } from 'usehooks-ts';
import * as S from './styles';

type HeaderProps = {
  nav: IHeaderNav;
};

const Header: React.FC<HeaderProps> = ({ nav }) => {
  const { width } = useWindowSize();
  const [open, setOpen] = useState<boolean>(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  return (
    <S.HeaderWrap>
      <S.HeaderNav>
        <S.HeaderNavIcon onClick={toggleDrawer(true)} aria-label='menu-hamburger'>
          <HamburgerMenuIcon fontSize='large' />
        </S.HeaderNavIcon>
        <Drawer open={open} onClose={toggleDrawer(false)}>
          <S.HeaderNavList>
            <Navigation nav={nav} />
          </S.HeaderNavList>
        </Drawer>
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
          <Button fullWidth onClick={() => ScrollingUtils.session(item.hash, 100)}>
            {item.name}
          </Button>
        </S.HeaderNavItem>
      ))}
    </React.Fragment>
  );
};
