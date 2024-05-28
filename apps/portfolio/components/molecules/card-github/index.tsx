'use client';

import * as S from './styles';

type CardGithubProps = {
  title: string;
  desc: string;
};

const CardGithub: React.FC<CardGithubProps> = ({ title, desc }) => {
  return (
    <S.CardGithubWrap>
      <S.CardGithubTitle>{title}</S.CardGithubTitle>
      <S.CardGithubDesc>{desc}</S.CardGithubDesc>
      <S.CardGithubIcon />
    </S.CardGithubWrap>
  );
};

export default CardGithub;
