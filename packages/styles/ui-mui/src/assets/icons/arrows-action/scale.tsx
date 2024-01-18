import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function ScaleIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M11 2c-4.055.007-6.178.107-7.535 1.464C2 4.928 2 7.285 2 11.999s0 7.071 1.465 8.536c1.464 1.464 3.821 1.464 8.535 1.464s7.071 0 8.536-1.464c1.357-1.357 1.456-3.48 1.463-7.536'
      />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M13 11l9-9m0 0h-5.344M22 2v5.344M21 3l-9 9m0 0h4m-4 0V8'
      />
    </SvgIcon>
  );
}

export default React.memo(ScaleIcon);
