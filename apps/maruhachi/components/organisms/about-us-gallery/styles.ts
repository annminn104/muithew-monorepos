'use client';

import { Swiper, SwiperSlide } from 'swiper/react';

import { styled } from '@mui/material';
import Image from 'next/image';

export const AboutUsImgWrap = styled(
  'div',
  {}
)(({ theme }) => ({
  width: '100%',
  aspectRatio: 1,
  '.swiper': {
    width: '320px',
    height: '480px'
  },
  [theme.breakpoints.down('md')]: {
    '.swiper': {
      width: '280px',
      height: '360px'
    }
  }
}));

export const AboutUsImgSwiper = styled(Swiper, {})(({ theme }) => ({}));

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

export const AboutUsImageSwiper = styled(Image, {})(({}) => ({}));
