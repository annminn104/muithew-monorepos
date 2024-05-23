import React from 'react';
import * as S from './styles';

type SectionSkillsProps = {
  techStacks: {
    title: string;
    keys: string[];
  }[];
};

const SectionSkills: React.FC<SectionSkillsProps> = ({ techStacks }) => {
  return (
    <S.SectionSkillsWrap>
      <S.SectionSkillsTitle variant='h3' color='primary'>
        My Tech Stacks
      </S.SectionSkillsTitle>
      <S.SectionSkillsTech>
        {techStacks.map((item, index) => (
          <div key={item.title + index}>
            <S.SectionSkillsSubtitle>{item.title}</S.SectionSkillsSubtitle>
            <S.SectionSkillsList>
              {item.keys.map((key) => (
                <S.SectionSkillsItem key={key} variant='outlined' size='small'>
                  {key}
                </S.SectionSkillsItem>
              ))}
            </S.SectionSkillsList>
          </div>
        ))}
      </S.SectionSkillsTech>
    </S.SectionSkillsWrap>
  );
};

export default SectionSkills;
