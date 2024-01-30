import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function TranslationIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M19.141 5A9.967 9.967 0 0122 12a9.969 9.969 0 01-2.922 7.064M5 19.142A9.97 9.97 0 012 12a9.969 9.969 0 012.936-7.078M16.285 8.044C17.345 9.059 18 10.449 18 11.982c0 1.552-.67 2.957-1.753 3.974M7.8 16C6.69 14.979 6 13.556 6 11.982 6 10.427 6.673 9.018 7.762 8'
      />
      <circle cx='12' cy='12' r='2' stroke={linearColor} strokeWidth='1.5' />
    </SvgIcon>
  );
}

export default React.memo(TranslationIcon);
