'use client';

import { styled, Typography } from '@mui/material';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Link from 'next/link';

export const SecContactWrap = styled('div', {})(({ theme }) => ({}));

export const SecContactTitle = styled(Typography, {})(({ theme }) => ({}));

export const SecContactList = styled(
  'div',
  {}
)(({ theme }) => ({ ...theme.functions.adjustFlex('flex', 'column', 'flex-start', 'center'), rowGap: '16px', marginBottom: '24px' }));

export const SecContactLink = styled(
  Link,
  {}
)(({ theme }) => ({
  ...theme.functions.adjustFlex('flex', 'row', 'flex-start', 'center'),
  columnGap: '8px',
  padding: '16px 24px',
  width: '100%',
  textDecoration: 'none',
  color: theme.palette.common?.['white'],
  svg: {
    path: {
      stroke: theme.palette.common?.['white']
    }
  }
}));

export const SecContactThreeJS = styled(
  Canvas,
  {}
)(({ theme }) => ({
  height: '500px !important',
  padding: '24px 0',
  '@media screen and (max-width: 768px)': {
    height: '250px !important'
  }
}));

export const SecContactOrbitControls = styled(OrbitControls, {})(({ theme }) => ({}));
