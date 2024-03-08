import Navigation from '@components/organisms/navigation';
import { Grid } from '@mui/material';

import ContactHeaderBar from '@components/organisms/contact-header-bar';
import { useTranslations } from 'next-intl';
import * as S from './styles';

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  const t = useTranslations('mainLayout');
  return (
    <S.HeaderWrapper maxWidth='lg'>
      <Grid container>
        <Grid item xs={12}>
          <ContactHeaderBar i18n={{ contactBar: t.raw('header.contactBar') }} />
        </Grid>
        <Grid item xs={12}>
          <Navigation i18n={{ navigation: t.raw('header.navigation') }} />
        </Grid>
      </Grid>
    </S.HeaderWrapper>
  );
};

export default Header;
