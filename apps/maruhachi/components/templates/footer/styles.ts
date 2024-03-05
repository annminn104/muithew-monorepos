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
  ...theme.functions.adjustFlex(),
  width: 48,
  height: 48,
  backgroundColor: theme.palette.grey['300']
}));

export const FooterLogoName = styled(
  Typography,
  {}
)(({ theme }) => ({
  color: theme.palette.info['main']
}));

export const FooterInfoTitle = styled(Typography, {})(({}) => ({}));

export const FooterInfoContent = styled(
  'div',
  {}
)(({ theme }) => ({
  ...theme.functions.adjustFlex('flex', 'row', 'flex-start', 'center'),
  columnGap: '8px'
}));
