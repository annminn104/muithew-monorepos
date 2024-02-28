'use client';

import Body from '@components/templates/body';
import Footer from '@components/templates/footer';
import Header from '@components/templates/header';
import { styled } from '@mui/material';

export const LocaleWrapper = styled('div', {})(() => ({}));

export const LocaleHeader = styled(
  'header',
  {}
)(({ theme }) => ({
  backgroundColor: theme.palette.grey['200'],
  padding: '8px 16px'
}));

export const LocaleHeaderContent = styled(Header, {})(() => ({}));

export const LocaleBody = styled(
  'main',
  {}
)(({ theme }) => ({
  backgroundColor: theme.palette.grey['100'],
  padding: '8px 16px'
}));

export const LocaleBodyContent = styled(Body, {})(() => ({}));

export const LocaleFooter = styled(
  'footer',
  {}
)(({ theme }) => ({
  backgroundColor: theme.palette.grey['200'],
  padding: '8px 16px'
}));

export const LocaleFooterContent = styled(Footer, {})(() => ({}));
