import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function LinkSquareIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M8 18c-2.828 0-4.243 0-5.121-.879C2 16.243 2 14.828 2 12c0-2.828 0-4.243.879-5.121C3.757 6 5.172 6 8 6c2.828 0 4.243 0 5.121.879C14 7.757 14 9.172 14 12'
      />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M10 12c0 2.828 0 4.243.879 5.121C11.757 18 13.172 18 16 18c2.828 0 4.243 0 5.121-.879C22 16.243 22 14.828 22 12c0-2.828 0-4.243-.879-5.121C20.243 6 18.828 6 16 6'
      />
    </SvgIcon>
  );
}

export default React.memo(LinkSquareIcon);
