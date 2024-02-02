import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function Pills3Icon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M11 9.5a4.5 4.5 0 10-9 0m9 0a4.5 4.5 0 01-9 0m9 0H2M14.757 7.122A3 3 0 1019 2.879a3 3 0 00-4.243 4.243z'
      ></path>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M20.905 17.381a3.738 3.738 0 00-5.286-5.286l-3.524 3.524a3.738 3.738 0 005.286 5.286l3.524-3.524z'
      ></path>
      <path stroke={linearColor} strokeWidth='1.5' d='M14 14s.281 1.46 1.911 3.09C17.541 18.718 19 19 19 19'></path>
    </SvgIcon>
  );
}

export default React.memo(Pills3Icon);
