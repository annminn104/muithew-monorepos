import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function StarIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M12 20v-2.4m0-11.2V4m8 8h-2.4M6.4 12H4m13.657-5.657L15.96 8.04m-7.92 7.92l-1.697 1.697m0-11.314L8.04 8.04m7.92 7.92l1.697 1.697'
      ></path>
    </SvgIcon>
  );
}

export default React.memo(StarIcon);
