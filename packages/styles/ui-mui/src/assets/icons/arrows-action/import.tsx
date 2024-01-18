import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function ImportIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M4 12a8 8 0 1016 0' />
      <path stroke={linearColor} strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M12 4v10m0 0l3-3m-3 3l-3-3' />
    </SvgIcon>
  );
}

export default React.memo(ImportIcon);
