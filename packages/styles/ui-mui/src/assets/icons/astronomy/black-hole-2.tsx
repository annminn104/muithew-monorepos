import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function BlackHole2Icon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <circle cx='12' cy='12' r='2' stroke={linearColor} strokeWidth='1.5'></circle>
      <path
        stroke={linearColor}
        strokeDasharray='2 2'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M10.142 10.363C13.688 6.817 21.914 15.61 16.524 21M13.858 13.637C10.312 17.183 2.086 8.39 7.476 3M10.363 13.858C6.817 10.312 15.61 2.086 21 7.476M13.637 10.142C17.183 13.688 8.39 21.914 3 16.524'
      ></path>
    </SvgIcon>
  );
}

export default React.memo(BlackHole2Icon);
