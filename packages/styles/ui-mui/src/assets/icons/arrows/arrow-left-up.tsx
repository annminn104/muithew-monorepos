import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function ArrowLeftUpIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path d='M18 18L6 6M6 6H15M6 6V15' stroke={linearColor} strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
    </SvgIcon>
  );
}

export default ArrowLeftUpIcon;
