import { Logo } from '@/components/atoms';
import { Navigation } from '@/components/molecules';

import * as S from './styled';

export const Sidebar = () => {
  return (
    <S.Sidebar>
      <S.SidebarLogo>
        <Logo />
      </S.SidebarLogo>
      <S.SidebarNavigation>
        <Navigation />
      </S.SidebarNavigation>
    </S.Sidebar>
  );
};
