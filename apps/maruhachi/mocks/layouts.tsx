import { LetterOpenedIcon, PhoneCallingIcon } from '@styles/ui-mui/icons';

type NavigationI18nType = 'home' | 'aboutUs' | 'services' | 'contact';

interface INavigationMock {
  key: string;
  i18n: NavigationI18nType;
  slug: string;
  scrolling: string;
  name: string;
}

export const navigationMock: INavigationMock[] = [
  { key: 'home', i18n: 'home', slug: 'home', scrolling: '#section-home', name: 'Home' },
  { key: 'about', i18n: 'aboutUs', slug: 'about', scrolling: '#section-about', name: 'About us' },
  { key: 'services', i18n: 'services', slug: 'services', scrolling: '#section-services', name: 'Services' },
  { key: 'contact', i18n: 'contact', slug: 'contact', scrolling: '#section-contact', name: 'Contact' }
];

type ContactHeaderBarI18nType = 'email' | 'phoneNumber';

interface IContactHeaderBarMock {
  info: Array<{ key: string; name: string; i18n: ContactHeaderBarI18nType; icon: any }>;
}

export const contactHeaderBarMock: IContactHeaderBarMock = {
  info: [
    { key: 'email', name: 'Email', i18n: 'email', icon: <LetterOpenedIcon /> },
    { key: 'phone', name: 'Phone', i18n: 'phoneNumber', icon: <PhoneCallingIcon /> }
  ]
};
