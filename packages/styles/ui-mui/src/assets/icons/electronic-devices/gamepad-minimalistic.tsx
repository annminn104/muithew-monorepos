import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function GamepadMinimalisticIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M8.5 11v3M7 12.5h3'></path>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M21.92 17.377l-1.085-4.517c-.613-2.553-.92-3.83-1.79-4.666-.22-.212-.463-.4-.725-.56C17.284 7 15.937 7 13.243 7h-2.486c-2.694 0-4.041 0-5.077.634-.262.16-.505.348-.725.56-.87.837-1.177 2.113-1.79 4.666L2.08 17.377c-.381 1.587.633 3.175 2.264 3.546 1.376.312 2.791-.342 3.413-1.576l.128-.255c.57-1.133 1.754-1.852 3.051-1.852h2.128c1.297 0 2.48.719 3.051 1.852l.128.255c.622 1.234 2.037 1.888 3.413 1.575 1.631-.37 2.645-1.958 2.264-3.545z'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M12 7V6a1 1 0 011-1h1a1 1 0 001-1V3'></path>
      <path fill={linearColor} d='M16 11a1 1 0 11-2 0 1 1 0 012 0zM18 14a1 1 0 11-2 0 1 1 0 012 0z'></path>
    </SvgIcon>
  );
}

export default React.memo(GamepadMinimalisticIcon);
