'use client';

import { styled } from '@mui/material';
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
    backgroundColor: theme.palette.grey[300],
    borderRadius: '50%',
    transform: 'translate(50%, -50%)',
    zIndex: -1
  }
}));

export const IntroVerticalImg = styled(
  Image,
  {}
)(({}) => ({
  objectFit: 'cover',
  borderRadius: '8px',
  boxShadow: 'rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px',
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
)(({}) => ({
  objectFit: 'cover',
  position: 'absolute',
  right: 0,
  bottom: 0,
  borderRadius: '8px',
  boxShadow: 'rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px'
}));
