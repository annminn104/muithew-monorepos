import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function DoubleAltArrowDownIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path d='M19 11L12 17L5 11' stroke={linearColor} strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
      <path d='M19 7L12 13L5 7' stroke={linearColor} strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
    </SvgIcon>
  );
}

export default DoubleAltArrowDownIcon;
