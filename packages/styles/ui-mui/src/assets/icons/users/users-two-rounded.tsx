import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function UsersTwoRoundedIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <circle cx='12' cy='6' r='4' stroke={linearColor} strokeWidth='1.5' />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M18 9c1.657 0 3-1.12 3-2.5S19.657 4 18 4M6 9C4.343 9 3 7.88 3 6.5S4.343 4 6 4'
      />
      <ellipse cx='12' cy='17' stroke={linearColor} strokeWidth='1.5' rx='6' ry='4' />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M20 19c1.754-.385 3-1.359 3-2.5s-1.246-2.115-3-2.5M4 19c-1.754-.385-3-1.359-3-2.5s1.246-2.115 3-2.5'
      />
    </SvgIcon>
  );
}

export default React.memo(UsersTwoRoundedIcon);
