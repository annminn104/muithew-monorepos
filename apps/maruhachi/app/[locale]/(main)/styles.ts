'use client';

import { styled } from '@mui/material';

export const LocaleWrapper = styled('div', {})(() => ({}));

export const LocaleHeader = styled(
  'header',
  {}
)(({ theme }) => ({
  backgroundColor: theme.palette.maruhachi['light'],
  boxShadow: theme.shadows[4],
  padding: '8px 16px'
}));

export const LocaleBody = styled('main', {})(({ theme }) => ({ backgroundColor: theme.palette.maruhachi['light'] }));

export const LocaleFooter = styled(
  'footer',
  {}
)(({ theme }) => ({
  backgroundColor: theme.palette.grey['200'],
  padding: '8px 16px'
}));
