import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function AlignLeftIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M3 2v20' />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M7 7.5c0-.935 0-1.402.201-1.75a1.5 1.5 0 01.549-.549C8.098 5 8.565 5 9.5 5h9c.935 0 1.402 0 1.75.201a1.5 1.5 0 01.549.549C21 6.098 21 6.565 21 7.5s0 1.402-.201 1.75a1.5 1.5 0 01-.549.549c-.348.201-.815.201-1.75.201h-9c-.935 0-1.402 0-1.75-.201a1.5 1.5 0 01-.549-.549C7 8.902 7 8.435 7 7.5zM7 16.5c0-.935 0-1.402.201-1.75a1.5 1.5 0 01.549-.549C8.098 14 8.565 14 9.5 14h6c.935 0 1.402 0 1.75.201a1.5 1.5 0 01.549.549c.201.348.201.815.201 1.75s0 1.402-.201 1.75a1.5 1.5 0 01-.549.549c-.348.201-.815.201-1.75.201h-6c-.935 0-1.402 0-1.75-.201a1.5 1.5 0 01-.549-.549C7 17.902 7 17.435 7 16.5z'
      />
    </SvgIcon>
  );
}

export default React.memo(AlignLeftIcon);
