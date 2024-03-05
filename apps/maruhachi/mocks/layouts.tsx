type NavigationI18nType = 'home' | 'aboutUs' | 'services' | 'contact';

export const navigationMock: {
  key: string;
  i18n: NavigationI18nType;
  slug: string;
  scrolling: string;
  name: string;
}[] = [
  {
    key: 'home',
    i18n: 'home',
    slug: 'home',
    scrolling: '#section-home',
    name: 'Home'
  },
  {
    key: 'about',
    i18n: 'aboutUs',
    slug: 'about',
    scrolling: '#section-about',
    name: 'About us'
  },
  {
    key: 'services',
    i18n: 'services',
    slug: 'services',
    scrolling: '#section-services',
    name: 'Services'
  },
  {
    key: 'contact',
    i18n: 'contact',
    slug: 'contact',
    scrolling: '#section-contact',
    name: 'Contact'
  }
];
