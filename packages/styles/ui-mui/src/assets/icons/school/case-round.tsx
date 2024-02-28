import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function CaseRoundIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M3 12c0 3.771 0 7.657 1.318 8.828C5.636 22 7.758 22 12 22c4.243 0 6.364 0 7.682-1.172C21 19.657 21 15.771 21 12'
      />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M14.66 14.202l6.198-1.86c.41-.123.616-.184.768-.306a1 1 0 00.3-.404c.074-.18.074-.395.074-.824 0-1.688 0-2.531-.33-3.175a3 3 0 00-1.303-1.303C19.723 6 18.88 6 17.192 6H6.808c-1.688 0-2.531 0-3.175.33A3 3 0 002.33 7.633C2 8.277 2 9.12 2 10.808c0 .429 0 .643.073.824a1 1 0 00.3.404c.153.122.358.183.77.307l6.197 1.859'
      />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M14 12.5h-4a.5.5 0 00-.5.5v2.162a.5.5 0 00.314.464l.7.28a4 4 0 002.972 0l.7-.28a.5.5 0 00.314-.464V13a.5.5 0 00-.5-.5zM9.17 4a3.001 3.001 0 015.66 0'
      />
    </SvgIcon>
  );
}

export default CaseRoundIcon;
