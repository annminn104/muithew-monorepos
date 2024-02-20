import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function SearchZoomInRoundedIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <circle cx='11' cy='11' r='9' stroke={linearColor} strokeWidth='1.5' />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M9 11h2m0 0h2m-2 0v2m0-2V9M21.812 20.975c-.063.095-.176.208-.403.434-.226.227-.34.34-.434.403a1.13 1.13 0 01-1.62-.408c-.053-.1-.099-.254-.19-.561-.101-.335-.151-.503-.161-.621a1.13 1.13 0 011.218-1.218c.118.01.285.06.621.16.307.092.46.138.56.192a1.13 1.13 0 01.409 1.619z'
      />
    </SvgIcon>
  );
}

export default React.memo(SearchZoomInRoundedIcon);
