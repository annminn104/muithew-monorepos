import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function UFOIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M17 8.21c2.989.723 5 2.071 5 3.616C22 14.131 17.523 16 12 16S2 14.13 2 11.826c0-1.545 2.011-2.893 5-3.615'
      />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M7 8.729A4.729 4.729 0 0111.729 4h.542A4.729 4.729 0 0117 8.729c0 .177-.054.35-.2.451-.414.288-1.61.82-4.8.82-3.19 0-4.386-.532-4.8-.82-.146-.1-.2-.274-.2-.451z'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M12 16v3M5.5 15.5l-1 2M18.5 15.5l1 2' />
      <circle cx='12' cy='13' r='1' fill={linearColor} />
      <circle cx='7' cy='12' r='1' fill={linearColor} />
      <circle cx='17' cy='12' r='1' fill={linearColor} />
    </SvgIcon>
  );
}

export default React.memo(UFOIcon);
