import { Button } from '@mui/material';
import * as S from './styles';

type SectionSummaryProps = {
  content: string[];
};

const SectionSummary: React.FC<SectionSummaryProps> = ({ content }) => {
  return (
    <S.SummaryWrap>
      <S.SummaryTitle>Summary:</S.SummaryTitle>
      <S.SummaryContent>
        {content.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </S.SummaryContent>
      <Button variant='outlined'>Check My Résume</Button>
    </S.SummaryWrap>
  );
};

export default SectionSummary;
