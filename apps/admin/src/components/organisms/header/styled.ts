import { styled } from '@mui/material';

export const Header = styled(
  'div',
  {}
)(({ theme }) => ({
  ...theme.functions.adjustFlex('flex', 'row', 'space-between'),
  columnGap: '16px'
}));
