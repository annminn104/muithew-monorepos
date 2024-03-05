import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function AltArrowLeftIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path d='M15 5L9 12L15 19' stroke={linearColor} strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
    </SvgIcon>
  );
}

export default AltArrowLeftIcon;
