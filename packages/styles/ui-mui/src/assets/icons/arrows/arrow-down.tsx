import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function ArrowDownIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path d='M12 4L12 20M12 20L18 14M12 20L6 14' stroke={linearColor} strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
    </SvgIcon>
  );
}

export default ArrowDownIcon;
