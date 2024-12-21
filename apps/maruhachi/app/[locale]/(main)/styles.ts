'use client';

import { styled } from '@mui/material';

export const LocaleWrapper = styled('div', {})(() => ({ overflow: 'hidden' }));

export const LocaleHeader = styled(
  'header',
  {}
)(({ theme }) => ({
  backgroundColor: theme.palette.maruhachi['light'],
  boxShadow: theme.shadows[4],
  padding: '8px 16px',
  position: 'fixed',
  zIndex: '1051',
  width: '100%'
}));

export const LocaleBody = styled(
  'main',
  {}
)(({ theme }) => ({
  backgroundColor: theme.palette.maruhachi['light'],
  paddingTop: '116px',
  [theme.breakpoints.down('lg')]: { paddingTop: '90px' }
}));

export const LocaleFooter = styled(
  'footer',
  {}
)(({ theme }) => ({
  backgroundColor: theme.palette.grey['200'],
  padding: '8px 16px'
}));
