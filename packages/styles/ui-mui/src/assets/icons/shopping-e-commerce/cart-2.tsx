import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function Cart2Icon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M3.864 16.455c-.858-3.432-1.287-5.147-.386-6.301C4.378 9 6.148 9 9.685 9h4.63c3.538 0 5.307 0 6.207 1.154.901 1.153.472 2.87-.386 6.301-.546 2.183-.818 3.274-1.632 3.91-.814.635-1.939.635-4.189.635h-4.63c-2.25 0-3.375 0-4.189-.635-.814-.636-1.087-1.727-1.632-3.91z'
      />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M19.5 9.5l-.71-2.605c-.274-1.005-.411-1.507-.692-1.886A2.5 2.5 0 0017 4.172C16.56 4 16.04 4 15 4M4.5 9.5l.71-2.605c.274-1.005.411-1.507.692-1.886A2.5 2.5 0 017 4.172C7.44 4 7.96 4 9 4'
      />
      <path stroke={linearColor} strokeWidth='1.5' d='M9 4a1 1 0 011-1h4a1 1 0 110 2h-4a1 1 0 01-1-1z' />
      <path stroke={linearColor} strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M4.5 18L12 9m7.5 9l-7-8.5m-8 .5L12 21l7.5-11' />
    </SvgIcon>
  );
}

export default Cart2Icon;
