import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function BagMusicIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M3.742 20.555C4.942 22 7.174 22 11.639 22h.722c4.465 0 6.698 0 7.897-1.445m-16.516 0c-1.2-1.446-.788-3.64.034-8.03.586-3.12.878-4.681 1.99-5.603M3.741 20.555s0 0 0 0zm16.516 0c1.2-1.446.789-3.64-.034-8.03-.586-3.12-.878-4.681-1.99-5.603m2.024 13.633s0 0 0 0zM18.235 6.922C17.124 6 15.536 6 12.36 6h-.722c-3.175 0-4.763 0-5.874.922m12.47 0s0 0 0 0zm-12.47 0s0 0 0 0z'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M9 6V5a3 3 0 116 0v1' />
      <path stroke={linearColor} strokeWidth='1.5' d='M12 17a2 2 0 11-4 0 2 2 0 014 0zm0 0v-5' />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M14.058 9.971l-1.316.658a2.247 2.247 0 00-.35.195 1 1 0 00-.374.606c-.018.093-.018.195-.018.4 0 .485 0 .728.06.893a1 1 0 001.056.652c.174-.02.391-.129.826-.346l1.316-.658c.183-.091.274-.137.35-.194a1 1 0 00.374-.607c.018-.093.018-.195.018-.399 0-.486 0-.728-.06-.893a1 1 0 00-1.056-.653c-.174.02-.391.129-.826.346z'
      />
    </SvgIcon>
  );
}

export default React.memo(BagMusicIcon);
