import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function SocialMessengerBgIcon({ ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} viewBox='0 0 24 24'>
      <path
        d='M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12Z'
        fill='url(#paint0_radial_9757_40636)'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M4 11.76C4 7.30113 7.49336 4 12 4C16.5066 4 20 7.30113 20 11.76C20 16.2189 16.5066 19.52 12 19.52C11.1905 19.52 10.4139 19.4132 9.68424 19.2125C9.5424 19.1735 9.39157 19.1845 9.25696 19.2439L7.66907 19.9448C7.25371 20.1282 6.78485 19.8328 6.77093 19.3789L6.72736 17.9559C6.722 17.7805 6.64312 17.6167 6.51245 17.4997C4.95584 16.1077 4 14.0923 4 11.76ZM9.54603 10.3011L7.19603 14.0294C6.97051 14.3872 7.41032 14.7904 7.74723 14.5347L10.2715 12.619C10.4423 12.4894 10.6782 12.4887 10.8497 12.6173L12.7188 14.0191C13.2797 14.4398 14.0802 14.2921 14.454 13.699L16.804 9.97064C17.0295 9.61283 16.5897 9.20963 16.2528 9.46531L13.7285 11.3811C13.5577 11.5107 13.3218 11.5114 13.1503 11.3827L11.2812 9.98091C10.7203 9.56027 9.91984 9.70795 9.54603 10.3011Z'
        fill='white'
      />
      <defs>
        <radialGradient
          id='paint0_radial_9757_40636'
          cx={0}
          cy={0}
          r={1}
          gradientUnits='userSpaceOnUse'
          gradientTransform='translate(4.61939 23.8716) rotate(-57.0915) scale(26.1503)'
        >
          <stop stopColor='#0099FF' />
          <stop offset={0.609754} stopColor='#A033FF' />
          <stop offset={0.934823} stopColor='#FF5280' />
          <stop offset={1} stopColor='#FF7061' />
        </radialGradient>
      </defs>
    </SvgIcon>
  );
}

export default SocialMessengerBgIcon;
