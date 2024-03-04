import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function MusicNote3Icon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeWidth='1.5' d='M12 18a4 4 0 11-8 0 4 4 0 018 0zM12 18V6' />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M16.117 10.059l-2.634-1.317c-.365-.182-.547-.274-.698-.389a2 2 0 01-.75-1.213C12 6.954 12 6.75 12 6.342c0-.971 0-1.457.12-1.787a2 2 0 012.112-1.305c.348.04.783.258 1.651.692l2.634 1.317c.365.182.547.273.698.389a2 2 0 01.75 1.212c.035.187.035.39.035.799 0 .97 0 1.456-.12 1.786a2 2 0 01-2.112 1.306c-.348-.04-.783-.258-1.651-.692z'
      />
    </SvgIcon>
  );
}

export default MusicNote3Icon;
