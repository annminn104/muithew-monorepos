import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function Reel2Icon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <circle cx={12} cy={12} r={10} stroke={linearColor} strokeWidth={1.5} />
      <path d='M12 22L22 22' stroke={linearColor} strokeWidth={1.5} strokeLinecap='round' />
      <path
        d='M12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9Z'
        stroke={linearColor}
        strokeWidth={1.5}
      />
      <path
        d='M19.5 12C19.5 12.5523 19.0523 13 18.5 13C17.9477 13 17.5 12.5523 17.5 12C17.5 11.4477 17.9477 11 18.5 11C19.0523 11 19.5 11.4477 19.5 12Z'
        fill={linearColor}
      />
      <path
        d='M6.5 12C6.5 12.5523 6.05228 13 5.5 13C4.94772 13 4.5 12.5523 4.5 12C4.5 11.4477 4.94772 11 5.5 11C6.05228 11 6.5 11.4477 6.5 12Z'
        fill={linearColor}
      />
      <path
        d='M12 4.5C12.5523 4.5 13 4.94772 13 5.5C13 6.05228 12.5523 6.5 12 6.5C11.4477 6.5 11 6.05228 11 5.5C11 4.94772 11.4477 4.5 12 4.5Z'
        fill={linearColor}
      />
      <path
        d='M12 17.5C12.5523 17.5 13 17.9477 13 18.5C13 19.0523 12.5523 19.5 12 19.5C11.4477 19.5 11 19.0523 11 18.5C11 17.9477 11.4477 17.5 12 17.5Z'
        fill={linearColor}
      />
    </SvgIcon>
  );
}

export default Reel2Icon;
