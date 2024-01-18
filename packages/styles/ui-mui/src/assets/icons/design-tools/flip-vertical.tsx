import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function FlipVerticalIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M5.886 2h12.228c1.702 0 2.553 0 2.832.542.28.543-.216 1.235-1.205 2.62l-1.13 1.582c-.44.616-.66.924-.982 1.09C17.306 8 16.927 8 16.17 8H7.83c-.757 0-1.136 0-1.459-.166-.323-.166-.543-.474-.983-1.09l-1.13-1.582c-.988-1.385-1.483-2.077-1.204-2.62C3.334 2 4.184 2 5.886 2zM5.886 22h12.228c1.702 0 2.553 0 2.832-.542.28-.543-.216-1.235-1.205-2.62l-1.13-1.582c-.44-.616-.66-.924-.982-1.09C17.306 16 16.927 16 16.17 16H7.83c-.757 0-1.136 0-1.459.166-.323.166-.543.474-.983 1.09l-1.13 1.581c-.988 1.386-1.483 2.078-1.204 2.62.28.543 1.13.543 2.832.543z'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M10 12h4M18 12h4M2 12h4' />
    </SvgIcon>
  );
}

export default React.memo(FlipVerticalIcon);
