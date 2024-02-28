import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function SatelliteIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M20.47 10.918a5.224 5.224 0 01-7.388-7.388m7.388 7.388a5.224 5.224 0 00-7.388-7.388m7.388 7.388s-1.847-.615-4.31-3.078m4.31 3.078L14.313 22M13.082 3.53s.616 1.847 3.078 4.31m-3.078-4.31L2 9.687M16.16 7.84L5 19'
      />
    </SvgIcon>
  );
}

export default SatelliteIcon;
