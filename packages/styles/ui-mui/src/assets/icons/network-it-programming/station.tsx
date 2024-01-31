import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function StationIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M19.141 2.078a9.967 9.967 0 012.859 7 9.969 9.969 0 01-2.922 7.064M5 16.22a9.97 9.97 0 01-3-7.142A9.969 9.969 0 014.936 2M16.285 5.122C17.345 6.137 18 7.527 18 9.06c0 1.552-.67 2.957-1.753 3.974m-8.447.044C6.69 12.057 6 10.634 6 9.06c0-1.555.673-2.963 1.762-3.982'
      />
      <circle cx='12' cy='9.078' r='2' stroke={linearColor} strokeWidth='1.5' />
      <path stroke={linearColor} strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M12.5 11L16 22l-5.5-6.5m1-4.5L8 22l5.5-6.5' />
    </SvgIcon>
  );
}

export default React.memo(StationIcon);
