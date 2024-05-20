import { IHeaderNav } from '@/common/@types';

export const HeaderNavMocks: IHeaderNav = [
  {
    name: 'Home',
    hash: '#home'
  },
  {
    name: 'Skills',
    hash: '#skills'
  },
  {
    name: 'Experience',
    hash: '#experience'
  },
  {
    name: 'Projects',
    hash: '#projects'
  },
  {
    name: 'Contact',
    hash: '#contact'
  }
] as const;
