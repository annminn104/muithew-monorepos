import {
  LetterOpenedIcon,
  PhoneCallingRoundedIcon,
  PointOnMapIcon,
  SocialFacebookBgIcon,
  SocialInstagramBgIcon,
  SocialMessengerBgIcon,
  SocialWhatsAppBgIcon
} from '@styles/ui-mui/icons';

export const serviceSectionMock = {
  height: 700,
  divider: 37
};

export const contactSectionMock = {
  info: [
    { key: 'mail', icon: <LetterOpenedIcon /> },
    { key: 'phone', icon: <PhoneCallingRoundedIcon /> },
    { key: 'address', icon: <PointOnMapIcon /> }
  ],
  social: [
    { key: 'facebook', icon: <SocialFacebookBgIcon /> },
    { key: 'messenger', icon: <SocialMessengerBgIcon /> },
    { key: 'instagram', icon: <SocialInstagramBgIcon /> },
    { key: 'whatsApp', icon: <SocialWhatsAppBgIcon /> }
  ]
};
