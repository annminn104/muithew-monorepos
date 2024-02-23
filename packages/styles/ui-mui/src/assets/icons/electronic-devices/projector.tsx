import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function ProjectorIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M18 6.017c1.553.047 2.48.22 3.121.862C22 7.757 22 9.172 22 12c0 2.828 0 4.243-.879 5.121C20.243 18 18.828 18 16 18H8c-2.828 0-4.243 0-5.121-.879C2 16.243 2 14.828 2 12c0-2.828 0-4.243.879-5.121C3.757 6 5.172 6 8 6h2'
      />
      <path
        fill={linearColor}
        d='M18.33 20.335a.75.75 0 101.34-.67l-1.34.67zm-1-2l1 2 1.34-.67-1-2-1.34.67zM5.67 20.335a.75.75 0 11-1.34-.67l1.34.67zm1-2l-1 2-1.34-.67 1-2 1.34.67z'
      />
      <circle cx='14' cy='9' r='5' stroke={linearColor} strokeWidth='1.5' />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M12 9a2 2 0 102-2'></path>
      <path stroke={linearColor} strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M5.5 9.5V11'></path>
    </SvgIcon>
  );
}

export default React.memo(ProjectorIcon);
