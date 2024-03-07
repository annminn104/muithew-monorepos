import { IImageNext } from 'global';
import * as S from './styles';

type IntroductionImageProps = {
  i18n: {
    images: {
      vertical: IImageNext;
      horizontal: IImageNext;
    };
  };
};

const IntroductionImage: React.FC<IntroductionImageProps> = ({ i18n }) => {
  return (
    <S.IntroWrap>
      <S.IntroVertical>
        <S.IntroVerticalImg {...i18n.images.vertical} quality={100} />
      </S.IntroVertical>
      <S.IntroHorizontal>
        <S.IntroHorizontalImg {...i18n.images.horizontal} quality={100} />
      </S.IntroHorizontal>
    </S.IntroWrap>
  );
};

export default IntroductionImage;
