'use client';

import { alpha, styled } from '@mui/material';

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

export const HeaderNavList = styled(
  'ul',
  {}
)(({ theme }) => ({
  listStyleType: 'none',
  ...theme.functions.adjustFlex(),
  columnGap: '4vw',
  border: `1px solid ${theme.palette.grey?.[200]}`,
  padding: '16px 40px',
  borderRadius: '40px',
  margin: 0,
  backgroundColor: alpha(theme.palette.grey?.[900] || '#333', 1)
}));

export const HeaderNavItem = styled('li', {})(({ theme }) => ({ a: { color: theme.palette.grey?.[200], textDecoration: 'none' } }));
