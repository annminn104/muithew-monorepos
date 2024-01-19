import { layoutMock } from '@/common/mocks';
import { styled } from '@mui/material';

export const DashBoard = styled(
  'div',
  {}
)(({ theme }) => ({
  ...theme.functions.adjustFlex('flex', 'row', 'initial', 'inherit'),
  columnGap: '16px'
}));

export const DashBoardSidebar = styled('div', {})(() => ({}));

export const DashBoardMain = styled(
  'div',
  {}
)(({ theme }) => ({
  ...theme.functions.adjustFlex('flex', 'column', 'flex-start', 'initial'),
  rowGap: '16px',
  width: '100%'
}));

export const DashBoardHeader = styled(
  'div',
  {}
)(({ theme }) => ({
  ...theme.functions.adjustFlex('flex', 'column', 'center', 'initial'),
  border: '1px solid red',
  height: layoutMock.headerH,
  padding: '4px 16px'
}));

export const DashBoardBreadcrumb = styled(
  'div',
  {}
)(({ theme }) => ({
  ...theme.functions.adjustFlex('flex', 'column', 'center', 'initial'),
  border: '1px solid red',
  height: layoutMock.breadcrumbH,
  padding: '4px 16px'
}));

export const DashBoardContent = styled(
  'div',
  {}
)(() => ({
  border: '1px solid red',
  padding: '4px 16px',
  minHeight: `calc(100vh - ${layoutMock.headerH} - ${layoutMock.footerH} - ${layoutMock.breadcrumbH} - 16px * 3)`
}));

export const DashBoardFooter = styled(
  'div',
  {}
)(({ theme }) => ({
  ...theme.functions.adjustFlex('flex', 'column', 'center', 'initial'),
  border: '1px solid red',
  padding: '4px 16px',
  height: layoutMock.footerH
}));
