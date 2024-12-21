'use client';

import LocaleSwitcher from '@components/molecules/locale-switcher';
import { Button, styled } from '@mui/material';
import { PhoneCallingRoundedIcon } from '@styles/ui-mui/icons';
import Link from 'next/link';

export const NavWrap = styled(
  'div',
  {}
)(({ theme }) => ({ ...theme.functions.adjustFlex('flex', 'row', 'space-between', 'center'), color: theme.palette.maruhachi['contrastText'] }));

export const NavLeft = styled('div', {})(({}) => ({}));

export const NavCenter = styled('div', {})(({}) => ({}));

export const NavRight = styled('div', {})(({ theme }) => ({ ...theme.functions.adjustFlex(), columnGap: '16px' }));

export const NavLogo = styled('div', {})(({ theme }) => ({ ...theme.functions.adjustFlex() }));

export const NavLanguages = styled(LocaleSwitcher, {})(({}) => ({}));

export const NavContactBtn = styled(
  Button,
  {}
)(({ theme }) => ({
  ...theme.functions.adjustFlex(),
  columnGap: '8px',
  color: theme.palette.maruhachi['contrastText'],
  svg: {
    path: {
      stroke: theme.palette.maruhachi['contrastText']
    }
  },
  [theme.breakpoints.down('lg')]: { display: 'none' }
}));

export const NavContactBtnIcon = styled(PhoneCallingRoundedIcon, {})(({ theme }) => ({}));

export const NavContactBtnContent = styled(
  'div',
  {}
)(({ theme }) => ({
  ...theme.functions.adjustFlex('flex', 'column', 'flex-start', 'initial'),
  textAlign: 'left',
  textTransform: 'initial',
  color: theme.palette.maruhachi['contrastText']
}));

export const NavLinkList = styled(
  'div',
  {}
)(({ theme }) => ({ ...theme.functions.adjustFlex(), columnGap: '8px', [theme.breakpoints.down('lg')]: { display: 'none' } }));

export const NavLinkItem = styled(
  Button,
  {}
)(({ theme }) => ({
  padding: '4px 8px',
  height: '64px',
  minWidth: '120px',
  textAlign: 'center',
  textDecoration: 'none',
  color: theme.palette.maruhachi['contrastText']
}));

export const NavLinkTel = styled(
  Link,
  {}
)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.maruhachi['contrastText'],
  display: 'flex'
}));
