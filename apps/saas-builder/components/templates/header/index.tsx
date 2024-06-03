import { layoutMocks } from '@/common/mocks/layout';
import Logo from '@/components/atoms/logo';
import Navigation from '@/components/molecules/navigation';
import { Button } from '@mui/material';

import * as S from './styles';

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  return (
    <S.HeaderWrap>
      <Logo />
      <Navigation list={layoutMocks.navigation} />
      <Button variant='contained'>Login</Button>
    </S.HeaderWrap>
  );
};

export default Header;
