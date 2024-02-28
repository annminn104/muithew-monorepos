import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function ShopIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M3.5 11v3c0 3.771 0 5.657 1.172 6.828C5.843 22 7.729 22 11.5 22h1c3.771 0 5.657 0 6.828-1.172C20.5 19.657 20.5 17.771 20.5 14v-3'
      />
      <path stroke={linearColor} strokeWidth='1.5' d='M9.5 2h5l.652 6.517a3.167 3.167 0 11-6.304 0L9.5 2z' />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M3.33 5.351c.178-.89.267-1.335.448-1.696a3 3 0 011.888-1.548C6.056 2 6.51 2 7.418 2H9.5l-.725 7.245a3.06 3.06 0 11-6.043-.904l.598-2.99zM20.67 5.351c-.178-.89-.267-1.335-.448-1.696a3 3 0 00-1.888-1.548C17.944 2 17.49 2 16.582 2H14.5l.725 7.245a3.06 3.06 0 106.043-.904l-.598-2.99z'
      />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M9.5 21.5v-3c0-.935 0-1.402.201-1.75a1.5 1.5 0 01.549-.549C10.598 16 11.065 16 12 16s1.402 0 1.75.201a1.5 1.5 0 01.549.549c.201.348.201.815.201 1.75v3'
      />
    </SvgIcon>
  );
}

export default ShopIcon;
