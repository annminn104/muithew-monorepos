type MainLayoutProps = {
  children?: React.ReactNode;
};

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div>
      MainLayout
      {children}
    </div>
  );
}

export default MainLayout;
