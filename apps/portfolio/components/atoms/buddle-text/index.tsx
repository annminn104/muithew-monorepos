import React from 'react';
import * as S from './styles';

type BuddleTextProps = {
  content: string;
};

const BuddleText: React.FC<BuddleTextProps> = ({ content }) => {
  return (
    <React.Fragment>
      {content.split('').map((item, index) => (
        <S.BubbleTextItem key={index}>{item}</S.BubbleTextItem>
      ))}
    </React.Fragment>
  );
};

export default BuddleText;
