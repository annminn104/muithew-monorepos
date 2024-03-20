'use client';

import { SectionIntroductionProps } from '@components/templates/section-introduction';

import { scrollingContactId } from '@mocks';
import { pick } from 'lodash';
import { ScrollingUtils } from 'utils';
import * as S from './styles';

type IntroductionContentProps = {
  i18n: Pick<SectionIntroductionProps, 'content'>;
};

const IntroductionContent: React.FC<IntroductionContentProps> = ({
  i18n: {
    content: { subtitle, title, description, images, notice, button }
  }
}) => {
  return (
    <S.IntroContentWrap>
      <S.IntroContentSubtitle text={subtitle} />
      <S.IntroContentTitle variant='h3'>{title}</S.IntroContentTitle>
      <S.IntroContentDescription>{description}</S.IntroContentDescription>
      <S.IntroContentImages>
        {images.map((img) => (
          <S.IntroContentItem key={img.key}>
            <S.IntroContentIcon {...pick(img, 'alt', 'width', 'height', 'src')} quality={100} />
            {img.text}
          </S.IntroContentItem>
        ))}
      </S.IntroContentImages>
      <S.IntroContentNotice>{notice}</S.IntroContentNotice>
      <S.IntroContentButton variant='maruhachi' color='warning' size='large' onClick={() => ScrollingUtils.session(scrollingContactId)}>
        {button}
      </S.IntroContentButton>
    </S.IntroContentWrap>
  );
};

export default IntroductionContent;
