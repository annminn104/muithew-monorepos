import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function SocialLinkedinOutIcon({ linearColor = '#1F1F1F', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} viewBox='0 0 24 24'>
      <path
        fill={linearColor}
        fillRule='evenodd'
        d='M12 .96C5.903.96.96 5.903.96 12c0 6.097 4.943 11.04 11.04 11.04 6.097 0 11.04-4.943 11.04-11.04C23.04 5.903 18.097.96 12 .96zM0 12C0 5.373 5.373 0 12 0s12 5.373 12 12-5.373 12-12 12S0 18.627 0 12z'
        clipRule='evenodd'
      />
      <path
        fill={linearColor}
        d='M18.499 17.5h-2.485v-3.898c0-.93-.016-2.126-1.292-2.126-1.294 0-1.492 1.013-1.492 2.058V17.5h-2.485V9.484h2.386v1.096h.033a2.616 2.616 0 012.354-1.295c2.518 0 2.982 1.66 2.982 3.818l-.001 4.397zM7.942 8.389A1.45 1.45 0 016.5 6.944c0-.792.65-1.444 1.442-1.444.79 0 1.442.652 1.442 1.444A1.45 1.45 0 017.942 8.39zM9.184 17.5H6.697V9.484h2.487V17.5z'
      />
    </SvgIcon>
  );
}

export default SocialLinkedinOutIcon;
