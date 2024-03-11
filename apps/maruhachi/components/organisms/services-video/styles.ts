'use client';

import { serviceSectionMock } from 'mocks';

import { Dialog, IconButton, Typography, styled } from '@mui/material';

export const SerVidWrap = styled(
  'div',
  {}
)(({ theme }) => ({
  ...theme.functions.adjustFlex('flex', 'column', 'center', 'center'),
  rowGap: '24px',
  height: serviceSectionMock.height,
  '&:before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    backgroundImage: 'url("/images/bg-parallax.jpg")',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    opacity: 0.8
  }
}));

export const SerVidTitle = styled(Typography, {})(({ theme }) => ({ zIndex: 1, color: theme.palette['maruhachi'], fontSize: '5vw' }));

export const SerVidButton = styled(
  IconButton,
  {}
)(({ theme }) => ({
  ...theme.functions.adjustFlex(),
  width: '160px',
  height: '160px',
  position: 'relative',
  svg: {
    zIndex: 1,
    viewBox: '0 0 96 96 !important',
    transform: 'scale(4)',
    'circle,path': {
      stroke: `${theme.palette['maruhachi']} !important`
    }
  }
}));

export const SerVidPing = styled(
  'div',
  {}
)(({ theme }) => ({
  zIndex: 0,
  position: 'absolute',
  top: '50%',
  left: '50%',
  width: '90px',
  height: '90px',
  transform: 'translate(-50%, -50%)',
  borderRadius: '50%',
  backgroundColor: theme.palette['maruhachi'],
  opacity: 0.8,
  animation: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
  '@keyframes ping': {
    '75%,100%': {
      transform: 'translate(-50%, -50%) scale(2)',
      opacity: 0
    }
  }
}));

export const SerVidDialog = styled(
  Dialog,
  {}
)(({ theme }) => ({
  '.MuiPaper-root': {
    maxWidth: '1200px',
    width: '1200px',
    maxHeight: '100%',
    aspectRatio: '16 / 12'
  },
  '.MuiDialogContent-root': {
    overflow: 'hidden',
    padding: 0
  }
}));

export const SerVideoCloseBtn = styled(
  IconButton,
  {}
)(({ theme }) => ({
  position: 'absolute',
  top: '-8px',
  right: '-8px'
}));
