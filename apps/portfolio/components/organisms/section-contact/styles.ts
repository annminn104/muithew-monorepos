'use client';

import { styled, Typography } from '@mui/material';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const ThreeView = dynamic(() => import('@/components/organisms/three-view'), { ssr: false, loading: null });

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
  ThreeView,
  {}
)(({ theme }) => ({
  '& > *': {
    height: '500px !important',
    padding: '24px 0',
    '@media screen and (max-width: 768px)': {
      height: '250px !important'
    }
  }
}));
