import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function ArrowRightUpIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path d='M6 18L18 6M18 6H9M18 6V15' stroke={linearColor} strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
    </SvgIcon>
  );
}

export default ArrowRightUpIcon;
