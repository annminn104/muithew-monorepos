import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function TurntableIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M2 12c0-4.714 0-7.071 1.172-8.536C4.343 2 6.229 2 10 2h4c3.771 0 5.657 0 6.828 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.172 8.535C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.465C2 19.072 2 16.714 2 12z'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M15 17l.894-.447A2 2 0 0017 14.763V10.5'></path>
      <rect width='8' height='8' x='6' y='8' stroke={linearColor} strokeWidth='1.5' rx='4' />
      <path stroke={linearColor} strokeWidth='1.5' d='M15.5 9a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z'></path>
    </SvgIcon>
  );
}

export default React.memo(TurntableIcon);
