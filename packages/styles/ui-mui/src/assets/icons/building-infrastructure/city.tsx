import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function CityIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M17 22v-6c0-1.886 0-2.828-.586-3.414C15.828 12 14.886 12 13 12h-2c-1.886 0-2.828 0-3.414.586C7 13.172 7 14.114 7 16v6'
      />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M21 22V7.772c0-1.34 0-2.011-.356-2.525-.356-.514-.984-.75-2.24-1.22-2.455-.921-3.682-1.381-4.543-.785C13 3.84 13 5.15 13 7.772V12'
      />
      <path
        fill={linearColor}
        d='M3.25 8a.75.75 0 001.5 0h-1.5zm6 0a.75.75 0 001.5 0h-1.5zm.457-3.207l-.53.53.53-.53zM6.25 4a.75.75 0 001.5 0h-1.5zm1.5-2a.75.75 0 00-1.5 0h1.5zm-4 20V12h-1.5v10h1.5zM7 8.75c.964 0 1.612.002 2.095.067.461.062.659.169.789.3l1.06-1.062c-.455-.455-1.022-.64-1.65-.725-.606-.082-1.372-.08-2.294-.08v1.5zM11.75 12c0-.922.002-1.688-.08-2.294-.084-.628-.27-1.195-.726-1.65l-1.06 1.06c.13.13.237.328.3.79.064.482.066 1.13.066 2.094h1.5zM7 7.25c-.922 0-1.688-.002-2.294.08-.628.084-1.195.27-1.65.725l1.06 1.061c.13-.13.328-.237.79-.3.482-.064 1.13-.066 2.094-.066v-1.5zM3.75 12c0-.964.002-1.612.067-2.095.062-.461.169-.659.3-.789l-1.062-1.06c-.455.455-.64 1.022-.725 1.65-.082.606-.08 1.372-.08 2.294h1.5zm1-4V6.5h-1.5V8h1.5zM6 5.25h2v-1.5H6v1.5zM9.25 6.5V8h1.5V6.5h-1.5zM8 5.25c.493 0 .787.002.997.03a.706.706 0 01.18.043l1.06-1.06c-.309-.31-.684-.422-1.04-.47C8.863 3.748 8.45 3.75 8 3.75v1.5zm2.75 1.25c0-.45.002-.863-.043-1.197-.048-.356-.16-.731-.47-1.04l-1.06 1.06.001.003a.706.706 0 01.042.177c.028.21.03.504.03.997h1.5zm-6 0c0-.493.002-.787.03-.997a.706.706 0 01.043-.18l-1.06-1.06c-.31.309-.422.684-.47 1.04-.045.334-.043.747-.043 1.197h1.5zM6 3.75c-.45 0-.863-.002-1.197.043-.356.048-.731.16-1.04.47l1.06 1.06.003-.001a.706.706 0 01.177-.042c.21-.028.504-.03.997-.03v-1.5zM7.75 4V2h-1.5v2h1.5z'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M22 22H2' />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M10 15h4M10 18h4' />
    </SvgIcon>
  );
}

export default React.memo(CityIcon);
