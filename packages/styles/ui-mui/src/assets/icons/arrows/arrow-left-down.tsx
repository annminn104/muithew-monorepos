import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function ArrowLeftDownIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path d='M18 6L6 18M6 18L6 9M6 18L15 18' stroke={linearColor} strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
    </SvgIcon>
  );
}

export default ArrowLeftDownIcon;
