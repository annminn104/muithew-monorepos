import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function TrashBinMinimalisticIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M9.17 4a3.001 3.001 0 015.66 0M20.5 6h-17M18.833 8.5l-.46 6.9c-.177 2.654-.265 3.981-1.13 4.79-.865.81-2.195.81-4.856.81h-.774c-2.66 0-3.99 0-4.856-.81-.865-.809-.953-2.136-1.13-4.79l-.46-6.9M9.5 11l.5 5M14.5 11l-.5 5'
      />
    </SvgIcon>
  );
}

export default React.memo(TrashBinMinimalisticIcon);
