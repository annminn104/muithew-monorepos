import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function FiltersIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeWidth='1.5' d='M18 8A6 6 0 116 8a6 6 0 0112 0zM6.5 10.189a6 6 0 107.106 3.669M12 20.472a6 6 0 105.5-10.283' />
    </SvgIcon>
  );
}

export default FiltersIcon;
