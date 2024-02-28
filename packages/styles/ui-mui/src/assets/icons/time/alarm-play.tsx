import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function AlarmPlayIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <circle cx='12' cy='13' r='9' stroke={linearColor} strokeWidth='1.5' />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M13.888 10.935C14.963 11.812 15.5 12.25 15.5 13s-.537 1.188-1.612 2.065c-.297.242-.591.47-.862.66-.237.167-.506.339-.784.508-1.073.652-1.609.978-2.09.617-.48-.36-.524-1.116-.612-2.628-.024-.427-.04-.846-.04-1.222s.016-.795.04-1.222c.088-1.512.132-2.267.612-2.628.481-.361 1.018-.035 2.09.617.278.169.547.341.784.508.27.19.565.418.862.66z'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M3.5 4.5l4-2.5M20.5 4.5l-4-2.5' />
    </SvgIcon>
  );
}

export default AlarmPlayIcon;
