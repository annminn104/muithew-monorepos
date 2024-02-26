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
  width: 60,
  height: 60,
  backgroundColor: theme.palette.info['light']
}));

export const FooterLogoName = styled(
  Typography,
  {}
)(({ theme }) => ({
  color: theme.palette.info['main']
}));
