'use client';

import { styled, Typography } from '@mui/material';

export const LogoWrap = styled(
  'div',
  {}
)(({ theme }) => ({
  padding: '4px'
}));

export const LogoMain = styled(
  Typography,
  {}
)(({ theme }) => ({
  fontWeight: 'bold',
  lineHeight: 1.2
}));
