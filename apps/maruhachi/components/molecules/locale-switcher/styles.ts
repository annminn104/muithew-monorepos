'use client';

import { IconButton, styled } from '@mui/material';

export const LocaleSwWrap = styled('div', {})(({ theme }) => ({ ...theme.functions.adjustFlex(), column: '8px' }));

export const LocaleIconButton = styled(IconButton, { shouldForwardProp: (prop) => prop !== 'active' })<{ active: boolean }>(({ theme, active }) => ({
  border: `1px solid ${active ? theme.palette.maruhachi['main'] : 'transparent'}`,
  '&:hover': {
    border: `1px solid ${active ? theme.palette.maruhachi['main'] : 'transparent'}`
  }
}));
