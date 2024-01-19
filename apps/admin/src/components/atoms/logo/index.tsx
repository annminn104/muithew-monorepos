import * as S from './styled';

type LogoProps = {
  imgSize?: [number, number];
};

export const Logo: React.FC<LogoProps> = ({ imgSize = [40, 40] }) => {
  return (
    <S.Logo>
      <S.LogoImg src='/vite.svg' width={imgSize[0]} height={imgSize[1]} />
      <S.LogoText variant='h4' color='cadetblue'>
        Muithew
      </S.LogoText>
    </S.Logo>
  );
};
