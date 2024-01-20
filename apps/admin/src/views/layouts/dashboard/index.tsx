import { Outlet } from 'react-router-dom';

import { Footer, Header, Sidebar } from '@/components/organisms';

import * as S from './styled';
import { Breadcrumb } from '@/components/molecules/breadcrumb';

type DashboardLayoutProps = {
  children?: React.ReactNode;
};

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const handleExtendSidebar = () => {};

  return (
    <S.DashBoard>
      <S.DashBoardSidebar>
        <Sidebar />
      </S.DashBoardSidebar>
      <S.DashBoardMain>
        <S.DashBoardHeader>
          <Header onExtendSidebar={handleExtendSidebar} />
        </S.DashBoardHeader>
        <S.DashBoardBreadcrumb>
          <Breadcrumb />
        </S.DashBoardBreadcrumb>
        <S.DashBoardContent>
          {children}
          <Outlet />
        </S.DashBoardContent>
        <S.DashBoardFooter>
          <Footer />
        </S.DashBoardFooter>
      </S.DashBoardMain>
    </S.DashBoard>
  );
};

export default DashboardLayout;
