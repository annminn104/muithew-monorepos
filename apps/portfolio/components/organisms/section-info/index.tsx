'use client';

import BuddleText from '@/components/atoms/buddle-text';
import React from 'react';
import * as S from './styles';

type SectionInfoProps = {
  name: string;
  role: string;
};

const SectionInfo: React.FC<SectionInfoProps> = ({ name, role }) => {
  return (
    <S.SectionInfoWrap>
      <S.SectionInfoName>
        <span>Hello, Myself</span> <S.InfoName>{name}</S.InfoName>
      </S.SectionInfoName>
      <S.InfoWelcome>Welcome Here, I am a</S.InfoWelcome>
      <S.InfoRole>
        <BuddleText content={role} />
      </S.InfoRole>
    </S.SectionInfoWrap>
  );
};

export default SectionInfo;
