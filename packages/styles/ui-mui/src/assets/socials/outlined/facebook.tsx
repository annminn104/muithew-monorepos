import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function SocialFacebookOutIcon({ linearColor = '#1F1F1F', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} viewBox='0 0 24 24'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12 0.96C5.90278 0.96 0.96 5.90278 0.96 12C0.96 18.0972 5.90278 23.04 12 23.04C18.0972 23.04 23.04 18.0972 23.04 12C23.04 5.90278 18.0972 0.96 12 0.96ZM0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z'
        fill={linearColor}
      />
      <path
        d='M16.6707 15.4684L17.2027 11.9996H13.8744V9.74846C13.8744 8.79944 14.3393 7.87439 15.8301 7.87439H17.3434V4.92115C17.3434 4.92115 15.97 4.68677 14.657 4.68677C11.9158 4.68677 10.1242 6.34808 10.1242 9.3557V11.9996H7.07715V15.4684H10.1242V23.8542C10.7352 23.9501 11.3614 24 11.9993 24C12.6372 24 13.2634 23.9501 13.8744 23.8542V15.4684H16.6707'
        fill={linearColor}
      />
    </SvgIcon>
  );
}

export default SocialFacebookOutIcon;
