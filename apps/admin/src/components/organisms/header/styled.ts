import { styled } from '@mui/material';

export const Header = styled(
  'div',
  {}
)(({ theme }) => ({
  ...theme.functions.adjustFlex('flex', 'row', 'flex-start', 'center'),
  columnGap: '16px'
}));
