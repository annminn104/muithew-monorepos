import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function PlusCircleIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        fill={linearColor}
        d='M10.013 21.967l-.15.735.15-.735zm6.021-1.482a.75.75 0 10.66 1.347l-.66-1.347zm-5.872.747c-4.224-.858-7.412-4.625-7.412-9.149h-1.5c0 5.242 3.696 9.62 8.613 10.62l.3-1.47zM2.75 12.083c0-5.16 4.147-9.333 9.25-9.333v-1.5c-5.943 0-10.75 4.856-10.75 10.833h1.5zM12 2.75c5.103 0 9.25 4.173 9.25 9.333h1.5C22.75 6.106 17.943 1.25 12 1.25v1.5zm.75 17.4v-5.042h-1.5v5.042h1.5zm8.5-8.067c0 3.697-2.13 6.89-5.216 8.402l.66 1.347a10.84 10.84 0 006.056-9.749h-1.5zM9.863 22.703c1.658.336 2.887-1.085 2.887-2.553h-1.5c0 .759-.58 1.186-1.088 1.082l-.299 1.47z'
      />
      <path stroke={linearColor} strokeWidth='1.5' d='M9 11.8a.8.8 0 01.8-.8h4.4a.8.8 0 01.8.8v.2a3 3 0 11-6 0v-.2z'></path>
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M13.5 11V9M10.5 11V9'></path>
    </SvgIcon>
  );
}

export default React.memo(PlusCircleIcon);
