'use client';

import { IconButton, styled } from '@mui/material';

export const SwiperArrowWrap = styled('div', {})(({ theme }) => ({ ...theme.functions.adjustFlex('flex', 'row', 'space-between'), width: '100%' }));

export const SwiperArrowBtn = styled(
  IconButton,
  {}
)(({ theme }) => ({ svg: { transform: 'scale(2)', path: { stroke: theme.palette.maruhachi['contrastText'] } }, width: '100px', height: '100px' }));
