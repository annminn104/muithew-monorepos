import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function QuestionCircleIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <circle cx='12' cy='12' r='10' stroke={linearColor} strokeWidth='1.5' />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M10.125 8.875a1.875 1.875 0 112.828 1.615c-.475.281-.953.708-.953 1.26V13'
      />
      <circle cx='12' cy='16' r='1' fill={linearColor} />
    </SvgIcon>
  );
}

export default QuestionCircleIcon;
