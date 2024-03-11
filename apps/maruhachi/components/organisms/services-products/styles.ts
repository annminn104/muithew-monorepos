'use client';

import { serviceSectionMock } from 'mocks';
import Image from 'next/image';

import { Button, Typography, styled } from '@mui/material';

export const SerProWrap = styled('div', { shouldForwardProp: (prop) => prop !== 'clipPathHeight' })<{ clipPathHeight: number }>(
  ({ theme, clipPathHeight }) => ({
    zIndex: 1,
    color: theme.palette.common['white'],
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
      backgroundColor: theme.palette['maruhachi'],
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
)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  backgroundImage: 'url(/images/bg-divider.svg)',
  backgroundSize: '100%',
  width: '100%',
  height: '34px',
  backgroundRepeat: 'no-repeat'
}));

export const SerProBox = styled('div', {})(({ theme }) => ({ ...theme.functions.adjustFlex('flex', 'column'), rowGap: '8px' }));

export const SerProLogo = styled(Image, {})(({}) => ({ objectFit: 'cover' }));

export const SerProSubtitle = styled(Typography, {})(({}) => ({}));

export const SerProTitle = styled(Typography, {})(({}) => ({}));

export const SerProItem = styled(
  'div',
  {}
)(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette['maruhachi'],
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
  backgroundColor: theme.palette['maruhachi'],
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

export const SerProItemButton = styled(
  Button,
  {}
)(({}) => ({
  width: '100%'
}));
