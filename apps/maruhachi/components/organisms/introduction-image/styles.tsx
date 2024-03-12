'use client';

import { alpha, styled } from '@mui/material';
import Image from 'next/image';

export const IntroWrap = styled(
  'div',
  {}
)(({ theme }) => ({
  display: 'flex',
  position: 'relative',
  paddingBottom: '135px'
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
    left: '-80%',
    top: '50%',
    width: '80%',
    aspectRatio: '1 / 1',
    backgroundColor: alpha(theme.palette.maruhachi['main'], 0.6),
    borderRadius: '50%',
    transform: 'translate(50%, -50%)',
    zIndex: -1
  }
}));

export const IntroVerticalImg = styled(
  Image,
  {}
)(({ theme }) => ({
  objectFit: 'cover',
  borderRadius: '8px',
  boxShadow: theme.shadows['8'],
  opacity: '0.8'
}));

export const IntroVerticalLogo = styled(
  Image,
  {}
)(({ width }) => ({
  objectFit: 'cover',
  position: 'absolute',
  left: `calc(-${width}px / 2)`,
  top: '50%',
  transform: 'translateY(-50%)'
}));

export const IntroHorizontal = styled('div', {})(({ theme }) => ({}));

export const IntroHorizontalImg = styled(
  Image,
  {}
)(({ theme }) => ({
  objectFit: 'cover',
  position: 'absolute',
  right: 0,
  bottom: 0,
  borderRadius: '8px',
  boxShadow: theme.shadows['8']
}));
