import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function MeditationRoundedIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeWidth='1.5' d='M14.5 4.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z' />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M21 17l-1.158-.39a2.682 2.682 0 01-.642-.317l-.101-.069A2.5 2.5 0 0118 14.15c0-2.437-1.744-4.517-4.123-4.918l-.89-.15C12.5 9 11.5 9 11.013 9.082l-.891.15C7.743 9.633 6 11.713 6 14.15a2.5 2.5 0 01-1.099 2.074l-.1.069c-.2.134-.416.24-.643.317L3 17'
      />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M9.5 16l-.925 1.233c-.147.196-.22.295-.304.381a2 2 0 01-.732.486c-.112.043-.23.073-.47.133l-1.793.448A1.685 1.685 0 005.685 22h.683c1.709 0 3.37-.554 4.737-1.579L13 19m1.5-3l.727.969c.343.458.515.687.738.856.067.05.137.098.21.14.242.14.52.209 1.075.348l1.474.368A1.685 1.685 0 0118.315 22h-.937c-.563 0-.844 0-1.123-.016a9.997 9.997 0 01-2.425-.44c-.267-.083-.53-.181-1.056-.379L11 20.5'
      />
    </SvgIcon>
  );
}

export default MeditationRoundedIcon;
