'use client';

import { IconButton, styled } from '@mui/material';

export const ContactHeaderBarWrap = styled(
  'div',
  {}
)(({ theme }) => ({ ...theme.functions.adjustFlex('flex', 'row', 'space-between'), color: theme.palette.maruhachi['contrastText'] }));

export const ContactHeaderBarInfo = styled(
  'div',
  {}
)(({ theme }) => ({
  ...theme.functions.adjustFlex(),
  columnGap: '8px',
  svg: {
    path: {
      stroke: theme.palette.maruhachi['contrastText']
    }
  },
  [theme.breakpoints.down('md')]: {
    '.MuiTypography-root': {
      display: 'none'
    }
  }
}));

export const ContactHeaderBarInfoItem = styled('div', {})(({ theme }) => ({ ...theme.functions.adjustFlex(), columnGap: '4px' }));

export const ContactHeaderBarSocial = styled('div', {})(({ theme }) => ({ ...theme.functions.adjustFlex() }));

export const ContactHeaderBarSocialItem = styled(
  IconButton,
  {}
)(({}) => ({
  width: '32px',
  height: '32px'
}));
