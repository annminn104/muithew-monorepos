import MouseBlob from '@/components/atoms/mouse-blob';
import PixelBird from '@/components/molecules/pixel-bird';
import PixelSphere from '@/components/molecules/pixel-sphere';
import * as S from './styles';

type SectionContactProps = {
  contact: { icon: React.ReactNode; link: string; key: string }[];
};

const SectionContact: React.FC<SectionContactProps> = ({ contact }) => {
  return (
    <S.SecContactWrap>
      <S.SecContactTitle variant='h3' color='primary'>
        Contact
      </S.SecContactTitle>
      <S.SecContactList>
        {contact.map((item, index) => (
          <MouseBlob borderWidth={4} radius={8} key={item.link + index}>
            <S.SecContactLink href={item.key + item.link}>
              {item.icon}
              {item.link}
            </S.SecContactLink>
          </MouseBlob>
        ))}
      </S.SecContactList>
      <S.SecContactThreeJS camera={{ fov: 50, position: [0, 0, 5] }} gl={{ antialias: false }}>
        <PixelSphere />
        <PixelBird />
        <S.SecContactOrbitControls enableZoom={false} />
      </S.SecContactThreeJS>
    </S.SecContactWrap>
  );
};

export default SectionContact;