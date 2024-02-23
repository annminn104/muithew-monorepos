import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function ServerSquareIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M2 11c0-3.771 0-5.657 1.172-6.828C4.343 3 6.229 3 10 3h4c3.771 0 5.657 0 6.828 1.172C22 5.343 22 7.229 22 11v2c0 3.771 0 5.657-1.172 6.828C19.657 21 17.771 21 14 21h-4c-3.771 0-5.657 0-6.828-1.172C2 18.657 2 16.771 2 13v-2zM2 12h20'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M13.5 16.5H18M13.5 7.5H18M6 17.5v-2M6 8.5v-2M9 17.5v-2M9 8.5v-2'></path>
    </SvgIcon>
  );
}

export default React.memo(ServerSquareIcon);
