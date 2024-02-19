import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function ListHeartIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        fill={linearColor}
        d='M16.52 18.34l-.444.605.444-.604zm.98-4.51l-.526.534a.75.75 0 001.052 0l-.526-.534zm.98 4.51l-.445-.603.445.604zm-.98.48v.75-.75zm-.535-1.083c-.497-.366-1.078-.846-1.527-1.363-.47-.541-.688-1-.688-1.338h-1.5c0 .898.524 1.71 1.056 2.322.552.636 1.232 1.19 1.77 1.587l.889-1.208zm-2.215-2.7c0-.757.343-1.118.664-1.233.337-.122.92-.07 1.56.56l1.052-1.069c-.934-.92-2.102-1.27-3.121-.902-1.035.373-1.655 1.392-1.655 2.643h1.5zm4.174 3.908c.538-.396 1.218-.951 1.77-1.587.532-.613 1.056-1.424 1.056-2.322h-1.5c0 .337-.218.797-.688 1.338-.45.517-1.03.997-1.527 1.363l.89 1.208zm2.826-3.909c0-1.251-.62-2.27-1.655-2.643-1.02-.368-2.187-.018-3.121.902l1.052 1.069c.64-.63 1.223-.682 1.56-.56.321.115.664.476.664 1.232h1.5zm-5.674 3.909c.378.278.802.625 1.424.625v-1.5c-.02 0-.036.001-.097-.031a4.27 4.27 0 01-.438-.302l-.89 1.208zm1.96-1.208a4.247 4.247 0 01-.44.302c-.06.032-.076.031-.096.031v1.5c.622 0 1.046-.347 1.424-.625l-.889-1.208z'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M21 6H3M21 10H3M10 14H3M10 18H3' />
    </SvgIcon>
  );
}

export default React.memo(ListHeartIcon);
