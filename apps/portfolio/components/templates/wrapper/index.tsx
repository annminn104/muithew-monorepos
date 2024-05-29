import { HeaderNavMocks } from '@/common/mocks';
import dynamic from 'next/dynamic';
import * as S from './styles';

const BgStar = dynamic(() => import('@/components/molecules/bg-star'), { ssr: false });
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
