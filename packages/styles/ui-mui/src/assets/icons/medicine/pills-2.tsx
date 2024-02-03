import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function Pills2Icon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M11.536 10.536a5 5 0 00-7.071-7.071m7.07 7.07a5 5 0 01-7.071-7.071m7.072 7.072L4.464 3.464M22 17a5 5 0 10-10 0m10 0a5 5 0 01-10 0m10 0H12'
      />
    </SvgIcon>
  );
}

export default React.memo(Pills2Icon);
