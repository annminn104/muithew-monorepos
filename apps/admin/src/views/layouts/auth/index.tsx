import { Outlet } from 'react-router-dom';

type AuthLayoutProps = {
  children?: React.ReactNode;
};

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div>
      AuthLayout
      {children}
      <Outlet />
    </div>
  );
};

export default AuthLayout;
