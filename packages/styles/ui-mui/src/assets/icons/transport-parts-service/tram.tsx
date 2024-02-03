import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function TramIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M4 10c0-3.771 0-5.657 1.172-6.828C6.343 2 8.229 2 12 2c3.771 0 5.657 0 6.828 1.172C20 4.343 20 6.229 20 10v2c0 3.771 0 5.657-1.172 6.828C17.657 20 15.771 20 12 20c-3.771 0-5.657 0-6.828-1.172C4 17.657 4 15.771 4 12v-2z'
      />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M4 13h16M15.5 16H17M7 16h1.5M7 20l-1 2M17 20l1 2M10 2v.5a2 2 0 104 0V2'
      />
    </SvgIcon>
  );
}

export default React.memo(TramIcon);
