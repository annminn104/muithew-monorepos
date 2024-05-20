import { HeaderNavMocks } from '@/common/mocks';
import Header from '@/components/templates/header';

import * as S from './styles';

type WrapperProps = {
  children?: React.ReactNode;
};

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <S.WrapperWrap>
      <Header nav={HeaderNavMocks} />
      <S.WrapperContent>{children}</S.WrapperContent>
    </S.WrapperWrap>
  );
};

export default Wrapper;
