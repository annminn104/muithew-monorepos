import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function Planet2Icon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeWidth='1.5' d='M20 12a8 8 0 11-16 0 8 8 0 0116 0z'></path>
      <path
        stroke={linearColor}
        strokeDasharray='3.5 2.5'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M17.671 6.225c2.102-.415 3.654-.268 4.158.538 1.011 1.616-2.57 5.271-7.998 8.163-5.429 2.893-10.649 3.927-11.66 2.31-.516-.823.163-2.178 1.672-3.69'
      ></path>
    </SvgIcon>
  );
}

export default React.memo(Planet2Icon);
