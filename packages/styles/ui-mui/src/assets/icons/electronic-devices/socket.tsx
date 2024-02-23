import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function SocketIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12z'
      />
      <circle cx='12' cy='12' r='6' stroke={linearColor} strokeWidth='1.5' />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M12 18v-1.5M12 7.5V6' />
      <circle cx='14' cy='12' r='1' fill={linearColor} />
      <circle cx='10' cy='12' r='1' fill={linearColor} />
    </SvgIcon>
  );
}

export default React.memo(SocketIcon);
