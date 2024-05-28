'use client';

import { IconButton, styled } from '@mui/material';

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

export const HeaderNavList = styled(
  'ul',
  {}
)(({ theme }) => ({
  listStyleType: 'none',
  ...theme.functions.adjustFlex('flex', 'column'),
  rowGap: '16px',
  width: '300px',
  columnGap: '4vw',
  padding: '24px 16px',
  margin: 0
}));

export const HeaderNavItem = styled(
  'li',
  {}
)(({ theme }) => ({
  a: { color: theme.palette.grey?.[200], textDecoration: 'none' },
  width: '100%',
  backgroundColor: theme.palette.grey?.[700],
  borderRadius: '4px',
  overflow: 'hidden'
}));
