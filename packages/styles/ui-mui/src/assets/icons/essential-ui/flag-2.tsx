import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function Flag2Icon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M5 22v-8m0 0V4m0 10l2.47-.494a8.676 8.676 0 014.925.452 8.677 8.677 0 005.327.361l.1-.025a.9.9 0 00.553-1.335l-1.56-2.601c-.342-.57-.513-.854-.553-1.163a1.508 1.508 0 010-.39c.04-.309.211-.594.553-1.163l1.278-2.13a.73.73 0 00-.803-1.085 7.3 7.3 0 01-4.482-.304l-.413-.165a8.677 8.677 0 00-4.924-.452L5 4m0 0V2'
      />
    </SvgIcon>
  );
}

export default Flag2Icon;
