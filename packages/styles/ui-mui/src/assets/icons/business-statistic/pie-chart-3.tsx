import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function PieChart3Icon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M6.444 3.685a10 10 0 011.662-.896c1.403-.593 2.104-.89 3-.296C12 3.086 12 4.057 12 6v2c0 1.885 0 2.828.586 3.414C13.172 12 14.114 12 16 12h2c1.942 0 2.914 0 3.507.895s.297 1.596-.296 3a10.002 10.002 0 01-11.162 5.913A10 10 0 016.444 3.685z'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M14.5 2.315c3.514.904 6.28 3.67 7.185 7.185' />
    </SvgIcon>
  );
}

export default PieChart3Icon;
