'use client';

import React from 'react';
import { AnimateUtils, ScrollingUtils } from 'utils';

import { SectionAboutUsProps } from '@components/templates/section-about-us';
import { scrollingContactId } from '@mocks';
import { CheckReadIcon } from '@styles/ui-mui/icons';

import * as S from './styles';

type AboutUsContentProps = {
  i18n: Pick<SectionAboutUsProps, 'content'>;
};

const AboutUsContent: React.FC<AboutUsContentProps> = ({
  i18n: {
    content: { subtitle, title, tab, button }
  }
}) => {
  return (
    <S.AboutUsContentWrap>
      <S.AboutUsContentSubtitle text={subtitle} variant='h4' />
      <S.AboutUsContentTitle variant='body1' {...AnimateUtils.fadeDirection('left', 0.4, 200)}>
        {title}
      </S.AboutUsContentTitle>
      {tab.map((item, index) => (
        <React.Fragment key={'about-us-content-tab' + index.toString()}>
          <S.AboutUsContentDesc variant='body1' {...AnimateUtils.fadeDirection('left', 0.5, 200)}>
            {item.description}
          </S.AboutUsContentDesc>
          {item.content.map((itm, index) => (
            <S.AboutUsContentItem key={index} {...AnimateUtils.fadeDirection('left', 0.6, 200, 0.3 * index)}>
              <CheckReadIcon />
              <S.AboutUsContentItemText>{itm}</S.AboutUsContentItemText>
            </S.AboutUsContentItem>
          ))}
        </React.Fragment>
      ))}
      <S.AboutUsContentBtn variant='maruhachi' onClick={() => ScrollingUtils.session(scrollingContactId)} {...AnimateUtils.fadeIn(0.7)}>
        {button}
      </S.AboutUsContentBtn>
    </S.AboutUsContentWrap>
  );
};

export default AboutUsContent;
