import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function UFO2Icon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M17 7.21c2.989.723 5 2.071 5 3.616C22 13.131 17.523 15 12 15S2 13.13 2 10.826c0-1.545 2.011-2.893 5-3.615'
      />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M7 7.729A4.729 4.729 0 0111.729 3h.542A4.729 4.729 0 0117 7.729c0 .177-.054.35-.2.451-.414.288-1.61.82-4.8.82-3.19 0-4.386-.532-4.8-.82-.146-.1-.2-.274-.2-.451z'
      />
      <circle cx='12' cy='12' r='1' fill={linearColor} />
      <circle cx='7' cy='11' r='1' fill={linearColor} />
      <circle cx='17' cy='11' r='1' fill={linearColor} />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M12 21v-3M18 20v-3M6 20v-3' />
    </SvgIcon>
  );
}

export default UFO2Icon;
