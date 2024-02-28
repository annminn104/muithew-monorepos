import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function HeadphonesRoundIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeWidth='1.5' d='M21 17v-5a9 9 0 10-18 0v5' />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M22 15.5v2M2 15.5v2' />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M8 13.845c0-.765 0-1.147-.175-1.413a1.015 1.015 0 00-.34-.322c-.271-.156-.637-.12-1.368-.048-1.232.121-1.848.182-2.29.514a2.055 2.055 0 00-.55.63C3 13.697 3 14.34 3 15.629v1.565c0 1.275 0 1.913.282 2.406.106.184.238.35.392.492.413.38 1.014.5 2.218.736.847.167 1.271.251 1.584.075a1.01 1.01 0 00.3-.259C8 20.356 8 19.908 8 19.01v-5.165zM16 13.845c0-.765 0-1.147.175-1.413.088-.133.204-.244.34-.322.271-.156.637-.12 1.368-.048 1.232.121 1.848.182 2.29.514.223.169.41.383.55.63.277.49.277 1.133.277 2.422v1.565c0 1.275 0 1.913-.282 2.406-.105.184-.238.35-.392.492-.413.38-1.014.5-2.218.736-.847.167-1.271.251-1.584.075a1.008 1.008 0 01-.3-.259C16 20.356 16 19.908 16 19.01v-5.165z'
      />
    </SvgIcon>
  );
}

export default HeadphonesRoundIcon;
