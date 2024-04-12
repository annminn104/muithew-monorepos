import { styled, TextField } from '@mui/material';
import { SearchIcon } from '@styles/ui-mui/icons';

export const Header = styled(
  'div',
  {}
)(({ theme }) => ({
  ...theme.functions.adjustFlex('flex', 'row', 'flex-start', 'center'),
  columnGap: '16px'
}));

export const HeaderLeft = styled(
  'div',
  {}
)(({ theme }) => ({
  ...theme.functions.adjustFlex('flex', 'row', 'flex-start', 'center'),
  columnGap: '8px'
}));

export const HeaderLeftInputSearch = styled(TextField, {})(() => ({ svg: { opacity: 0.6 } }));

export const HeaderLeftIcon = styled(SearchIcon, {})(() => ({}));

export const HeaderRight = styled('div', {})(() => ({}));
