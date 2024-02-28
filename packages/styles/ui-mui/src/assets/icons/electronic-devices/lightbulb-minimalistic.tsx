import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function LightbulbMinimalisticIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M10 19.5h4M10.667 22h2.666' />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M7.41 13.68l1.105 1.04c.31.291.485.698.485 1.123C9 16.482 9.518 17 10.157 17h3.686c.639 0 1.157-.518 1.157-1.157 0-.425.176-.832.485-1.123l1.104-1.04c1.542-1.461 2.402-3.382 2.41-5.378L19 8.218C19 4.807 15.866 2 12 2S5 4.807 5 8.218v.084c.009 1.996.87 3.917 2.41 5.379z'
      />
    </SvgIcon>
  );
}

export default LightbulbMinimalisticIcon;
