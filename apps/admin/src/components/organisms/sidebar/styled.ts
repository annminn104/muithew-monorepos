import { layoutMock } from '@/common/mocks';
import { styled } from '@mui/material';

export const Sidebar = styled(
  'div',
  {}
)(({ theme }) => ({
  ...theme.functions.adjustFlex('flex', 'column', 'flex-start', 'initial'),
  rowGap: '16px',
  width: layoutMock.sidebarW,
  minHeight: '100vh',
  maxHeight: '100vh',
  border: '1px solid red'
}));

export const SidebarLogo = styled(
  'div',
  {}
)(({ theme }) => ({
  ...theme.functions.adjustFlex('flex', 'row', 'center', 'center'),
  height: layoutMock.headerH
}));

export const SidebarNavigation = styled(
  'div',
  {}
)(() => ({
  height: `calc(100vh - ${layoutMock.headerH} - 16px)`,
  padding: '4px 16px'
}));
