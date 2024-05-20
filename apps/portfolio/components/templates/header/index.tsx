import { IHeaderNav } from '@/common/@types';
import Link from 'next/link';
import * as S from './styles';

type HeaderProps = {
  nav: IHeaderNav;
};

const Header: React.FC<HeaderProps> = ({ nav }) => {
  return (
    <S.HeaderWrap>
      <S.HeaderNav>
        <S.HeaderNavList>
          {nav.map((item) => (
            <S.HeaderNavItem key={item.hash}>
              <Link href={item.hash}>{item.name}</Link>
            </S.HeaderNavItem>
          ))}
        </S.HeaderNavList>
      </S.HeaderNav>
    </S.HeaderWrap>
  );
};

export default Header;
