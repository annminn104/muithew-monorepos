import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function MedalRibbonIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <circle cx='12' cy='9' r='7' stroke={linearColor} strokeWidth='1.5' />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M7.351 15l-.637 2.323c-.628 2.292-.942 3.438-.523 4.065.147.22.344.396.573.513.652.332 1.66-.193 3.675-1.243.67-.35 1.006-.524 1.362-.562a1.87 1.87 0 01.398 0c.356.038.691.213 1.362.562 2.015 1.05 3.023 1.575 3.675 1.243.229-.117.426-.293.573-.513.42-.627.105-1.773-.523-4.065L16.649 15'
      />
    </SvgIcon>
  );
}

export default MedalRibbonIcon;
