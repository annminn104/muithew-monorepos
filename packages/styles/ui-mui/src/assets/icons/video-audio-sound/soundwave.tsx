import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function SoundwaveIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M12 4v16M16 7v10M8 7v10M20 11v2M4 11v2' />
    </SvgIcon>
  );
}

export default SoundwaveIcon;
