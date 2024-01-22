import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function UserBlockIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <circle cx='12' cy='6' r='4' stroke='#1C274C' strokeWidth='1.5' />
      <path stroke='#1C274C' strokeWidth='1.5' d='M15 13.327A13.57 13.57 0 0012 13c-4.418 0-8 2.015-8 4.5S4 22 12 22c5.687 0 7.331-1.018 7.807-2.5' />
      <path
        stroke='#1C274C'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M15.171 18.828a4 4 0 105.657-5.657m-5.656 5.657a4 4 0 015.657-5.657m-5.658 5.657l5.657-5.656'
      />
    </SvgIcon>
  );
}

export default React.memo(UserBlockIcon);
