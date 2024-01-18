import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function ReorderIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M2 17.5c0-.935 0-1.402.201-1.75a1.5 1.5 0 01.549-.549C3.098 15 3.565 15 4.5 15s1.402 0 1.75.201a1.5 1.5 0 01.549.549C7 16.098 7 16.565 7 17.5s0 1.402-.201 1.75a1.5 1.5 0 01-.549.549C5.902 20 5.435 20 4.5 20s-1.402 0-1.75-.201a1.5 1.5 0 01-.549-.549C2 18.902 2 18.435 2 17.5z'
      />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M9.5 17.5c0-.935 0-1.402.201-1.75a1.5 1.5 0 01.549-.549C10.598 15 11.065 15 12 15s1.402 0 1.75.201a1.5 1.5 0 01.549.549c.201.348.201.815.201 1.75s0 1.402-.201 1.75a1.5 1.5 0 01-.549.549C13.402 20 12.935 20 12 20s-1.402 0-1.75-.201a1.5 1.5 0 01-.549-.549c-.201-.348-.201-.815-.201-1.75z'
      />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M17 17.5c0-.935 0-1.402.201-1.75a1.5 1.5 0 01.549-.549C18.098 15 18.565 15 19.5 15s1.402 0 1.75.201a1.5 1.5 0 01.549.549c.201.348.201.815.201 1.75s0 1.402-.201 1.75a1.5 1.5 0 01-.549.549c-.348.201-.815.201-1.75.201s-1.402 0-1.75-.201a1.5 1.5 0 01-.549-.549C17 18.902 17 18.435 17 17.5z'
      />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M4.5 15V9c0-2.357 0-3.536.732-4.268C5.964 4 7.143 4 9.5 4h5c2.357 0 3.535 0 4.268.732.732.732.732 1.911.732 4.268v3m0 0l2-2m-2 2l-2-2'
      />
    </SvgIcon>
  );
}

export default React.memo(ReorderIcon);
