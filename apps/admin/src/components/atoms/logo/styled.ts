import { Typography, styled } from '@mui/material';

export const Logo = styled(
  'div',
  {}
)(({ theme }) => ({
  ...theme.functions.adjustFlex('flex', 'row', 'flex-start'),
  columnGap: '8px'
}));

export const LogoImg = styled('img', {})(() => ({}));

export const LogoText = styled(
  Typography,
  {}
)(() => ({
  fontWeight: 'bold'
}));
