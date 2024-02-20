import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function CalenderAddIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M2 12c0-3.771 0-5.657 1.172-6.828C4.343 4 6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172C22 6.343 22 8.229 22 12v2c0 3.771 0 5.657-1.172 6.828C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172C2 19.657 2 17.771 2 14v-2z'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M18 16h-2m0 0h-2m2 0v-2m0 2v2M7 4V2.5M17 4V2.5M2.5 9h19' />
    </SvgIcon>
  );
}

export default React.memo(CalenderAddIcon);
