import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function LampIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M9 22h6M12 22v-7' />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M4.962 7.445c.608-2.346.913-3.519 1.699-4.294a4 4 0 01.757-.585C8.365 2 9.577 2 12 2s3.635 0 4.582.566a4 4 0 01.757.585c.786.775 1.09 1.948 1.7 4.294l.084.324c.828 3.189 1.241 4.783.49 5.903a2.985 2.985 0 01-.247.319C18.47 15 16.824 15 13.529 15h-3.058c-3.295 0-4.942 0-5.837-1.01-.09-.1-.172-.206-.247-.318-.751-1.12-.337-2.714.49-5.903l.085-.324z'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M17.5 15v2' />
    </SvgIcon>
  );
}

export default LampIcon;
