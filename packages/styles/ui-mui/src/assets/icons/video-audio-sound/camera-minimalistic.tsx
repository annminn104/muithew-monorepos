import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function CameraMinimalisticIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <circle cx={12} cy={13} r={3} stroke={linearColor} strokeWidth={1.5} />
      <path
        d='M9.99998 19.9999H14C16.8089 19.9999 18.2134 19.9999 19.2223 19.3258C19.659 19.0339 20.034 18.6589 20.3259 18.2222C21 17.2133 21 15.8088 21 12.9999C21 10.191 20.9998 8.78673 20.3257 7.77783C20.0339 7.34107 19.6589 6.96607 19.2221 6.67423C18.2132 6.00011 16.8088 6.00011 13.9998 6.00011H9.99983C7.1909 6.00011 5.78644 6.00011 4.77755 6.67423C4.34079 6.96607 3.96578 7.34107 3.67395 7.77783C2.99998 8.7865 2.99998 10.1903 2.99998 12.998L2.99998 12.9999C2.99998 15.8088 2.99998 17.2133 3.6741 18.2222C3.96593 18.6589 4.34094 19.0339 4.7777 19.3258C5.78659 19.9999 7.19105 19.9999 9.99998 19.9999Z'
        stroke={linearColor}
        strokeWidth={1.5}
      />
      <path d='M18 10H17.5' stroke={linearColor} strokeWidth={1.5} strokeLinecap='round' />
      <path d='M15 3H9' stroke={linearColor} strokeWidth={1.5} strokeLinecap='round' />
    </SvgIcon>
  );
}

export default CameraMinimalisticIcon;
