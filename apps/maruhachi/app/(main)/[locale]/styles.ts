'use client';

import Body from '@components/templates/body';
import Footer from '@components/templates/footer';
import Header from '@components/templates/header';
import { styled } from '@mui/material';

export const MainWrapper = styled('div', {})(() => ({}));

export const MainHeader = styled(
  'header',
  {}
)(({ theme }) => ({
  backgroundColor: theme.palette.grey['200'],
  padding: '8px 16px'
}));

export const MainHeaderContent = styled(Header, {})(() => ({}));

export const MainBody = styled(
  'main',
  {}
)(({ theme }) => ({
  backgroundColor: theme.palette.grey['100'],
  padding: '8px 16px'
}));

export const MainBodyContent = styled(Body, {})(() => ({}));

export const MainFooter = styled(
  'footer',
  {}
)(({ theme }) => ({
  backgroundColor: theme.palette.grey['200'],
  padding: '8px 16px'
}));

export const MainFooterContent = styled(Footer, {})(() => ({}));
