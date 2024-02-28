import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function JarOfPills2Icon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M4 3.5c0-.466 0-.699.076-.883a1 1 0 01.541-.54C4.801 2 5.034 2 5.5 2h9c.466 0 .699 0 .883.076a1 1 0 01.54.541c.077.184.077.417.077.883s0 .699-.076.883a1 1 0 01-.541.54C15.199 5 14.966 5 14.5 5h-9c-.466 0-.699 0-.883-.076a1 1 0 01-.54-.541C4 4.199 4 3.966 4 3.5z'
      />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M2.5 18h8M2.5 10h15M10.5 22H6.957c-.571 0-.857 0-1.127-.037a4 4 0 01-2.153-1.008c-.201-.184-.384-.404-.75-.842A4 4 0 012 17.552v-6.63A4 4 0 013.501 7.8l2.403-1.922c.543-.434.814-.652 1.136-.764C7.36 5 7.708 5 8.403 5h3.24c.7 0 1.051 0 1.375.115.324.114.597.335 1.141.776l2.358 1.908A4 4 0 0118 10.91V12.5M10 12v4m-2-2h4'
      />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M14.773 16.773s.992.21 2.118 1.336c1.126 1.126 1.336 2.118 1.336 2.118m1.037-4.49c.954.953.985 2.469.069 3.385l-2.211 2.21c-.916.917-2.432.886-3.386-.068-.954-.954-.985-2.47-.069-3.386l2.211-2.21c.916-.917 2.432-.886 3.386.068z'
      />
    </SvgIcon>
  );
}

export default JarOfPills2Icon;
