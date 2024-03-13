import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function SmartphoneRotateAngleIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M15 5H9' />
      <path
        fill={linearColor}
        d='M21.426 14.412a.75.75 0 10-.931 1.176l.931-1.176zm-17.92 1.176a.75.75 0 10-.932-1.176l.931 1.176zm8.494 5.1l.494.564a.75.75 0 000-1.129l-.494.564zm-1.5-1.313l.494-.564a.75.75 0 00-1.244.564h.75zm0 2.625h-.75a.75.75 0 001.244.564L10.5 22zm3.924-2.183a.75.75 0 00.152 1.493l-.152-1.493zm6.07-4.23c.574.455.756.856.756 1.163h1.5c0-.95-.567-1.738-1.324-2.338l-.931 1.176zM2.75 16.75c0-.307.182-.708.755-1.162l-.931-1.176c-.757.6-1.324 1.388-1.324 2.338h1.5zm9.744 3.373l-1.5-1.312-.988 1.128 1.5 1.313.988-1.129zm-1.5 2.441l1.5-1.312-.988-1.129-1.5 1.313.988 1.128zM21.25 16.75c0 .457-.425 1.112-1.719 1.76-1.23.617-3.009 1.095-5.107 1.307l.152 1.493c2.215-.225 4.186-.736 5.627-1.459 1.379-.69 2.547-1.723 2.547-3.101h-1.5zm-11.5 2.625v1.268h1.5v-1.268h-1.5zm0 1.268V22h1.5v-1.357h-1.5zm.794-.748c-2.343-.139-4.371-.605-5.788-1.248-.71-.322-1.232-.672-1.565-1.017-.33-.342-.441-.637-.441-.88h-1.5c0 .744.35 1.393.862 1.922.509.526 1.21.972 2.024 1.341 1.63.74 3.851 1.233 6.32 1.38l.088-1.498z'
      />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M5.502 17c-.002-.312-.002-.645-.002-1V8c0-2.828 0-4.243.879-5.121C7.257 2 8.672 2 11.5 2h1c2.828 0 4.243 0 5.121.879.879.878.879 2.293.879 5.121v8c0 .355 0 .688-.002 1'
      />
    </SvgIcon>
  );
}

export default SmartphoneRotateAngleIcon;