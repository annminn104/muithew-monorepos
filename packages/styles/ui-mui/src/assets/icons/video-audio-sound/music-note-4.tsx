import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function MusicNote4Icon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeWidth='1.5' d='M12 18a4 4 0 11-8 0 4 4 0 018 0zM12 18V8' />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M16.117 3.942l-2.634 1.317c-.365.182-.547.273-.698.389a2 2 0 00-.75 1.212C12 7.047 12 7.25 12 7.66c0 .97 0 1.456.12 1.786a2 2 0 002.112 1.306c.348-.04.783-.258 1.651-.692l2.634-1.317c.365-.182.547-.274.698-.389a2 2 0 00.75-1.213C20 6.954 20 6.75 20 6.342c0-.971 0-1.457-.12-1.787a2 2 0 00-2.112-1.305c-.348.04-.783.258-1.651.692z'
      />
    </SvgIcon>
  );
}

export default MusicNote4Icon;
