import Navigation from '@components/organisms/navigation';

import { Grid } from '@mui/material';
import * as S from './styles';

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  return (
    <S.HeaderWrapper maxWidth='xl'>
      <Grid container>
        <Grid item xs={12}>
          <Navigation />
        </Grid>
      </Grid>
    </S.HeaderWrapper>
  );
};

export default Header;
