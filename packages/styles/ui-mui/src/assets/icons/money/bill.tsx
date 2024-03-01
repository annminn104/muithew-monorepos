import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function BillIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M17.625 21a1.693 1.693 0 012.25 0A.676.676 0 0021 20.495V3.505A.676.676 0 0019.875 3c-.642.57-1.608.57-2.25 0a1.693 1.693 0 00-2.25 0c-.642.57-1.608.57-2.25 0a1.693 1.693 0 00-2.25 0c-.642.57-1.608.57-2.25 0a1.693 1.693 0 00-2.25 0c-.642.57-1.608.57-2.25 0A.676.676 0 003 3.505v16.99c0 .583.69.893 1.125.505a1.693 1.693 0 012.25 0c.642.57 1.608.57 2.25 0a1.693 1.693 0 012.25 0c.642.57 1.608.57 2.25 0a1.693 1.693 0 012.25 0c.642.57 1.608.57 2.25 0z'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M7.5 15.5h9M7.5 12h9M7.5 8.5h9' />
    </SvgIcon>
  );
}

export default BillIcon;
