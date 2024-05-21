import { InfoMocks } from '@/common/mocks';
import SectionContact from '@/components/organisms/section-contact';
import SectionExperience from '@/components/organisms/section-experience';
import SectionInfo from '@/components/organisms/section-info';
import SectionProjects from '@/components/organisms/section-projects';
import SectionSkills from '@/components/organisms/section-skills';
import SectionSummary from '@/components/organisms/section-summary';
import { Container } from '@mui/material';
import { pick } from 'lodash';

export default function Page(): JSX.Element {
  return (
    <Container maxWidth='lg'>
      <SectionInfo {...pick(InfoMocks, 'name', 'role')} />
      <SectionSummary {...pick(InfoMocks, 'summary', 'resume', 'socials')} />
      <SectionSkills {...pick(InfoMocks, 'techStacks')} />
      <SectionExperience {...pick(InfoMocks, 'experiences')} />
      <SectionProjects {...pick(InfoMocks, 'projects', 'moreLink')} />
      <SectionContact />
    </Container>
  );
}
