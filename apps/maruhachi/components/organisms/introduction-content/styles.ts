'use client';

import Image from 'next/image';

import { Button, styled, Typography } from '@mui/material';

import { motion } from 'framer-motion';

export const IntroContentWrap = styled(
  'div',
  {}
)(({ theme }) => ({
  ...theme.functions.adjustFlex('flex', 'column', 'flex-start', 'initial'),
  rowGap: '16px'
}));

export const IntroContentTabTitle = styled(motion(Typography), {})(({ theme }) => ({ color: theme.palette.maruhachi['contrastText'] }));

export const IntroContentTabWrap = styled(
  'div',
  {}
)(({ theme }) => ({
  ...theme.functions.adjustFlex('flex', 'column', 'flex-start', 'initial'),
  rowGap: '16px'
}));

export const IntroContentTabContentImages = styled(
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

export const IntroContentTabContentItem = styled(
  'div',
  {}
)(({ theme }) => ({
  ...theme.functions.adjustFlex('flex', 'column', 'flex-start', 'center'),
  width: '100%',
  columnGap: '8px'
}));

export const IntroContentTabContentIcon = styled(
  Image,
  {}
)(({}) => ({
  objectFit: 'contain'
}));

export const IntroContentTabSubtitle = styled(motion(Typography), {})(({}) => ({}));

export const IntroContentTabContentWrap = styled(
  'div',
  {}
)(({ theme }) => ({ padding: '12px', borderRadius: '8px', backgroundColor: theme.palette.grey['200'] }));

export const IntroContentTabDescription = styled(
  'div',
  {}
)(({ theme }) => ({
  ...theme.functions.adjustFlex('flex', 'column', 'flex-start', 'initial'),
  rowGap: '24px'
}));

export const IntroContentTabDescriptionItem = styled(motion(Typography), {})(({}) => ({ marginBottom: '8px' }));

export const IntroContentButton = styled(motion(Button), {})(({}) => ({}));
