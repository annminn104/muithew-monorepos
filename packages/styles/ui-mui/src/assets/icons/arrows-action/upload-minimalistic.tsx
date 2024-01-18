import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function UploadMinimalisticIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M3 15c0 2.828 0 4.243.879 5.121C4.757 21 6.172 21 9 21h6c2.828 0 4.243 0 5.121-.879C21 19.243 21 17.828 21 15M12 16V3m0 0l4 4.375M12 3L8 7.375'
      />
    </SvgIcon>
  );
}

export default React.memo(UploadMinimalisticIcon);
