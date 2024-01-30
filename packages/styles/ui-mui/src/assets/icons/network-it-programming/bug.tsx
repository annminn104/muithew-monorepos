import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function BugIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeWidth='1.5' d='M19 15v-3.063A3.938 3.938 0 0015.062 8H8.939A3.938 3.938 0 005 11.938V15a7 7 0 1014 0z' />
      <path stroke={linearColor} strokeWidth='1.5' d='M16.5 8.5v-1a4.5 4.5 0 10-9 0v1' />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M19 14h3M5 14H2M14.5 3.5L17 2M9.5 3.5L7 2M20.5 20l-2-.8M20.5 8l-2 .8M3.5 20l2-.8M3.5 8l2 .8M12 21.5V15'
      />
    </SvgIcon>
  );
}

export default React.memo(BugIcon);
