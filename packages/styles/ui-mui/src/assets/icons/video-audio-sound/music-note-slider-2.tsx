import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function MusicNoteSlider2Icon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M5 8c0-2.828 0-4.243.879-5.121C6.757 2 8.172 2 11 2h2c2.828 0 4.243 0 5.121.879C19 3.757 19 5.172 19 8v8c0 2.828 0 4.243-.879 5.121C17.243 22 15.828 22 13 22h-2c-2.828 0-4.243 0-5.121-.879C5 20.243 5 18.828 5 16V8zM19 19.5c.465 0 .697 0 .891-.03a2.5 2.5 0 002.078-2.079c.031-.194.031-.426.031-.891v-9c0-.465 0-.697-.03-.891A2.5 2.5 0 0019.89 4.53C19.697 4.5 19.465 4.5 19 4.5M5 19.5c-.465 0-.697 0-.891-.03A2.5 2.5 0 012.03 17.39C2 17.197 2 16.965 2 16.5v-9c0-.465 0-.697.03-.891A2.5 2.5 0 014.11 4.53C4.303 4.5 4.535 4.5 5 4.5'
      />
      <path stroke={linearColor} strokeWidth='1.5' d='M12 15a2 2 0 11-4 0 2 2 0 014 0zm0 0v-5' />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M14.058 7.971l-1.316.658a2.247 2.247 0 00-.35.195 1 1 0 00-.374.606c-.018.093-.018.195-.018.4 0 .485 0 .728.06.893a1 1 0 001.056.652c.174-.02.391-.129.826-.346l1.316-.658c.183-.091.274-.137.35-.194a1 1 0 00.374-.607C16 9.477 16 9.375 16 9.171c0-.486 0-.728-.06-.893a1 1 0 00-1.056-.653c-.174.02-.391.129-.826.346z'
      />
    </SvgIcon>
  );
}

export default MusicNoteSlider2Icon;
