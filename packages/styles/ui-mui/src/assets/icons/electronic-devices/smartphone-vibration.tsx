import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function SmartphoneVibrationIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M5 8c0-2.828 0-4.243.879-5.121C6.757 2 8.172 2 11 2h2c2.828 0 4.243 0 5.121.879C19 3.757 19 5.172 19 8v8c0 2.828 0 4.243-.879 5.121C17.243 22 15.828 22 13 22h-2c-2.828 0-4.243 0-5.121-.879C5 20.243 5 18.828 5 16V8z'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M14.5 19h-5'></path>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M22 6l-.776 1.553a1 1 0 000 .894l.552 1.106a1 1 0 010 .894l-.552 1.106a1 1 0 000 .894l.552 1.106a1 1 0 010 .894l-.552 1.106a1 1 0 000 .894L22 18M2 6l.776 1.553a1 1 0 010 .894l-.552 1.106a1 1 0 000 .894l.552 1.106a1 1 0 010 .894l-.552 1.106a1 1 0 000 .894l.552 1.106a1 1 0 010 .894L2 18'
      />
    </SvgIcon>
  );
}

export default React.memo(SmartphoneVibrationIcon);
