import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function HikingRoundedIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <circle cx='11.5' cy='4.5' r='2.5' stroke={linearColor} strokeWidth='1.5' />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M9 17.5s-.426 1.62-1 2.5c-.603.925-2 2-2 2' />
      <path
        fill={linearColor}
        d='M10.21 12.901l.746.075-.746-.075zm-.069.686l-.746-.075.746.075zm8.436-2.734l-.48-.576.48.576zm.903.223a.75.75 0 00-.96-1.152l.96 1.152zm-8.276 4.677l-.397.636.397-.636zm.333.208l.398-.636-.398.636zm2.72 4.432l.747-.067-.747.067zm-.604 1.674a.75.75 0 001.494-.134l-1.494.134zM13 11.5l-.386.643a.75.75 0 00.05.028L13 11.5zm-3.536 1.326l-.069.686 1.493.15.068-.686-1.492-.15zm9.593-1.397l.423-.353-.96-1.152-.423.353.96 1.152zm-8.25 4.96l.333.208.795-1.272-.333-.208-.795 1.272zm2.703 4.07l.143 1.608 1.494-.134-.143-1.607-1.494.133zm-.845-8.288a5.878 5.878 0 006.392-.742l-.96-1.152a4.379 4.379 0 01-4.762.552l-.67 1.342zm-1.525 4.426a5.086 5.086 0 012.37 3.862l1.494-.133a6.586 6.586 0 00-3.07-5.001l-.794 1.272zm-1.745-3.085a3.036 3.036 0 001.412 2.877l.795-1.272a1.535 1.535 0 01-.714-1.455l-1.493-.15zm1.561-.536a1.098 1.098 0 011.658-.833l.772-1.286c-1.634-.98-3.733.073-3.922 1.97l1.492.149z'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M19 22V8M9 10l-2.389.144a1.721 1.721 0 00-1.035 3.001L7.665 15' />
    </SvgIcon>
  );
}

export default React.memo(HikingRoundedIcon);
