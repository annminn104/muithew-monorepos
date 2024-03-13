'use client';

import { Typography, styled } from '@mui/material';

import Image from 'next/image';

export const AboutUsInfoLeft = styled(
  'div',
  {}
)(({ theme }) => ({
  ...theme.functions.adjustFlex('flex', 'column', 'flex-start', 'center'),
  rowGap: '8px',
  padding: '16px'
}));

export const AboutUsInfoImage = styled(
  Image,
  {}
)(({ theme }) => ({
  objectFit: 'cover',
  borderRadius: '50%',
  border: `8px solid ${theme.palette.maruhachi['dark']}`,
  padding: '4px',
  width: '100%',
  height: '100%',
  aspectRatio: '1 / 1'
}));

export const AboutUsInfoName = styled(Typography, {})(({ theme }) => ({ color: theme.palette.maruhachi['contrastText'], fontWeight: 'bold' }));

export const AboutUsInfoPosition = styled(Typography, {})(({ theme }) => ({}));

export const AboutUsInfoRight = styled('div', {})(({ theme }) => ({}));

export const AboutUsInfoQuote = styled(Typography, {})(({ theme }) => ({ b: { color: theme.palette.maruhachi['contrastText'] } }));
