import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function VirusIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M12.056 19A6.865 6.865 0 0019 12.056C18.969 8.191 15.81 5.031 11.944 5A6.865 6.865 0 005 11.944c.031 3.865 3.19 7.025 7.056 7.056zM18 6l-1.05 1.05M5 5l2 2M17.05 18.05l-.55-.55M6 19.05L7.05 18'
      ></path>
      <path stroke={linearColor} strokeWidth='1.5' d='M16.5 13a2 2 0 11-4 0 2 2 0 014 0zM11 9a1 1 0 11-2 0 1 1 0 012 0z'></path>
      <circle cx='9' cy='13' r='1' fill={linearColor}></circle>
      <circle cx='19.5' cy='4.5' r='1.5' stroke={linearColor} strokeWidth='1.5'></circle>
      <circle cx='1.5' cy='1.5' r='1.5' stroke={linearColor} strokeWidth='1.5' transform='matrix(-1 0 0 1 5 2)'></circle>
      <path stroke={linearColor} strokeWidth='1.5' d='M2 12a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0z'></path>
      <circle cx='1.5' cy='1.5' r='1.5' stroke={linearColor} strokeWidth='1.5' transform='matrix(1 0 0 -1 17.05 21.05)'></circle>
      <circle cx='4.5' cy='20.5' r='1.5' stroke={linearColor} strokeWidth='1.5' transform='rotate(180 4.5 20.5)'></circle>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M13.5 3.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM19.5 13.5a1.5 1.5 0 10-.5-2.915v2.83c.156.055.325.085.5.085zM10.585 19a1.5 1.5 0 002.83 0h-2.83z'
      ></path>
    </SvgIcon>
  );
}

export default React.memo(VirusIcon);
