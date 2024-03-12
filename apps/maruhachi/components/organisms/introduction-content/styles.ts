'use client';

import Image from 'next/image';

import Subtitle from '@components/atoms/subtitle';
import { Button, styled, Typography } from '@mui/material';

export const IntroContentWrap = styled(
  'div',
  {}
)(({ theme }) => ({
  ...theme.functions.adjustFlex('flex', 'column', 'flex-start', 'initial'),
  rowGap: '16px'
}));

export const IntroContentSubtitle = styled(Subtitle, {})(({}) => ({}));

export const IntroContentTitle = styled(Typography, {})(({ theme }) => ({ color: theme.palette.maruhachi['contrastText'] }));

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
