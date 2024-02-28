import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function HandShakeIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M8.784 22c-1.685-.752-3.077-1.924-3.992-3.493M14.825 2.186c1.677-.477 3.408-.023 4.617 1.211'
      />
      <path
        fill={linearColor}
        d='M4.01 8.367l-.372-.652.373.652zm2.492.5l.648-.377-.648.377zm-3.3 1.886l-.647.378.648-.378zm4.495-7.38l.648-.378-.648.378zm.842 1.443l-.648.378.648-.378zm1.877 4.71a.75.75 0 001.296-.756l-1.296.755zm-2.878 2.607a.75.75 0 101.296-.756l-1.296.756zm-3.14-6.875l-.648.378.647-.378zm7.44-2.327l.648-.378-.648.378zm2.526 4.33l.648-.377-.648.378zm1.683 2.888l.373.651a.75.75 0 00.275-1.029l-.648.378zm1.616-4.773l-.648.378.648-.378zm2.526 4.331l.648-.378-.648.378zM6.99 17.25l.648-.378-.648.378zm9.967 2.003l-.373-.65.373.65zM13.784 15.3a.75.75 0 001.296-.756l-1.296.756zM4.383 9.018c.633-.362 1.257-.14 1.471.227L7.15 8.49c-.716-1.228-2.323-1.454-3.512-.775l.745 1.303zm-.745-1.303c-1.19.681-1.803 2.182-1.083 3.416l1.296-.756c-.21-.36-.1-.996.532-1.357l-.745-1.303zM7.05 3.75l.842 1.444 1.296-.756-.842-1.443-1.296.755zm.842 1.444l2.525 4.331 1.296-.755-2.525-4.332-1.296.756zm.943 6.183L7.15 8.49l-1.296.755 1.684 2.888 1.296-.756zM7.15 8.49L5.045 4.88l-1.295.756 2.104 3.61L7.15 8.49zM5.577 3.523c.634-.362 1.258-.14 1.472.227l1.296-.755C7.629 1.767 6.022 1.54 4.833 2.22l.744 1.303zM4.833 2.22c-1.19.681-1.803 2.182-1.083 3.416l1.295-.756c-.21-.36-.099-.996.532-1.357L4.833 2.22zm6.357 1.088l2.526 4.332 1.296-.756-2.526-4.331-1.296.755zm2.526 4.332l1.684 2.887 1.295-.756-1.683-2.887-1.296.756zM9.719 3.08c.633-.361 1.257-.139 1.471.228l1.296-.755c-.716-1.228-2.323-1.454-3.512-.774L9.72 3.08zM8.974 1.78c-1.19.68-1.803 2.181-1.083 3.415l1.296-.756c-.21-.36-.1-.996.532-1.357l-.745-1.302zm8.041 3.975l2.526 4.331 1.296-.756L18.31 5l-1.296.755zm-1.471-.228c.633-.362 1.257-.14 1.471.228l1.296-.756c-.716-1.227-2.323-1.453-3.512-.774l.745 1.302zm-.745-1.302c-1.19.68-1.803 2.182-1.083 3.416l1.296-.756c-.21-.36-.1-.997.532-1.358l-.745-1.302zM2.555 11.131l3.788 6.497 1.296-.756-3.788-6.497-1.296.756zm14.03 7.471c-3.367 1.924-7.337 1.029-8.946-1.73l-1.296.756c2.111 3.62 7.065 4.518 10.987 2.276l-.745-1.302zm2.956-8.517c1.605 2.753.41 6.594-2.956 8.517l.745 1.302c3.924-2.242 5.621-6.949 3.507-10.575l-1.296.756zm-4.461 4.46c-.675-1.159-.203-2.863 1.34-3.745l-.745-1.302c-2.102 1.201-3.075 3.77-1.891 5.802l1.296-.756z'
      />
    </SvgIcon>
  );
}

export default HandShakeIcon;
