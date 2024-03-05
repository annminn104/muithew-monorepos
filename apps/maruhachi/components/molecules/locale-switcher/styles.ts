'use client';

import { styled } from '@mui/material';

export const LocaleSwWrap = styled(
  'div',
  {}
)(({ theme }) => ({
  ...theme.functions.adjustFlex(),
  column: '8px'
}));
