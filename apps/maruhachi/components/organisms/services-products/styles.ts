'use client';

import Image from 'next/image';

import { styled, Typography } from '@mui/material';

export const SerProWrap = styled('div', { shouldForwardProp: (prop) => prop !== 'clipPathHeight' })<{ clipPathHeight: number }>(
  ({ theme, clipPathHeight }) => ({
    zIndex: 1,
    color: theme.palette.common['white'],
    '&:before': {
      content: '""',
      top: '500px',
      left: 0,
      right: 0,
      width: '100%',
      height: `calc(100% - ${clipPathHeight + 127 + 500}px)`,
      position: 'absolute',
      backgroundColor: theme.palette.warning['main'],
      zIndex: 0
    }
  })
);

export const SerProBox = styled('div', {})(({ theme }) => ({ ...theme.functions.adjustFlex('flex', 'column'), rowGap: '8px' }));

export const SerProLogo = styled(Image, {})(({}) => ({ objectFit: 'cover' }));

export const SerProSubtitle = styled(Typography, {})(({}) => ({}));

export const SerProTitle = styled(Typography, {})(({}) => ({}));

export const SerProItem = styled(
  'div',
  {}
)(({ theme }) => ({ position: 'relative', backgroundColor: theme.palette.warning['main'], borderRadius: '8px', overflow: 'hidden' }));

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
  backgroundColor: theme.palette.warning['main'],
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

export const SerProItemTitle = styled(Typography, {})(({}) => ({}));

export const SerProItemContent = styled(Typography, {})(({}) => ({}));
