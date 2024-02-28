import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function RunningRoundedIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <circle cx='18.5' cy='4.5' r='2.5' stroke={linearColor} strokeWidth='1.5' />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M14.4 22v-.805-.154a7 7 0 00-2.837-5.553l-.075-.058a2 2 0 01-.065-3.087l1.04-.945c1.627-1.48 1.132-4.153-.917-4.952a2.962 2.962 0 00-2.271.05l-.522.23c-.54.239-.809.357-1.072.488a13 13 0 00-1.275.725c-.247.16-.487.33-.967.673L4 9.636M9 17l-.26.311A7.473 7.473 0 013 20M16 12a8.246 8.246 0 004 0'
      />
    </SvgIcon>
  );
}

export default RunningRoundedIcon;
