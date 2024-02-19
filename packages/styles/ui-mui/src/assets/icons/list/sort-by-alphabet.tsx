import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function SortByAlphabetIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M13 7H3M10 12H3M8 17H3' />
      <path
        fill={linearColor}
        d='M11.316 16.692a.75.75 0 101.368.616l-1.368-.616zM16.5 7l.684-.308a.75.75 0 00-1.368 0L16.5 7zm3.816 10.308a.75.75 0 101.368-.616l-1.368.616zm-.952-3.944l.684-.308-.684.308zm-5.728-.75a.75.75 0 000 1.5v-1.5zm-.952 4.694l4.5-10-1.368-.616-4.5 10 1.368.616zm9-.616l-1.636-3.636-1.368.615 1.636 3.637 1.368-.616zm-1.636-3.636l-2.864-6.364-1.368.616 2.864 6.363 1.368-.615zm-.684-.442h-5.728v1.5h5.728v-1.5z'
      />
    </SvgIcon>
  );
}

export default React.memo(SortByAlphabetIcon);
