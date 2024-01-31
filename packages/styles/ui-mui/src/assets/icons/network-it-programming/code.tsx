import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function CodeIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M17 7.83l1.697 1.526c1.542 1.389 2.313 2.083 2.313 2.974 0 .89-.771 1.585-2.314 2.973L17 16.83M13.987 5L12 12.415l-1.987 7.415M7 7.83L5.304 9.356C3.76 10.745 2.99 11.44 2.99 12.33c0 .89.771 1.585 2.314 2.973L7 16.83'
      />
    </SvgIcon>
  );
}

export default React.memo(CodeIcon);
