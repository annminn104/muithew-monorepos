import { PaletteMode } from '@mui/material';
import { LetterOpenedIcon, PhoneCallingRoundedIcon, SocialFacebookBgIcon, SocialInstagramBgIcon, SocialMessengerBgIcon } from '@styles/ui-mui/icons';

export enum AppModeEnum {
  Dark = 'dark',
  Light = 'light'
}

export const appModeMock: { key: string; defaultMode: PaletteMode } = {
  key: 'APP_MODE_KEY',
  defaultMode: AppModeEnum.Light
};

type NavigationI18nType = 'home' | 'aboutUs' | 'services' | 'contact';

interface INavigationMock {
  key: string;
  i18n: NavigationI18nType;
  slug: string;
  scrolling: string;
  name: string;
}

export const scrollingContactId = '#section-contact';

export const navigationMock: INavigationMock[] = [
  { key: 'home', i18n: 'home', slug: 'home', scrolling: '#section-home', name: 'Home' },
  { key: 'about', i18n: 'aboutUs', slug: 'about', scrolling: '#section-about-us', name: 'About us' },
  { key: 'services', i18n: 'services', slug: 'services', scrolling: '#section-services-video', name: 'Services' },
  { key: 'contact', i18n: 'contact', slug: 'contact', scrolling: scrollingContactId, name: 'Contact' }
];

type ContactHeaderBarI18nType = 'email' | 'phoneNumber' | 'facebook' | 'messenger' | 'instagram';

interface IContactHeaderBarMock {
  info: Array<{ key: string; name: string; i18n: ContactHeaderBarI18nType; icon: any }>;
  social: Array<{ key: string; name: string; i18n: ContactHeaderBarI18nType; icon: any }>;
}

export const contactHeaderBarMock: IContactHeaderBarMock = {
  info: [
    { key: 'email', name: 'Email', i18n: 'email', icon: <LetterOpenedIcon fontSize='small' /> },
    { key: 'phone', name: 'Phone', i18n: 'phoneNumber', icon: <PhoneCallingRoundedIcon fontSize='small' /> }
  ],
  social: [
    { key: 'facebook', name: 'Facebook', i18n: 'facebook', icon: <SocialFacebookBgIcon fontSize='small' /> },
    { key: 'messenger', name: 'Messenger', i18n: 'messenger', icon: <SocialMessengerBgIcon fontSize='small' /> },
    { key: 'instagram', name: 'Instagram', i18n: 'instagram', icon: <SocialInstagramBgIcon fontSize='small' /> }
  ]
};
