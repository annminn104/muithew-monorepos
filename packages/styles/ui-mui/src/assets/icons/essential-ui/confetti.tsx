import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function ConfettiIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M4.012 15.762l1.69-5.069c.766-2.298 1.149-3.447 2.055-3.66.906-.215 1.763.642 3.475 2.355l3.38 3.379c1.712 1.713 2.569 2.569 2.355 3.475-.214.906-1.363 1.29-3.661 2.055l-5.069 1.69c-2.765.922-4.148 1.383-4.878.653-.73-.73-.269-2.113.653-4.878z'
      />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M12.235 18.346s-.758-2.28-.758-3.79c0-1.51.758-3.791.758-3.791m-4.17 8.718s-.64-2.751-.758-4.549c-.195-2.969.758-7.581.758-7.581M14.51 10.006l.143-.72c.146-.727.67-1.32 1.373-1.554a2.066 2.066 0 001.372-1.555l.144-.72M17.57 13.253l.212.123c.657.38 1.483.296 2.051-.207a1.763 1.763 0 011.876-.297L22 13M9.795 2.78A1.4 1.4 0 0010 4.5l.098.098c.393.393.538.97.377 1.503'
      />
      <path
        fill={linearColor}
        d='M6.928 3.94a.536.536 0 11.758.76.536.536 0 01-.758-.76zM12.157 7.157a.536.536 0 11.759.759.536.536 0 01-.759-.759zM17.157 10.157a.536.536 0 11.759.759.536.536 0 01-.759-.759zM19.058 15.313a.536.536 0 11.759.759.536.536 0 01-.759-.759z'
      />
      <path
        stroke={linearColor}
        strokeLinejoin='round'
        d='M19.362 7.714c-.67.67-.19 2.614-.19 2.614s1.944.48 2.614-.19c.71-.71.308-1.641-.786-1.638.003-1.094-.928-1.496-1.638-.786z'
      />
      <path
        stroke={linearColor}
        d='M15.188 3.417l-.027.098c-.03.106-.046.16-.039.212.008.052.036.098.094.189l.052.082c.202.32.303.48.234.611-.069.13-.262.146-.648.176l-.1.008c-.11.008-.164.013-.212.038-.048.025-.083.068-.155.155l-.065.079c-.25.304-.375.456-.518.437-.143-.02-.21-.198-.34-.555l-.035-.092c-.037-.102-.056-.152-.093-.19-.037-.036-.088-.055-.189-.092l-.092-.034c-.357-.132-.535-.198-.555-.34-.02-.144.133-.27.437-.52l.079-.065c.086-.07.13-.106.155-.154.025-.048.03-.103.038-.213l.008-.1c.03-.385.045-.578.176-.647.13-.069.29.032.61.234l.083.052c.091.058.136.086.189.093.052.008.106-.008.212-.038l.097-.027c.376-.107.563-.16.664-.06.1.1.047.288-.06.663z'
      />
    </SvgIcon>
  );
}

export default ConfettiIcon;
