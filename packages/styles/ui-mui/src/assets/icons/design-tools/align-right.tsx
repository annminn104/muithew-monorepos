import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function AlignRightIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M21 2v20' />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M17 7.5c0-.935 0-1.402-.201-1.75a1.5 1.5 0 00-.549-.549C15.902 5 15.435 5 14.5 5h-9c-.935 0-1.402 0-1.75.201a1.5 1.5 0 00-.549.549C3 6.098 3 6.565 3 7.5s0 1.402.201 1.75a1.5 1.5 0 00.549.549C4.098 10 4.565 10 5.5 10h9c.935 0 1.402 0 1.75-.201a1.5 1.5 0 00.549-.549C17 8.902 17 8.435 17 7.5zM17 16.5c0-.935 0-1.402-.201-1.75a1.5 1.5 0 00-.549-.549C15.902 14 15.435 14 14.5 14h-6c-.935 0-1.402 0-1.75.201a1.5 1.5 0 00-.549.549C6 15.098 6 15.565 6 16.5s0 1.402.201 1.75a1.5 1.5 0 00.549.549C7.098 19 7.565 19 8.5 19h6c.935 0 1.402 0 1.75-.201a1.5 1.5 0 00.549-.549c.201-.348.201-.815.201-1.75z'
      />
    </SvgIcon>
  );
}

export default AlignRightIcon;
