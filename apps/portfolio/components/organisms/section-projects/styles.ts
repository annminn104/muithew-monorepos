'use client';

import { styled, Typography } from '@mui/material';
import Link from 'next/link';

export const SecProWrap = styled('div', {})(({ theme }) => ({}));

export const SecProTitle = styled(Typography, {})(({ theme }) => ({ fontSize: '48px', textAlign: 'center', fontWeight: 'bold', margin: '24px 0' }));

export const SecProMore = styled(
  Link,
  {}
)(({ theme }) => ({
  ...theme.functions.adjustFlex('flex', 'row', 'center', 'center'),
  columnGap: '8px',
  marginTop: '16px',
  color: theme.palette.common?.['white'],
  fontSize: '22px',
  position: 'relative',
  overflow: 'hidden',
  '.MuiSvgIcon-root.linear': {
    path: {
      stroke: theme.palette.common?.['white']
    }
  }
}));
