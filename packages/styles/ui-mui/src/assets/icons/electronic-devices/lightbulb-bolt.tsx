import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function LightbulbBoltIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M14.5 19.5h-5m5 0c0-.713 0-1.07.038-1.307.123-.763.144-.812.631-1.412.151-.186.711-.688 1.832-1.692A7.5 7.5 0 107 15.09c1.12 1.004 1.68 1.505 1.832 1.692.487.6.508.649.63 1.412.039.237.039.593.039 1.307m5 0c0 .935 0 1.402-.201 1.75a1.5 1.5 0 01-.549.549C13.402 22 12.935 22 12 22s-1.402 0-1.75-.201a1.5 1.5 0 01-.549-.549c-.201-.348-.201-.815-.201-1.75'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M12.786 8.5l-2.143 3h3l-2.143 3' />
    </SvgIcon>
  );
}

export default React.memo(LightbulbBoltIcon);
