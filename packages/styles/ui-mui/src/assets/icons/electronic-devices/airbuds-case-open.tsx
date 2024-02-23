import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function AirbudsCaseOpenIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M3 12.833c0-.781 0-1.172.207-1.442.053-.07.115-.131.184-.184.27-.207.66-.207 1.442-.207h14.334c.781 0 1.172 0 1.442.207.07.053.131.115.184.184.207.27.207.66.207 1.442V13c0 3.75 0 5.625-.955 6.939a5 5 0 01-1.106 1.106C17.625 22 15.749 22 12 22c-3.75 0-5.625 0-6.939-.955a5 5 0 01-1.106-1.106C3 18.625 3 16.749 3 13v-.167zM3.5 5.941V4.625A2.625 2.625 0 016.125 2 4.375 4.375 0 0110.5 6.375V11H6.794V9.236a.824.824 0 00-.823-.824A2.47 2.47 0 013.5 5.942zM20.5 5.941V4.625A2.625 2.625 0 0017.875 2 4.375 4.375 0 0013.5 6.375V11h3.706V9.236c0-.455.369-.824.823-.824a2.47 2.47 0 002.471-2.47z'
      />
      <path stroke={linearColor} strokeWidth='1.5' d='M8 11a2 2 0 002 2h4a2 2 0 002-2' />
    </SvgIcon>
  );
}

export default React.memo(AirbudsCaseOpenIcon);
