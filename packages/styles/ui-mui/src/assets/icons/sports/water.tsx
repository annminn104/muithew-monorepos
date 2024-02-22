import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function WaterIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M22 8.786c-1.588-.352-2.404-1.216-3.08-2.178-.424-.602-1.355-.565-1.815.013C16.055 7.943 14.485 9 12 9 9.493 9 7.918 7.655 6.867 6.389c-.44-.53-1.28-.522-1.665.043C4.5 7.462 3.684 8.412 2 8.786M22 18.786c-1.588-.352-2.404-1.216-3.08-2.178-.424-.602-1.355-.566-1.815.013C16.055 17.943 14.485 19 12 19c-2.507 0-4.082-1.345-5.133-2.611-.44-.53-1.28-.522-1.665.043-.701 1.03-1.518 1.98-3.202 2.354M22 13.786c-1.588-.352-2.404-1.216-3.08-2.178-.424-.602-1.355-.566-1.815.013C16.055 12.943 14.485 14 12 14c-2.507 0-4.082-1.345-5.133-2.611-.44-.53-1.28-.522-1.665.043-.701 1.03-1.518 1.98-3.202 2.354'
      />
    </SvgIcon>
  );
}

export default React.memo(WaterIcon);
