'use client';

import Image from 'next/image';

import { Grid, styled, Typography } from '@mui/material';

export const AboutUsGalleryWrap = styled(Grid, {})(({}) => ({}));

export const AboutUsGalleryItem = styled(
  'div',
  {}
)(({ theme }) => ({
  ...theme.functions.adjustFlex('flex', 'column', 'flex-start', 'center'),
  borderRadius: '8px',
  padding: '8px',
  overflow: 'hidden',
  boxShadow: theme.shadows[4]
}));

export const AboutUsGalleryImg = styled(Image, {})(({}) => ({ objectFit: 'cover', borderRadius: '8px', width: '100%' }));

export const AboutUsGalleryName = styled(Typography, {})(({}) => ({ fontWeight: 'bold' }));

export const AboutUsGalleryPosition = styled(Typography, {})(({}) => ({}));
