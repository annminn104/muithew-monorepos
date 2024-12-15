'use client';

import { serviceSectionMock } from 'mocks';
import Image from 'next/image';

import { Button, styled, Typography } from '@mui/material';
import { RoundArrowRightIcon } from '@styles/ui-mui/icons';
import { motion } from 'framer-motion';

export const SerProWrap = styled('div', { shouldForwardProp: (prop) => prop !== 'clipPathHeight' })<{ clipPathHeight: number }>(
  ({ theme, clipPathHeight }) => ({
    zIndex: 1,
    color: theme.palette.maruhachi['contrastText'],
    '.MuiGrid-container .MuiGrid-item': {
      zIndex: 1
    },
    '&:before': {
      content: '""',
      top: `${serviceSectionMock.height}px`,
      left: 0,
      right: 0,
      width: '100%',
      height: `calc(100% - ${clipPathHeight + 127 + serviceSectionMock.height}px)`,
      position: 'absolute',
      backgroundColor: theme.palette.maruhachi['dark'],
      backgroundImage: 'url(/images/bg-service-product.svg)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      zIndex: 1
    },
    '&:after': {
      content: '""',
      top: `${serviceSectionMock.height}px`,
      left: 0,
      right: 0,
      width: '100%',
      height: `calc(100% - ${serviceSectionMock.height}px)`,
      position: 'absolute',
      backgroundColor: theme.palette.common['white'],
      zIndex: 0
    }
  })
);

export const SerProDivider = styled(
  'div',
  {}
)(({}) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  backgroundImage: 'url(/images/bg-divider-top.svg)',
  backgroundSize: '100%',
  width: '100%',
  height: `${serviceSectionMock.divider}px`,
  backgroundRepeat: 'no-repeat'
}));

export const SerProBox = styled('div', {})(({ theme }) => ({ ...theme.functions.adjustFlex('flex', 'column'), rowGap: '8px' }));

export const SerProLogo = styled(motion(Image), {})(({}) => ({ objectFit: 'cover' }));

export const SerProTitle = styled(motion(Typography), {})(({}) => ({}));

export const SerProItem = styled(
  motion.div,
  {}
)(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.maruhachi['dark'],
  borderRadius: '8px',
  overflow: 'hidden',
  boxShadow: theme.shadows['6']
}));

export const SerProItemImg = styled(Image, {})(({}) => ({ objectFit: 'cover', width: '100%', height: '220px' }));

export const SerProItemIcon = styled(
  Image,
  {}
)(({ theme }) => ({
  objectFit: 'cover',
  position: 'absolute',
  left: '50%',
  top: '180px',
  transform: 'translateX(-50%)',
  backgroundColor: theme.palette.maruhachi['dark'],
  padding: '4px',
  borderRadius: '50%'
}));

export const SerProItemText = styled(
  'div',
  {}
)(({ theme }) => ({
  ...theme.functions.adjustFlex('flex', 'column', 'flex-start', 'center'),
  rowGap: '8px',
  textAlign: 'center',
  marginTop: '40px',
  padding: '0px 16px 16px'
}));

export const SerProItemImgProduct = styled(
  Image,
  {}
)(({ theme }) => ({
  objectFit: 'cover',
  width: 'auto',
  height: '180px',
  filter: 'contrast(1)',
  [theme.breakpoints.down('md')]: { height: '120px' }
}));

export const SerProItemTitle = styled(Typography, {})(({}) => ({ fontWeight: 'bold' }));

export const SerProItemContent = styled(
  Typography,
  {}
)(({}) => ({ fontSize: '20px', display: '-webkit-box', '-webkit-line-clamp': '3', overflow: 'hidden', minHeight: '88px' }));

export const SerProItemName = styled(Typography, {})(({}) => ({ fontSize: '20px', fontWeight: 'medium' }));

export const SerProItemPrice = styled(Typography, {})(({ theme }) => ({ fontSize: '24px', fontWeight: 'bold', color: theme.palette.red['700'] }));

export const SerProItemButton = styled(
  Button,
  {}
)(({ theme }) => ({ width: '100%', color: theme.palette.maruhachi['contrastText'], fontSize: '24px', fontWeight: 'medium' }));

export const SerProItemButtonIcon = styled(RoundArrowRightIcon, {})(({ theme }) => ({}));
