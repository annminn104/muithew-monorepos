import { HeaderNavMocks } from '@/common/mocks';
import BgStar from '@/components/molecules/bg-star';
import dynamic from 'next/dynamic';
import * as S from './styles';

const DynamicHeader = dynamic(() => import('@/components/templates/header'), {});

type WrapperProps = {
  children?: React.ReactNode;
};

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <S.WrapperWrap>
      <S.WrapperBg>
        <S.WrapperBgThreeJS camera={{ position: [0, 0, 1], fov: 70 }}>
          <BgStar />
          <S.WrapperBgOrbitControls enableZoom={false} />
        </S.WrapperBgThreeJS>
      </S.WrapperBg>
      <DynamicHeader nav={HeaderNavMocks} />
      <S.WrapperContent>{children}</S.WrapperContent>
    </S.WrapperWrap>
  );
};

export default Wrapper;
