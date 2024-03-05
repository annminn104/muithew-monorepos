import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function AltArrowRightIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path d='M9 5L15 12L9 19' stroke={linearColor} strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
    </SvgIcon>
  );
}

export default AltArrowRightIcon;
