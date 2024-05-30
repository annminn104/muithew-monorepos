type AuthLayoutProps = {
  children?: React.ReactNode;
};

function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div>
      AuthLayout
      {children}
    </div>
  );
}

export default AuthLayout;
