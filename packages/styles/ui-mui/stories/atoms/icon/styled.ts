import { Box, styled } from '@mui/material';

export const IconWrap = styled(
  'div',
  {}
)(({ theme }) => ({
  ...theme.functions.adjustFlex('flex', 'column', 'flex-start', 'initial'),
  gap: theme.functions.pxToRem(12),
  padding: theme.functions.pxToRem(16)
}));

export const IconBox = styled(
  Box,
  {}
)(({ theme }) => ({
  ...theme.functions.adjustFlex('flex', 'row', 'flex-start', 'center'),
  gap: theme.functions.pxToRem(8),
  flexWrap: 'wrap',
  padding: theme.functions.pxToRem(8),
  border: `1px solid ${theme.palette.primary['main']}`,
  borderRadius: theme.functions.pxToRem(8),
  boxShadow: theme.shadows['3']
}));
