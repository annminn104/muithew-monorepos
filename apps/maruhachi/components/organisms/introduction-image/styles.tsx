'use client';

import { styled } from '@mui/material';
import Image from 'next/image';

export const IntroWrap = styled(
  'div',
  {}
)(({ theme }) => ({
  display: 'flex',
  position: 'relative',
  paddingBottom: '60px'
}));

export const IntroVertical = styled(
  'div',
  {}
)(({ theme }) => ({
  position: 'relative',
  zIndex: 0,
  '&:after': {
    content: '""',
    position: 'absolute',
    left: '-175px',
    top: '50%',
    width: '350px',
    height: '350px',
    aspectRatio: '1 / 1',
    backgroundColor: theme.palette.grey[300],
    borderRadius: '50%',
    transform: 'translateY(-50%)',
    zIndex: -1
  }
}));

export const IntroVerticalImg = styled(
  Image,
  {}
)(({}) => ({
  objectFit: 'cover',
  borderRadius: '8px',
  boxShadow: 'rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px'
}));

export const IntroHorizontal = styled('div', {})(({ theme }) => ({}));

export const IntroHorizontalImg = styled(
  Image,
  {}
)(({}) => ({
  objectFit: 'cover',
  position: 'absolute',
  right: 0,
  bottom: 0,
  borderRadius: '8px',
  boxShadow: 'rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px'
}));
