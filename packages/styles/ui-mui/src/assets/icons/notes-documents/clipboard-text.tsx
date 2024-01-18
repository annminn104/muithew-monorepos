import { SvgIcon, SvgIconOwnProps } from '@mui/material';
import React from 'react';

function ClipboardTextIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        d='M16 4.00195C18.175 4.01406 19.3529 4.11051 20.1213 4.87889C21 5.75757 21 7.17179 21 10.0002V16.0002C21 18.8286 21 20.2429 20.1213 21.1215C19.2426 22.0002 17.8284 22.0002 15 22.0002H9C6.17157 22.0002 4.75736 22.0002 3.87868 21.1215C3 20.2429 3 18.8286 3 16.0002V10.0002C3 7.17179 3 5.75757 3.87868 4.87889C4.64706 4.11051 5.82497 4.01406 8 4.00195'
        stroke={linearColor}
        strokeWidth='1.5'
      />
      <path d='M7 14.5H15' stroke={linearColor} strokeWidth='1.5' strokeLinecap='round' />
      <path d='M7 18H12.5' stroke={linearColor} strokeWidth='1.5' strokeLinecap='round' />
      <path
        d='M8 3.5C8 2.67157 8.67157 2 9.5 2H14.5C15.3284 2 16 2.67157 16 3.5V4.5C16 5.32843 15.3284 6 14.5 6H9.5C8.67157 6 8 5.32843 8 4.5V3.5Z'
        stroke={linearColor}
        strokeWidth='1.5'
      />
    </SvgIcon>
  );
}

export default React.memo(ClipboardTextIcon);
