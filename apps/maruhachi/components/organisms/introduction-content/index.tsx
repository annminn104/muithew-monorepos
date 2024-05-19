'use client';

import { pick } from 'lodash';
import { AnimateUtils, ScrollingUtils } from 'utils';

import { SectionIntroductionProps } from '@components/templates/section-introduction';
import { scrollingContactId } from '@mocks';

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
      <S.IntroContentTitle variant='h3' {...AnimateUtils.fadeDirection('right', 0.3, 100)}>
        {title}
      </S.IntroContentTitle>
      <S.IntroContentDescription {...AnimateUtils.fadeDirection('right', 0.4, 100)}>{description}</S.IntroContentDescription>
      <S.IntroContentImages {...AnimateUtils.fadeDirection('right', 0.5, 100)}>
        {images.map((img) => (
          <S.IntroContentItem key={img.key}>
            <S.IntroContentIcon {...pick(img, 'alt', 'width', 'height', 'src')} quality={100} />
            {img.text}
          </S.IntroContentItem>
        ))}
      </S.IntroContentImages>
      {/* <S.IntroContentNotice {...AnimateUtils.fadeDirection('right', 0.4, 100)}>{notice}</S.IntroContentNotice> */}
      <S.IntroContentButton
        variant='maruhachi'
        color='warning'
        size='large'
        onClick={() => ScrollingUtils.session(scrollingContactId)}
        {...AnimateUtils.fadeDirection('right', 0.6, 100)}
      >
        {button}
      </S.IntroContentButton>
    </S.IntroContentWrap>
  );
};

export default IntroductionContent;
