'use client';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Container, styled } from '@mui/material';

export const BannerSwiper = styled(
  Swiper,
  {}
)(({}) => ({
  '&.swiper-horizontal .swiper-scrollbar': {
    display: 'none'
  }
}));

export const BannerSwiperSlide = styled(
  SwiperSlide,
  {}
)(({}) => ({
  '&.swiper-slide': {
    height: '70vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }
}));

export const BannerWrap = styled(Container, {})(({}) => ({}));
