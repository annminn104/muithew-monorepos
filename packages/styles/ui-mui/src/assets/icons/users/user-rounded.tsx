import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function UserRoundedIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <circle cx='12' cy='6' r='4' stroke={linearColor} strokeWidth='1.5' />
      <ellipse cx='12' cy='17' stroke={linearColor} strokeWidth='1.5' rx='7' ry='4' />
    </SvgIcon>
  );
}

export default React.memo(UserRoundedIcon);
