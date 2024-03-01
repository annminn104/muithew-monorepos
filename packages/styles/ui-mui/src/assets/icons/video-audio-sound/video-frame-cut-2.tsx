import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function VideoFrameCut2Icon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M8.5 4H8c-2.828 0-4.243 0-5.121.879C2 5.757 2 7.172 2 10v4c0 2.828 0 4.243.879 5.121C3.757 20 5.172 20 8 20h.5m7-16h.5c2.828 0 4.243 0 5.121.879C22 5.757 22 7.172 22 10v4c0 2.828 0 4.243-.879 5.121C20.243 20 18.828 20 16 20h-.5M17 4v16M7 4v16M2.5 9H7m14.5 0H17M2.5 15H7m14.5 0H17M13.138 2h-2.276a.5.5 0 00-.434.748l1.138 1.992a.5.5 0 00.868 0l1.139-1.992A.5.5 0 0013.137 2zM13.138 22h-2.276a.5.5 0 01-.434-.748l1.138-1.992a.5.5 0 01.868 0l1.139 1.992a.5.5 0 01-.435.748zM12 11.5v1M12 7.5v1M12 15.5v1'
      />
    </SvgIcon>
  );
}

export default VideoFrameCut2Icon;
