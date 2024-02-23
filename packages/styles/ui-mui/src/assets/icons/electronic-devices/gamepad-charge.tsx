import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function GamepadChargeIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M10.165 4.78l.502.354a2.308 2.308 0 002.666 0l.502-.355A4.24 4.24 0 0116.285 4h.612c.405 0 .813.025 1.194.16 2.383.846 4.021 3.935 3.903 10.943-.024 1.412-.354 2.972-1.628 3.581a3.2 3.2 0 01-1.393.316 2.74 2.74 0 01-1.53-.437c-.915-.599-1.584-1.6-2.554-2.102a4.106 4.106 0 00-1.89-.461H11c-.658 0-1.306.158-1.89.46-.97.504-1.64 1.504-2.553 2.103A2.74 2.74 0 015.027 19a3.2 3.2 0 01-1.393-.316c-1.274-.609-1.604-2.17-1.628-3.581C1.887 8.095 3.526 5.006 5.909 4.16 6.29 4.025 6.7 4 7.103 4h.612c.878 0 1.734.272 2.45.78zM12 22v-3'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M10.5 16.5V18a1 1 0 001 1h1a1 1 0 001-1v-1.5M7.5 9v3M6 10.5h3'></path>
      <path
        fill={linearColor}
        d='M19 10.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16 10.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.75 8a.75.75 0 110 1.5.75.75 0 010-1.5zM16.75 11a.75.75 0 110 1.5.75.75 0 010-1.5z'
      />
    </SvgIcon>
  );
}

export default React.memo(GamepadChargeIcon);
