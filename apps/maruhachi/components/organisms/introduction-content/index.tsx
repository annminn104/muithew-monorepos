'use client';

import { pick } from 'lodash';
import { AnimateUtils, ScrollingUtils } from 'utils';

import { SectionIntroductionProps } from '@components/templates/section-introduction';
import { scrollingContactId } from '@mocks';

import React from 'react';
import * as S from './styles';

type IntroductionContentProps = {
  i18n: Pick<SectionIntroductionProps, 'content'>;
};

const IntroductionContent: React.FC<IntroductionContentProps> = ({
  i18n: {
    content: { section, button }
  }
}) => {
  return (
    <S.IntroContentWrap>
      {section.map((item, index) => (
        <React.Fragment key={'introduction-section' + index.toString()}>
          <S.IntroContentTabTitle variant='h3' {...AnimateUtils.fadeDirection('right', 0.3, 100)}>
            {item.tab}
          </S.IntroContentTabTitle>
          <S.IntroContentTabWrap>
            {item.tabContent.map((content, index) => (
              <React.Fragment key={'introduction-content' + index.toString()}>
                <S.IntroContentTabSubtitle variant='h5' {...AnimateUtils.fadeDirection('right', 0.3, 100)}>
                  {content.title}
                </S.IntroContentTabSubtitle>
                <S.IntroContentTabContentWrap>
                  <S.IntroContentTabDescription>
                    {content.description.map((desc, index) => (
                      <React.Fragment key={'introduction-content-description' + index.toString()}>
                        <div>
                          {desc.text.map((desc, index) => (
                            <S.IntroContentTabDescriptionItem
                              variant='body2'
                              key={'introduction-content-description-item' + index.toString()}
                              {...AnimateUtils.fadeDirection('right', 0.4, 100)}
                              dangerouslySetInnerHTML={{ __html: desc }}
                            />
                          ))}
                        </div>
                        <S.IntroContentTabContentImages {...AnimateUtils.fadeDirection('right', 0.5, 100)}>
                          {desc.images.map((img) => (
                            <S.IntroContentTabContentItem key={img.key}>
                              <S.IntroContentTabContentIcon {...pick(img, 'alt', 'width', 'height', 'src')} quality={100} />
                              {img.text}
                            </S.IntroContentTabContentItem>
                          ))}
                        </S.IntroContentTabContentImages>
                      </React.Fragment>
                    ))}
                  </S.IntroContentTabDescription>
                </S.IntroContentTabContentWrap>
                <S.IntroContentButton
                  variant='maruhachi'
                  color='warning'
                  size='large'
                  onClick={() => ScrollingUtils.session(scrollingContactId)}
                  {...AnimateUtils.fadeDirection('right', 0.6, 100)}
                >
                  {button}
                </S.IntroContentButton>
              </React.Fragment>
            ))}
          </S.IntroContentTabWrap>
        </React.Fragment>
      ))}
    </S.IntroContentWrap>
  );
};

export default IntroductionContent;
