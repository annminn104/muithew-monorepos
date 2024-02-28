import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function ExportIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M4 12a8 8 0 1016 0' />
      <path stroke={linearColor} strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M12 14V4m0 0l3 3m-3-3L9 7' />
    </SvgIcon>
  );
}

export default ExportIcon;
