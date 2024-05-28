import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function SocialLinkedinContainedIcon({ linearColor = '#1F1F1F', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} viewBox='0 0 24 24'>
      <path fill={linearColor} d='M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12z'></path>
      <path
        fill={linearColor}
        d='M18.499 17.5h-2.485v-3.898c0-.93-.016-2.126-1.292-2.126-1.294 0-1.492 1.013-1.492 2.058V17.5h-2.484V9.484h2.385v1.096h.033a2.616 2.616 0 012.354-1.295c2.518 0 2.982 1.66 2.982 3.818l-.001 4.397zM7.942 8.389A1.45 1.45 0 016.5 6.944c0-.792.65-1.444 1.442-1.444.79 0 1.442.652 1.442 1.444A1.45 1.45 0 017.942 8.39zM9.184 17.5H6.697V9.484h2.487V17.5z'
      ></path>
    </SvgIcon>
  );
}

export default SocialLinkedinContainedIcon;
