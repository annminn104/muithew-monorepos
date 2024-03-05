'use client';

import Link from 'next/link';

import LocaleSwitcher from '@components/molecules/locale-switcher';
import { Button, styled } from '@mui/material';
import { PhoneCallingIcon } from '@styles/ui-mui/icons';

export const NavWrap = styled(
  'div',
  {}
)(({ theme }) => ({
  ...theme.functions.adjustFlex('flex', 'row', 'space-between', 'center')
}));

export const NavLeft = styled('div', {})(({}) => ({}));

export const NavCenter = styled('div', {})(({}) => ({}));

export const NavRight = styled(
  'div',
  {}
)(({ theme }) => ({
  ...theme.functions.adjustFlex(),
  columnGap: '16px'
}));

export const NavLogo = styled(
  'div',
  {}
)(({ theme }) => ({
  ...theme.functions.adjustFlex(),
  width: 160,
  height: 40,
  backgroundColor: theme.palette.grey['300']
}));

export const NavLanguages = styled(LocaleSwitcher, {})(({}) => ({}));

export const NavContactBtn = styled(
  Button,
  {}
)(({ theme }) => ({
  ...theme.functions.adjustFlex(),
  columnGap: '8px',
  color: theme.palette.text['primary']
}));

export const NavContactBtnIcon = styled(PhoneCallingIcon, {})(({}) => ({}));

export const NavContactBtnContent = styled(
  'div',
  {}
)(({ theme }) => ({
  ...theme.functions.adjustFlex('flex', 'column', 'flex-start', 'initial'),
  textAlign: 'left',
  textTransform: 'initial'
}));

export const NavLinkList = styled(
  'div',
  {}
)(({ theme }) => ({
  ...theme.functions.adjustFlex(),
  columnGap: '8px'
}));

export const NavLinkItem = styled(
  Link,
  {}
)(({ theme }) => ({
  padding: '4px 8px',
  minWidth: '120px',
  textAlign: 'center',
  textDecoration: 'none',
  color: theme.palette.text['primary']
}));
