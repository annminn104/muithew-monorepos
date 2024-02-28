import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function KeyMinimalisticSquareIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        fill={linearColor}
        d='M16.651 7.349l.53-.53-.53.53zm0 6.511l.53.53-.53-.53zm-7.887-1.414l-.53-.53.53.53zM6.289 14.92l.53.53-.53-.53zm2.79 2.791l-.53-.53.53.53zm2.476-2.475l-.53-.53.53.53zm-5.549.49l-.745.084.745-.083zm.155 1.393l-.746.083.746-.083zm.72.72l-.083.746.083-.746zm1.392.155l.083-.745-.083.745zm-1.924-.482l.53-.53-.53.53zm.14.139l-.531.53.53-.53zm2.447-5.897l-.726.187.726-.187zm3.31 3.31l-.187.726.187-.726zm-2.978.134a.75.75 0 10-1.055 1.066l1.055-1.066zm3.653-4.119a.583.583 0 010-.825l-1.06-1.06a2.083 2.083 0 000 2.946l1.06-1.06zm.825 0a.583.583 0 01-.825 0l-1.06 1.06a2.083 2.083 0 002.945 0l-1.06-1.06zm0-.825a.583.583 0 010 .825l1.06 1.06a2.083 2.083 0 000-2.945l-1.06 1.06zm1.06-1.06a2.083 2.083 0 00-2.946 0l1.06 1.06a.583.583 0 01.826 0l1.06-1.06zm1.315-1.315a3.854 3.854 0 010 5.45l1.06 1.062a5.354 5.354 0 000-7.573l-1.06 1.06zm1.06-1.06a5.354 5.354 0 00-7.572 0l1.061 1.06a3.854 3.854 0 015.451 0l1.06-1.06zm-8.948 5.096L5.76 14.39l1.06 1.06 2.475-2.474-1.06-1.06zm1.377 6.326l.827-.827-1.06-1.06-.828.827 1.061 1.06zm.827-.827l1.648-1.648-1.06-1.06-1.649 1.648 1.061 1.06zM5.261 15.81l.154 1.392 1.491-.166-.155-1.392-1.49.166zm1.537 2.775l1.392.154.166-1.49-1.393-.155-.165 1.49zm-.979-.543l.139.139 1.06-1.06-.138-.14-1.061 1.061zm1.144-.948c.021.002.04.011.056.026l-1.061 1.06c.226.227.522.37.84.405l.165-1.491zm-1.548.108c.036.318.178.614.404.84l1.06-1.06a.092.092 0 01.027.055l-1.49.165zm3.134-.021a.237.237 0 01-.193.067L8.19 18.74a1.737 1.737 0 001.42-.498l-1.06-1.06zM5.76 14.39a1.737 1.737 0 00-.498 1.42l1.49-.166a.237.237 0 01.068-.193L5.76 14.39zm3.904-2.822a3.852 3.852 0 011.007-3.69l-1.06-1.06a5.352 5.352 0 00-1.4 5.123l1.453-.373zm6.458 1.762a3.852 3.852 0 01-3.688 1.007l-.374 1.453a5.352 5.352 0 005.123-1.4l-1.06-1.06zm-4.036 2.436a.09.09 0 01-.036.023l.01.001.373-1.453a1.47 1.47 0 00-1.408.369l1.06 1.06zm-2.791-2.79a1.47 1.47 0 00.369-1.409l-1.453.374c.002.009 0 .013.001.01l.006-.014a.098.098 0 01.016-.022l1.061 1.06zm1.14 3.375l-1.166-1.153-1.055 1.066 1.166 1.153 1.055-1.066z'
      />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12z'
      />
    </SvgIcon>
  );
}

export default KeyMinimalisticSquareIcon;
