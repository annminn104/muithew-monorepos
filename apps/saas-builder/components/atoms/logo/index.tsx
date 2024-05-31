import * as S from './styles';

type LogoProps = {
  size?: number;
};

const Logo: React.FC<LogoProps> = ({ size = 32 }) => {
  return (
    <S.LogoWrap>
      <S.LogoMain variant='caption' color='primary' fontSize={size}>
        Muithew
      </S.LogoMain>
    </S.LogoWrap>
  );
};

export default Logo;
