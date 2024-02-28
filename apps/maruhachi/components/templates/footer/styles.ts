'use client';

import { Container, Typography, styled } from '@mui/material';

export const FooterWrapper = styled(
  Container,
  {}
)(({ theme }) => ({
  ...theme.functions.adjustFlex()
}));

export const FooterLogo = styled(
  'div',
  {}
)(({ theme }) => ({
  ...theme.functions.adjustFlex('flex', 'column')
}));

export const FooterLogoImg = styled(
  'div',
  {}
)(({ theme }) => ({
  width: 48,
  height: 48,
  backgroundColor: theme.palette.grey['400']
}));

export const FooterLogoName = styled(
  Typography,
  {}
)(({ theme }) => ({
  color: theme.palette.info['main']
}));

export const FooterTitle = styled(Typography, {})(({ theme }) => ({}));
