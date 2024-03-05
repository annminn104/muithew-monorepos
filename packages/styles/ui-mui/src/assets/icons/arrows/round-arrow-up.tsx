import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function RoundArrowUpIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <circle cx={12} cy={12} r={10} stroke={linearColor} strokeWidth={1.5} />
      <path d='M12 16L12 8M12 8L15 11M12 8L9 11' stroke={linearColor} strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
    </SvgIcon>
  );
}

export default RoundArrowUpIcon;
