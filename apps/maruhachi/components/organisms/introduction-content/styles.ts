'use client';

import Image from 'next/image';

import Subtitle from '@components/atoms/subtitle';
import { Button, styled, Typography } from '@mui/material';

import { motion } from 'framer-motion';

export const IntroContentWrap = styled(
  'div',
  {}
)(({ theme }) => ({
  ...theme.functions.adjustFlex('flex', 'column', 'flex-start', 'initial'),
  rowGap: '16px'
}));

export const IntroContentSubtitle = styled(Subtitle, {})(({}) => ({}));

export const IntroContentTitle = styled(motion(Typography), {})(({ theme }) => ({ color: theme.palette.maruhachi['contrastText'] }));

export const IntroContentDescription = styled(motion(Typography), {})(({}) => ({}));

export const IntroContentImages = styled(
  motion.div,
  {}
)(({ theme }) => ({
  ...theme.functions.adjustFlex('flex', 'row', 'flex-start', 'center'),
  columnGap: '16px',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    alignItems: 'flex-start'
  }
}));

export const IntroContentItem = styled(
  'div',
  {}
)(({ theme }) => ({
  ...theme.functions.adjustFlex('flex', 'row', 'flex-start', 'center'),
  columnGap: '8px'
}));

export const IntroContentIcon = styled(Image, {})(({}) => ({}));

export const IntroContentNotice = styled(motion(Typography), {})(({}) => ({}));

export const IntroContentButton = styled(motion(Button), {})(({}) => ({}));
