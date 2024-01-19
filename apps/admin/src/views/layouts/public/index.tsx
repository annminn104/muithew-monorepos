import { Outlet } from 'react-router-dom';

type PublicLayoutProps = {
  children?: React.ReactNode;
};

const PublicLayout: React.FC<PublicLayoutProps> = ({ children }) => {
  return (
    <div>
      PublicLayout
      {children}
      <Outlet />
    </div>
  );
};

export default PublicLayout;
