import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function WirelessChargeIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M12.065 18A7.845 7.845 0 0020 10.065c-.036-4.419-3.646-8.03-8.065-8.065A7.846 7.846 0 004 9.935c.036 4.419 3.646 8.03 8.065 8.065z'
      />
      <path fill={linearColor} d='M11.25 22a.75.75 0 001.5 0h-1.5zm0-1v1h1.5v-1h-1.5z' />
      <path stroke={linearColor} strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M12.857 7L10 10h4l-2.857 3' />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M13.5 18v1.5c0 .466 0 .699-.076.883a1 1 0 01-.541.54C12.699 21 12.466 21 12 21s-.699 0-.883-.076a1 1 0 01-.54-.541c-.077-.184-.077-.417-.077-.883V18'
      />
    </SvgIcon>
  );
}

export default React.memo(WirelessChargeIcon);
