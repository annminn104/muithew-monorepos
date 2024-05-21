import PixelBird from '@/components/molecules/PixelBird';
import PixelSphere from '@/components/molecules/PixelSphere';
import * as S from './styles';

type SectionContactProps = {};

const SectionContact: React.FC<SectionContactProps> = () => {
  return (
    <S.SecContactWrap>
      <S.SecContactThreeJS camera={{ fov: 50, position: [0, 0, 5] }} gl={{ antialias: false }}>
        <PixelSphere />
        <PixelBird />
        <S.SecContactOrbitControls enableZoom={false} />
      </S.SecContactThreeJS>
    </S.SecContactWrap>
  );
};

export default SectionContact;
