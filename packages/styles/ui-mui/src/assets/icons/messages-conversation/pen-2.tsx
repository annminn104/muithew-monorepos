import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function Pen2Icon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M4 22h16' />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M13.888 3.663l.742-.742a3.146 3.146 0 114.449 4.45l-.742.74m-4.449-4.448s.093 1.576 1.483 2.966c1.39 1.39 2.966 1.483 2.966 1.483m-4.449-4.45L7.071 10.48c-.462.462-.693.692-.891.947a5.24 5.24 0 00-.599.969c-.139.291-.242.601-.449 1.22l-.875 2.626m14.08-8.13l-6.817 6.817c-.462.462-.692.692-.947.891-.3.234-.625.435-.969.599-.291.139-.601.242-1.22.448l-2.626.876m0 0l-.641.213a.848.848 0 01-1.073-1.073l.213-.641m1.501 1.5l-1.5-1.5'
      />
    </SvgIcon>
  );
}

export default Pen2Icon;
