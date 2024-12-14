'use client';

import { Button, styled } from '@mui/material';

export const ContactFormWrap = styled('form', {})(({}) => ({}));

export const ContactFormSubmit = styled(
  Button,
  {}
)(({ theme }) => ({ height: '60px', fontSize: '24px', fontWeight: 'bold', [theme.breakpoints.down('md')]: { height: '48px' } }));
