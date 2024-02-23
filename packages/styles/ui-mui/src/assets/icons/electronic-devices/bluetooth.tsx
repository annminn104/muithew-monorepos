import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function BluetoothIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M16.263 8.262L11 12V5.225c0-1.887 0-2.83.605-3.14.604-.309 1.376.24 2.92 1.336l1.738 1.234C17.421 5.477 18 5.888 18 6.46c0 .57-.579.981-1.737 1.803zM16.263 19.345l-1.738 1.234c-1.544 1.096-2.316 1.645-2.92 1.335C11 21.605 11 20.662 11 18.775V12l5.263 3.738C17.421 16.56 18 16.97 18 17.54c0 .57-.579.982-1.737 1.804z'
      />
      <path fill={linearColor} d='M5.57 14.886a.75.75 0 10.86 1.228l-.86-1.228zm.86 1.228l5-3.5-.86-1.228-5 3.5.86 1.228z'></path>
      <path fill={linearColor} d='M5.57 9.114a.75.75 0 01.86-1.228l-.86 1.228zm.86-1.228l5 3.5-.86 1.228-5-3.5.86-1.228z'></path>
    </SvgIcon>
  );
}

export default React.memo(BluetoothIcon);
