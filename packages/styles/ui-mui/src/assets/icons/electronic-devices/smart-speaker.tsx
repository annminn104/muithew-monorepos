import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function SmartSpeakerIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        fill={linearColor}
        d='M2.507 14.615c.877.765 3.318 2.635 9.493 2.635v-1.5c-5.807 0-7.9-1.736-8.507-2.266l-.986 1.131zM12 17.25c3.15 0 5.325-.48 6.823-1.066 1.509-.59 2.3-1.278 2.684-1.632l-1.015-1.104c-.297.273-.932.836-2.216 1.339-1.294.507-3.278.963-6.276.963v1.5z'
      />
      <path stroke={linearColor} strokeWidth='1.5' d='M15.5 16c-.582-1.748-1.653-2.5-3.5-2.5s-2.918.752-3.5 2.5' />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M8 4.411c-.32.276-.5.674-.5 1 0 1.154 1.739 2 4.5 2s4.5-.846 4.5-2c0-.326-.18-.636-.5-.911'
      />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M3.321 6.658a4.833 4.833 0 013.918-4.197l.215-.04a24.736 24.736 0 019.091 0l.323.06a4.701 4.701 0 013.81 4.067c.418 3.544.43 7.125.034 10.672l-.017.154a4.838 4.838 0 01-4.215 4.26l-.906.113c-.495.062-.742.093-.99.118a24.88 24.88 0 01-5.169 0 51.167 51.167 0 01-.99-.118l-1.015-.126a4.714 4.714 0 01-4.105-4.137 46.932 46.932 0 010-10.689l.016-.137z'
      />
    </SvgIcon>
  );
}

export default SmartSpeakerIcon;
