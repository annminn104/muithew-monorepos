'use client';

import { styled } from '@mui/material';

export const AboutUsImgWrap = styled(
  'div',
  {}
)(({}) => ({
  width: '100%',
  aspectRatio: 1,
  '.swiper': {
    width: '240px',
    height: '320px'
  },
  '.swiper-slide': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '18px',
    fontSize: '22px',
    fontWeight: 'bold',
    color: '#fff'
  },
  '.swiper-slide:nth-child(1n)': {
    backgroundColor: 'rgb(206, 17, 17)'
  },
  '.swiper-slide:nth-child(2n)': {
    backgroundColor: 'rgb(0, 140, 255)'
  },
  '.swiper-slide:nth-child(3n)': {
    backgroundColor: 'rgb(10, 184, 111)'
  },
  '.swiper-slide:nth-child(4n)': {
    backgroundColor: 'rgb(211, 122, 7)'
  },
  '.swiper-slide:nth-child(5n)': {
    backgroundColor: 'rgb(118, 163, 12)'
  },
  '.swiper-slide:nth-child(6n)': {
    backgroundColor: 'rgb(180, 10, 47)'
  },
  '.swiper-slide:nth-child(7n)': {
    backgroundColor: 'rgb(35, 99, 19)'
  },
  '.swiper-slide:nth-child(8n)': {
    backgroundColor: 'rgb(0, 68, 255)'
  },
  '.swiper-slide:nth-child(9n)': {
    backgroundColor: 'rgb(218, 12, 218)'
  },
  '.swiper-slide:nth-child(10n)': {
    backgroundColor: 'rgb(54, 94, 77)'
  }
}));
