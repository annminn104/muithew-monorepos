import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function ClosetIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M19 22v-.5M5 22v-.5M12 21V2M15 8v2' />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M2 10c0-3.771 0-5.657 1.172-6.828C4.343 2 6.229 2 10 2h4c3.771 0 5.657 0 6.828 1.172C22 4.343 22 6.229 22 10v3c0 3.771 0 5.657-1.172 6.828C19.657 21 17.771 21 14 21h-4c-3.771 0-5.657 0-6.828-1.172C2 18.657 2 16.771 2 13v-3z'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M2 8h10M2 15h20M15 18h2M7 18h2' />
    </SvgIcon>
  );
}

export default ClosetIcon;
