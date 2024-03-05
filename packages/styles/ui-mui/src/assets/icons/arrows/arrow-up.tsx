import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function ArrowUpIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path d='M12 20L12 4M12 4L18 10M12 4L6 10' stroke={linearColor} strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
    </SvgIcon>
  );
}

export default ArrowUpIcon;
