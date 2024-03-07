import { useTranslations } from 'next-intl';
import React from 'react';

import Banner from '@components/templates/banner';

type HomeLayoutProps = {
  params: { locale: string };
  children: React.ReactNode;
};

const HomeLayout: React.FC<HomeLayoutProps> = ({ children, params: { locale } }) => {
  const t = useTranslations('homePage');

  return (
    <React.Fragment>
      <Banner i18n={{ slides: t.raw('banner.slides') }} />
      {children}
    </React.Fragment>
  );
};

export default HomeLayout;
