'use client';

import { Swiper, SwiperSlide } from 'swiper/react';

import { alpha, Button, Container, styled, Typography } from '@mui/material';

export const BannerSwiper = styled(
  Swiper,
  {}
)(({ theme }) => ({
  '&.swiper-horizontal .swiper-scrollbar': { display: 'none' },
  '.swiper-button': {
    '&-prev, &-next': {
      display: 'none'
    }
  },
  '.swiper-pagination-bullet': {
    '&-active': {
      background: theme.palette.maruhachi['contrastText']
    }
  }
}));

export const BannerSwiperSlide = styled(
  SwiperSlide,
  {}
)(({ theme }) => ({
  '&.swiper-slide': {
    ...theme.functions.adjustFlex(),
    height: '80vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    '&:before': {
      content: '""',
      position: 'absolute',
      inset: 0,
      backgroundColor: theme.palette.grey['600'],
      zIndex: '-1',
      opacity: 0.2
    }
  }
}));

export const BannerWrap = styled(Container, {})(({}) => ({ maxWidth: '100%' }));

export const BannerBox = styled(
  'div',
  {}
)(({ theme }) => ({
  width: '100%',
  padding: '48px 0',
  WebkitBackdropFilter: 'saturate(180%) blur(10px)',
  backdropFilter: 'saturate(180%) blur(10px)',
  backgroundColor: alpha(theme.palette.common['white'], 0.6),
  boxShadow: theme.shadows[0]
}));

export const BannerContent = styled(
  'div',
  {}
)(({ theme }) => ({ ...theme.functions.adjustFlex('flex', 'column', 'flex-start', 'initial'), rowGap: '8px' }));

export const BannerTitle = styled(Typography, {})(({ theme }) => ({ color: theme.palette.maruhachi['contrastText'], fontSize: '5vw' }));

export const BannerSubtitle = styled(Typography, {})(({ theme }) => ({ color: theme.palette.mode['main'] }));

export const BannerDesc = styled(Typography, {})(({ theme }) => ({ color: theme.palette.mode['main'] }));

export const BannerButton = styled(Button, {})(({ theme }) => ({ width: '200px', height: '60px' }));

export const BannerSwiperArrow = styled(
  'div',
  {}
)(({ theme }) => ({ position: 'absolute', top: '50%', transform: 'translateY(-50%)', zIndex: 2, width: '100%', padding: '16px 10vw' }));
