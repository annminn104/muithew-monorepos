import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function MusicNotesIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeWidth='1.5' d='M12 19.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM22 17.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z' />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M22 8l-10 4' />
      <path
        fill={linearColor}
        d='M14.456 5.158l.29.692-.29-.692zm2-.837l-.29-.692.29.692zm4.652-.98l-.416.624.416-.624zM12.75 19V8.847h-1.5V19h1.5zm10-1.847V8.011h-1.5v9.143h1.5zM14.745 5.85l2-.837-.579-1.384-2 .837.58 1.384zm8.005 2.16c0-1.333.002-2.42-.12-3.24-.123-.837-.4-1.583-1.106-2.054l-.832 1.249c.185.123.355.353.455 1.024.101.686.103 1.638.103 3.022h1.5zm-6.005-2.997c1.276-.534 2.156-.9 2.828-1.072.657-.167.935-.099 1.12.024l.83-1.249c-.707-.47-1.502-.437-2.32-.228-.805.205-1.806.626-3.037 1.141l.58 1.384zM12.75 8.848c0-.662.001-1.098.037-1.434.035-.317.095-.474.172-.59l-1.248-.83c-.258.387-.366.805-.415 1.258-.047.436-.046.967-.046 1.596h1.5zm1.416-4.382c-.58.243-1.07.447-1.454.659-.4.22-.743.48-1.001.868l1.248.831c.077-.115.199-.232.478-.386.296-.163.698-.333 1.308-.588l-.579-1.384z'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M7 11V2' />
      <circle cx='4.5' cy='10.5' r='2.5' stroke={linearColor} strokeWidth='1.5' />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M10 5c-1.243 0-3-.929-3-3' />
    </SvgIcon>
  );
}

export default MusicNotesIcon;
