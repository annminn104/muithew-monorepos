import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function UploadTrack2Icon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M13 15V7' />
      <circle cx='11' cy='15' r='2' stroke={linearColor} strokeWidth='1.5' />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M16 10a3 3 0 01-3-3M14 21.8c-.646.131-1.315.2-2 .2-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10c0 .685-.069 1.354-.2 2'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M18 22v-7m0 0l2.5 2.5M18 15l-2.5 2.5' />
    </SvgIcon>
  );
}

export default UploadTrack2Icon;
