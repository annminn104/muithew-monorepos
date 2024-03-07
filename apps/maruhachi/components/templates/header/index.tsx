import ContactHeaderBar from '@components/organisms/contact-header-bar';
import Navigation from '@components/organisms/navigation';
import { Grid } from '@mui/material';

import * as S from './styles';

type HeaderProps = {
  children?: React.ReactNode;
};

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <S.HeaderWrapper maxWidth='xl'>
      <Grid container>
        <Grid item>
          <ContactHeaderBar />
        </Grid>
        <Grid item>
          <Navigation />
        </Grid>
      </Grid>
    </S.HeaderWrapper>
  );
};

export default Header;
