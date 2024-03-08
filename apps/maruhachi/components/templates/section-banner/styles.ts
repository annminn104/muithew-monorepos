'use client';

import { Swiper, SwiperSlide } from 'swiper/react';

import { alpha, Button, Container, styled, Typography } from '@mui/material';

export const BannerSwiper = styled(Swiper, {})(({}) => ({ '&.swiper-horizontal .swiper-scrollbar': { display: 'none' } }));

export const BannerSwiperSlide = styled(
  SwiperSlide,
  {}
)(({ theme }) => ({
  '&.swiper-slide': {
    ...theme.functions.adjustFlex(),
    height: '70vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    '&:before': {
      content: '""',
      position: 'absolute',
      inset: 0,
      backgroundColor: theme.palette.grey['500'],
      zIndex: '-1',
      opacity: 0.4
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
  backgroundColor: alpha(theme.palette.common['white'], 0.4),
  boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
}));

export const BannerContent = styled(
  'div',
  {}
)(({ theme }) => ({ ...theme.functions.adjustFlex('flex', 'column', 'flex-start', 'initial'), rowGap: '8px' }));

export const BannerTitle = styled(Typography, {})(({ theme }) => ({ color: theme.palette.warning['main'] }));

export const BannerSubtitle = styled(Typography, {})(({ theme }) => ({ color: theme.palette.mode['main'] }));

export const BannerDesc = styled(Typography, {})(({ theme }) => ({ color: theme.palette.mode['main'] }));

export const BannerButton = styled(
  Button,
  {}
)(({ theme }) => ({
  width: '200px',
  height: '60px'
}));
