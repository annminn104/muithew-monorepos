'use client';

import { styled } from '@mui/material';
import { SwiperSlide } from 'swiper/react';

export const AboutUsImgWrap = styled(
  'div',
  {}
)(({ theme }) => ({
  width: '100%',
  aspectRatio: 1,
  '.swiper': {
    width: '320px',
    height: '480px'
  }
}));

export const AboutUsImgItem = styled(
  SwiperSlide,
  {}
)(({ theme }) => ({
  ...theme.functions.adjustFlex(),
  padding: '4px',
  borderRadius: '16px',
  fontWeight: 'bold',
  color: '#fff',
  border: `4px solid ${theme.palette.maruhachi['contrastText']}`,
  backgroundColor: theme.palette.maruhachi['light'],
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '8px'
  }
}));
