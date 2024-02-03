import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function EndCallRoundedIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M5.607 16.897l1.34-.38C8.156 16.174 9 14.983 9 13.618c0 0 0 0 0 0s0-1.654 3-1.654 3 1.654 3 1.654 0 0 0 0c0 1.365.844 2.556 2.053 2.9l1.34.38C20.218 17.414 22 15.91 22 13.85c0-1.237-.277-2.477-1.083-3.347C19.56 9.04 16.807 7 12 7c-4.807 0-7.56 2.039-8.917 3.503C2.277 11.373 2 12.613 2 13.85c0 2.06 1.782 3.565 3.607 3.047z'
      />
    </SvgIcon>
  );
}

export default React.memo(EndCallRoundedIcon);
