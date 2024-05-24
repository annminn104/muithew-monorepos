'use client';

import { alpha, IconButton, styled } from '@mui/material';

export const HeaderWrap = styled('div', {})(({}) => ({ zIndex: 999, position: 'relative' }));

export const HeaderNav = styled(
  'nav',
  {}
)(({ theme }) => ({
  position: 'fixed',
  ...theme.functions.adjustFlex(),
  width: '100vw',
  marginTop: '16px'
}));

export const HeaderNavIcon = styled(
  IconButton,
  {}
)(({ theme }) => ({
  zIndex: 999,
  position: 'fixed',
  right: '16px',
  top: '16px',
  background: theme.palette.common?.['white'],
  '&:hover': {
    background: theme.palette.common?.['white']
  }
}));

export const HeaderNavList = styled('ul', { shouldForwardProp: (prop) => prop !== 'isMobile' && prop !== 'isOpenMenu' })<{
  isMobile: boolean;
  isOpenMenu: boolean;
}>(({ theme, isMobile, isOpenMenu }) => ({
  listStyleType: 'none',
  ...theme.functions.adjustFlex(),
  columnGap: '4vw',
  border: `1px solid ${theme.palette.grey?.[200]}`,
  padding: '16px 40px',
  borderRadius: '40px',
  margin: 0,
  backgroundColor: alpha(theme.palette.grey?.[900] || '#333', 1),
  ...(isMobile
    ? {
        borderRadius: 0,
        position: 'fixed',
        top: '0',
        flexDirection: 'column',
        width: '100%',
        ...(isOpenMenu ? { display: 'flex' } : { display: 'none' })
      }
    : { borderRadius: '40px' })
}));

export const HeaderNavItem = styled('li', {})(({ theme }) => ({ a: { color: theme.palette.grey?.[200], textDecoration: 'none' } }));
