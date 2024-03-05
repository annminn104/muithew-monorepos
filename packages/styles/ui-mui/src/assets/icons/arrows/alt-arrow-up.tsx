import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function AltArrowUpIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path d='M19 15L12 9L5 15' stroke={linearColor} strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
    </SvgIcon>
  );
}

export default AltArrowUpIcon;
