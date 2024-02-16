import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function WaterDropIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M3 13.193C3 18.057 6.855 22 11.611 22h.777C17.145 22 21 18.057 21 13.193v-.265c0-4.611-2.729-8.765-6.903-10.507a5.434 5.434 0 00-4.194 0C5.73 4.163 3 8.317 3 12.928v.265z'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M7.615 10.724c.634-2.006 2.016-3.636 3.77-4.448' />
    </SvgIcon>
  );
}

export default React.memo(WaterDropIcon);
