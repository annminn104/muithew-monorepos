'use client';

import Image from 'next/image';

import { Grid, styled, Typography } from '@mui/material';

export const AboutUsGalleryWrap = styled(
  Grid,
  {}
)(({}) => ({
  '.swiper-horizontal .swiper-scrollbar': { display: 'none' },
  '.swiper-button': {
    '&-prev, &-next': {
      display: 'none'
    }
  }
}));

export const AboutUsGalleryItem = styled(
  'div',
  {}
)(({ theme }) => ({
  ...theme.functions.adjustFlex('flex', 'column', 'flex-start', 'center'),
  borderRadius: '8px',
  padding: '8px',
  overflow: 'hidden',
  border: `1px solid ${theme.palette.maruhachi['contrastText']}`
}));

export const AboutUsGalleryImg = styled(Image, {})(({}) => ({ objectFit: 'cover', borderRadius: '8px', width: '100%' }));

export const AboutUsGalleryName = styled(Typography, {})(({}) => ({ fontWeight: 'bold' }));

export const AboutUsGalleryPosition = styled(Typography, {})(({}) => ({}));

export const AboutUsGalleryArrow = styled(
  'div',
  {}
)(({}) => ({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  zIndex: 2,
  width: '100%',
  padding: '16px 0'
}));
