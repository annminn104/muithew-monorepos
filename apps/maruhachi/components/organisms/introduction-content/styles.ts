'use client';

import { Button, styled, Typography } from '@mui/material';

import Image from 'next/image';

export const IntroContentWrap = styled(
  'div',
  {}
)(({ theme }) => ({
  ...theme.functions.adjustFlex('flex', 'column', 'flex-start', 'initial'),
  rowGap: '16px'
}));

export const IntroContentSubtitle = styled(Typography, {})(({}) => ({}));

export const IntroContentTitle = styled(Typography, {})(({}) => ({}));

export const IntroContentDescription = styled(Typography, {})(({}) => ({}));

export const IntroContentImages = styled(
  'div',
  {}
)(({ theme }) => ({
  ...theme.functions.adjustFlex('flex', 'row', 'flex-start', 'center'),
  columnGap: '16px'
}));

export const IntroContentItem = styled(
  'div',
  {}
)(({ theme }) => ({
  ...theme.functions.adjustFlex('flex', 'row', 'flex-start', 'center'),
  columnGap: '8px'
}));

export const IntroContentIcon = styled(Image, {})(({}) => ({}));

export const IntroContentNotice = styled(Typography, {})(({}) => ({}));

export const IntroContentButton = styled(Button, {})(({}) => ({}));
