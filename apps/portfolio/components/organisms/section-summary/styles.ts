'use client';

import { styled } from '@mui/material';

export const SummaryWrap = styled('div', {})(({ theme }) => ({}));

export const SummaryTitle = styled(
  'h3',
  {}
)(({ theme }) => ({
  fontSize: '28px',
  color: theme.palette.common?.white,
  margin: 0
}));

export const SummaryContent = styled(
  'div',
  {}
)(({ theme }) => ({
  textIndent: '40px',
  fontSize: '16px',
  color: theme.palette.common?.white
}));

export const SummaryResume = styled('div', {})(({ theme }) => ({ ...theme.functions.adjustFlex() }));

export const SummarySocials = styled('div', {})(({ theme }) => ({ ...theme.functions.adjustFlex(), columnGap: '16px', marginTop: '16px' }));
