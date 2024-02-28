import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function JarOfPillsIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M6 3.5c0-.466 0-.699.076-.883a1 1 0 01.541-.54C6.801 2 7.034 2 7.5 2h9c.466 0 .699 0 .883.076a1 1 0 01.54.541c.077.184.077.417.077.883s0 .699-.076.883a1 1 0 01-.541.54C17.199 5 16.966 5 16.5 5h-9c-.466 0-.699 0-.883-.076a1 1 0 01-.54-.541C6 4.199 6 3.966 6 3.5z'
      />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M4.5 18h15M4.5 10h15M5.501 7.799l2.403-1.922c.543-.434.814-.652 1.136-.764C9.36 5 9.708 5 10.403 5h3.24c.7 0 1.051 0 1.375.115.324.114.597.335 1.142.776l2.357 1.908A4 4 0 0120 10.91v6.656a4 4 0 01-.912 2.543l-.359.435A4 4 0 0115.642 22H8.957c-.571 0-.857 0-1.127-.037a4 4 0 01-2.153-1.008c-.201-.184-.384-.404-.75-.842A4 4 0 014 17.552v-6.63A4 4 0 015.501 7.8zM12 12v4m-2-2h4'
      />
    </SvgIcon>
  );
}

export default JarOfPillsIcon;
