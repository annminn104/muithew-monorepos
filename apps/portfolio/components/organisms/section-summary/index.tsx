import { Button } from '@mui/material';
import { FileDownloadIcon } from '@styles/ui-mui/icons';
import Link from 'next/link';
import * as S from './styles';

type SectionSummaryProps = {
  summary: string[];
  resume: string;
  socials: { name: string; link: string; icon: React.ReactNode }[];
};

const SectionSummary: React.FC<SectionSummaryProps> = ({ summary, resume, socials }) => {
  return (
    <S.SummaryWrap>
      <S.SummaryTitle>Summary:</S.SummaryTitle>
      <S.SummaryContent>
        {summary.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </S.SummaryContent>
      <S.SummaryResume>
        <Link href={resume} target='_blank'>
          <S.SummaryResumeBtn variant='outlined'>
            <span>Check My Resume</span> <FileDownloadIcon fontSize='large' />
          </S.SummaryResumeBtn>
        </Link>
      </S.SummaryResume>
      <S.SummarySocials>
        {socials.map((item, index) => (
          <Link href={item.link} key={index} target='_blank'>
            <Button variant='outlined'>{item.icon}</Button>
          </Link>
        ))}
      </S.SummarySocials>
    </S.SummaryWrap>
  );
};

export default SectionSummary;
