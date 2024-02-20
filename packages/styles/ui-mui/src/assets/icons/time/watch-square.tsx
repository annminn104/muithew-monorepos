import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function WatchSquareIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M5 12c0-2.809 0-4.213.674-5.222a4 4 0 011.104-1.104C7.787 5 9.19 5 12 5c2.809 0 4.213 0 5.222.674.437.292.812.667 1.104 1.104C19 7.787 19 9.19 19 12c0 2.809 0 4.213-.674 5.222a4.003 4.003 0 01-1.104 1.104C16.213 19 14.81 19 12 19c-2.809 0-4.213 0-5.222-.674a4.002 4.002 0 01-1.104-1.104C5 16.213 5 14.81 5 12z'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M12 9v3.077L14 14' />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M16.778 5.5l-.082-.368c-.334-1.501-.5-2.252-1.049-2.692C15.1 2 14.33 2 12.791 2H11.21C9.67 2 8.9 2 8.353 2.44c-.549.44-.715 1.19-1.049 2.692l-.082.368'
      />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M16.778 5.5l-.082-.368c-.334-1.501-.5-2.252-1.049-2.692C15.1 2 14.33 2 12.791 2H11.21C9.67 2 8.9 2 8.353 2.44c-.549.44-.715 1.19-1.05 2.692l-.08.368M16.778 18.5l-.082.368c-.334 1.501-.5 2.252-1.049 2.692-.548.44-1.317.44-2.856.44H11.21c-1.539 0-2.308 0-2.856-.44s-.715-1.19-1.049-2.692l-.082-.368'
      />
    </SvgIcon>
  );
}

export default React.memo(WatchSquareIcon);
