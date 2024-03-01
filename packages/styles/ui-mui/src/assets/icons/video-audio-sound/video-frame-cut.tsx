import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function VideoFrameCutIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M14.5 3.003c2.794.02 4.324.163 5.328 1.168C21 5.343 21 7.228 21 11v2c0 3.772 0 5.657-1.172 6.829-1.004 1.005-2.534 1.148-5.328 1.168m-5 0c-2.794-.02-4.324-.163-5.328-1.168C3 18.656 3 16.771 3 12.999v-2c0-3.77 0-5.656 1.172-6.828C5.176 3.166 6.706 3.023 9.5 3.003'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M17 4v16' />
      <path stroke={linearColor} strokeDasharray='3 3' strokeLinecap='round' strokeWidth='1.5' d='M12 2v20' />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M7 4v16M3.5 8.5H7m13.5 0H17M3.5 15.5H7m13.5 0H17' />
    </SvgIcon>
  );
}

export default VideoFrameCutIcon;
