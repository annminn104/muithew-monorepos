import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function NotificationRemoveLinesIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M22 10.5V12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2h1.5M7 14h9M7 17.5h6M22 2l-5 5m0-5l5 5'
      />
    </SvgIcon>
  );
}

export default React.memo(NotificationRemoveLinesIcon);
