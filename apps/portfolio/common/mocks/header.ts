import { IHeaderNav } from '@/common/@types';
import { HeaderSectionEnum } from '../enums';

export const HeaderNavMocks: IHeaderNav = [
  {
    name: 'Home',
    hash: HeaderSectionEnum.Home
  },
  {
    name: 'Skills',
    hash: HeaderSectionEnum.Skills
  },
  {
    name: 'Experiences',
    hash: HeaderSectionEnum.Experiences
  },
  {
    name: 'Projects',
    hash: HeaderSectionEnum.Projects
  },
  {
    name: 'Contact',
    hash: HeaderSectionEnum.Contact
  }
] as const;
