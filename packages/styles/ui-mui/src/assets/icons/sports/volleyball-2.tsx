import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function Volleyball2Icon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        fill={linearColor}
        d='M11.57 12.553l.592.46-.592-.46zm-.256-8.907l.693.288-.693-.288zm9.929 7.097l.534-.526-.004-.005-.53.53zm.21 1.283a.75.75 0 101.07-1.052l-1.07 1.052zm-15.72 7.017a.75.75 0 000 1.5v-1.5zM3.5 15.75a.75.75 0 000 1.5v-1.5zM8.192 3.356a.75.75 0 00-1.384-.577l1.384.577zm11.684 13.56a.75.75 0 101.248-.832l-1.248.832zM5.853 12.145a.75.75 0 101.472-.29l-1.472.29zm9.58 5.178a.75.75 0 10-.866-1.225l.866 1.225zM14.155 6.08a.75.75 0 10-.31 1.468l.31-1.468zM12 21.25A9.25 9.25 0 012.75 12h-1.5c0 5.937 4.813 10.75 10.75 10.75v-1.5zM21.25 12A9.25 9.25 0 0112 21.25v1.5c5.937 0 10.75-4.813 10.75-10.75h-1.5zM12 2.75A9.25 9.25 0 0121.25 12h1.5c0-5.937-4.813-10.75-10.75-10.75v1.5zm0-1.5C6.063 1.25 1.25 6.063 1.25 12h1.5A9.25 9.25 0 0112 2.75v-1.5zm0 11.5h.092v-1.5H12v1.5zm-.592-1.21l-.43.553 1.184.92.43-.553-1.184-.92zm-.1-9.828l-.686 1.645 1.385.577.685-1.646-1.384-.576zm9.4 9.557l.745.757 1.07-1.052-.746-.757-1.069 1.052zM10.622 3.357a9.884 9.884 0 00.742 9.04l1.272-.795a8.384 8.384 0 01-.63-7.668l-1.384-.577zm.356 8.736A9.473 9.473 0 013.5 15.75v1.5c3.386 0 6.583-1.563 8.662-4.236l-1.184-.921zm1.114.657a9.356 9.356 0 017.784 4.166l1.248-.832a10.855 10.855 0 00-9.032-4.834v1.5zM6.808 2.779a16.177 16.177 0 00-.955 9.366l1.472-.29a14.677 14.677 0 01.867-8.5L6.808 2.78zm7.759 13.32c-2.598 1.839-5.745 2.944-8.834 2.944v1.5c3.436 0 6.881-1.224 9.7-3.22l-.866-1.225zm-.722-8.551a13.735 13.735 0 016.867 3.725l1.061-1.06a15.236 15.236 0 00-7.618-4.133l-.31 1.468z'
      />
    </SvgIcon>
  );
}

export default React.memo(Volleyball2Icon);
