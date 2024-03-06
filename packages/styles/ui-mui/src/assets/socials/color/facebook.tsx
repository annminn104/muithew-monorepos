import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function SocialFacebookColIcon({ ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} viewBox='0 0 24 24'>
      <path
        d='M16.6707 15.4684L17.2027 11.9996H13.8744V9.74846C13.8744 8.79944 14.3393 7.87439 15.8301 7.87439H17.3434V4.92115C17.3434 4.92115 15.97 4.68677 14.657 4.68677C11.9158 4.68677 10.1242 6.34808 10.1242 9.3557V11.9996H7.07715V15.4684H10.1242V23.8542C10.7352 23.9501 11.3614 24 11.9993 24C12.6372 24 13.2634 23.9501 13.8744 23.8542V15.4684H16.6707Z'
        fill='#1877F2'
      />
    </SvgIcon>
  );
}

export default SocialFacebookColIcon;
