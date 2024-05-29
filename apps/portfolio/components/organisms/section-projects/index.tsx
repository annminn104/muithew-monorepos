import MouseBlob from '@/components/atoms/mouse-blob';
import CardGithub from '@/components/molecules/card-github';
import { Grid } from '@mui/material';
import { MultipleForwardRightIcon } from '@styles/ui-mui/icons';
import * as S from './styles';

type SectionProjectsProps = {
  projects: { title: string; desc: string }[];
  moreLink: string;
};

const SectionProjects: React.FC<SectionProjectsProps> = ({ projects, moreLink }) => {
  return (
    <S.SecProWrap>
      <S.SecProTitle variant='h3' color='primary'>
        Projects
      </S.SecProTitle>
      <Grid container spacing={3}>
        {projects.map((pro) => (
          <Grid item xs={6} key={pro.title}>
            <MouseBlob borderWidth={4} radius={16}>
              <CardGithub {...pro} />
            </MouseBlob>
          </Grid>
        ))}
      </Grid>
      <S.SecProMore href={moreLink} target='_blank'>
        <span>More Project Here</span>
        <MultipleForwardRightIcon fontSize='large' />
      </S.SecProMore>
    </S.SecProWrap>
  );
};

export default SectionProjects;
