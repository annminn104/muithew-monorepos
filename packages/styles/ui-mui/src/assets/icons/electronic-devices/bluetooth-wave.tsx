import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function BluetoothWaveIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M13.263 8.262L8 12V5.225c0-1.887 0-2.83.605-3.14.604-.309 1.376.24 2.92 1.336l1.738 1.234C14.421 5.477 15 5.888 15 6.46c0 .57-.579.981-1.737 1.803zM13.263 19.345l-1.738 1.234c-1.544 1.096-2.316 1.645-2.92 1.335C8 21.605 8 20.662 8 18.775V12l5.263 3.738C14.421 16.56 15 16.97 15 17.54c0 .57-.579.982-1.737 1.804z'
      />
      <path fill={linearColor} d='M2.57 14.886a.75.75 0 10.86 1.228l-.86-1.228zm.86 1.228l5-3.5-.86-1.228-5 3.5.86 1.228z' />
      <path fill={linearColor} d='M2.57 9.114a.75.75 0 01.86-1.228l-.86 1.228zm.86-1.228l5 3.5-.86 1.228-5-3.5.86-1.228z' />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M19 5s2 2.1 2 7-2 7-2 7M17 8s1 1.9 1 4-1 4-1 4' />
    </SvgIcon>
  );
}

export default React.memo(BluetoothWaveIcon);
