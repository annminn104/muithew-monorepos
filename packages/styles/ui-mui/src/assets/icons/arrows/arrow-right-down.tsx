import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function ArrowRightDownIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path d='M6 6L18 18M18 18L18 9M18 18L9 18' stroke={linearColor} strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
    </SvgIcon>
  );
}

export default ArrowRightDownIcon;
