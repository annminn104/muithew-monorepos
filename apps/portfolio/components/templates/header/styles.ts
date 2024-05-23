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

export const HeaderNavIcon = styled(IconButton, {})(({}) => ({ zIndex: 999, position: 'fixed' }));

export const HeaderNavList = styled('ul', { shouldForwardProp: (prop) => prop !== 'isMobile' })<{ isMobile: boolean }>(({ theme, isMobile }) => ({
  listStyleType: 'none',
  ...theme.functions.adjustFlex(),
  columnGap: '4vw',
  border: `1px solid ${theme.palette.grey?.[200]}`,
  padding: '16px 40px',
  margin: 0,
  backgroundColor: alpha(theme.palette.grey?.[900] || '#333', 1),
  ...(isMobile ? { borderRadius: 0, position: 'fixed' } : { borderRadius: '40px' })
}));

export const HeaderNavItem = styled('li', {})(({ theme }) => ({ a: { color: theme.palette.grey?.[200], textDecoration: 'none' } }));
