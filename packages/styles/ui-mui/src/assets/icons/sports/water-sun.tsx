import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function WaterSunIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M22 16.772c-1.588-.374-2.404-1.293-3.08-2.315-.424-.64-1.355-.602-1.815.013C16.055 15.876 14.485 17 12 17c-2.507 0-4.082-1.43-5.133-2.777-.44-.562-1.28-.554-1.665.047C4.5 15.366 3.684 16.375 2 16.772M22 21.772c-1.588-.374-2.404-1.293-3.08-2.315-.424-.64-1.355-.602-1.815.013C16.055 20.876 14.485 22 12 22c-2.507 0-4.082-1.43-5.133-2.777-.44-.562-1.28-.554-1.665.047C4.5 20.366 3.684 21.375 2 21.772'
      />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M17.917 11a6.002 6.002 0 00-11.834 0M12 2v1M22 12h-1M3 12H2M19.07 4.93l-.393.392M5.322 5.322l-.393-.393'
      />
    </SvgIcon>
  );
}

export default WaterSunIcon;
