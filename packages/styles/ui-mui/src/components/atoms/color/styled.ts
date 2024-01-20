import { Grid, Typography, styled } from '@mui/material';

export const ColorWrap = styled(
  'div',
  {}
)(({ theme }) => ({
  padding: theme.functions.pxToRem(16)
}));

export const ColorList = styled(Grid, {})(() => ({}));

export const ColorItem = styled(Grid, {})(() => ({}));

export const ColorTitle = styled(
  Typography,
  {}
)(({ theme }) => ({
  textTransform: 'capitalize',
  marginBottom: theme.functions.pxToRem(4)
}));

export const ColorBox = styled(Grid, {})(() => ({}));

export const ColorBoxShadow = styled(
  'div',
  {}
)(({ theme }) => ({
  padding: theme.functions.pxToRem(8),
  boxShadow: theme.shadows[4],
  borderRadius: theme.functions.pxToRem(8)
}));

export const ColorBoxBackground = styled(
  'div',
  {}
)(({ theme }) => ({
  width: '100%',
  height: theme.functions.pxToRem(48),
  borderRadius: theme.functions.pxToRem(4),
  marginBottom: theme.functions.pxToRem(4)
}));

export const ColorName = styled(
  'div',
  {}
)(({ theme }) => ({
  ...theme.functions.adjustFlex('flex', 'row', 'space-between')
}));
