import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function WatchRoundIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M17 6.5l-.304-1.368c-.334-1.501-.5-2.252-1.049-2.692C15.1 2 14.33 2 12.791 2H11.21C9.67 2 8.9 2 8.353 2.44c-.549.44-.715 1.19-1.05 2.692L7 6.5M17 17.5l-.304 1.368c-.334 1.501-.5 2.252-1.049 2.692-.548.44-1.317.44-2.856.44H11.21c-1.539 0-2.308 0-2.856-.44-.549-.44-.715-1.19-1.05-2.692L7 17.5'
      />
      <path stroke={linearColor} strokeWidth='1.5' d='M19.5 12a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z' />
      <path stroke={linearColor} strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M12 8.923V12l2 1.923' />
    </SvgIcon>
  );
}

export default React.memo(WatchRoundIcon);
