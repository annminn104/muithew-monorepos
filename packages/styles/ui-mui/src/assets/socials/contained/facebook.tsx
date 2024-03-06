import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function SocialFacebookConIcon({ linearColor = '#1F1F1F', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} viewBox='0 0 24 24'>
      <path d='M24 12c0 6.628 -5.372 12 -12 12S0 18.628 0 12 5.372 0 12 0s12 5.372 12 12' fill={linearColor} />
      <path
        d='m16.671 15.469 0.532 -3.469h-3.329v-2.251c0 -0.949 0.465 -1.874 1.956 -1.874h1.514V4.921s-1.373 -0.234 -2.687 -0.234c-2.741 0 -4.533 1.661 -4.533 4.668V12h-3.047v3.469h3.047v8.386a12.1 12.1 0 0 0 3.75 0V15.469z'
        fill='white'
      />
    </SvgIcon>
  );
}

export default SocialFacebookConIcon;
