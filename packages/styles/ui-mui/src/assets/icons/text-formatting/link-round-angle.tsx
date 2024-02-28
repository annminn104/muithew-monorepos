import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function LinkRoundAngleIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M12.792 15.8l1.43-1.432a6.076 6.076 0 000-8.59 6.067 6.067 0 00-8.583 0L2.778 8.643A6.076 6.076 0 006.732 19'
      />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M11.208 8.2l-1.43 1.432a6.076 6.076 0 000 8.59 6.067 6.067 0 008.583 0l2.861-2.864A6.076 6.076 0 0017.268 5'
      />
    </SvgIcon>
  );
}

export default LinkRoundAngleIcon;
