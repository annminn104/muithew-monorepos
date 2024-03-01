import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function ShareLineSquareIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M22 13.998c-.029 3.414-.218 5.296-1.46 6.537C19.076 22 16.718 22 12.003 22c-4.716 0-7.073 0-8.538-1.465C2 19.07 2 16.713 2 11.997 2 7.282 2 4.924 3.465 3.46 4.706 2.218 6.588 2.029 10.002 2'
      />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M22 7h-8c-1.818 0-2.913.892-3.32 1.3-.125.127-.188.19-.19.19 0 .002-.063.065-.19.19C9.892 9.087 9 10.182 9 12v3m13-8l-5-5m5 5l-5 5'
      />
    </SvgIcon>
  );
}

export default ShareLineSquareIcon;
