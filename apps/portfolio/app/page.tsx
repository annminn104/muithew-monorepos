import { HeaderSectionEnum } from '@/common/enums';
import { InfoMocks } from '@/common/mocks';
import SectionContact from '@/components/organisms/section-contact';
import SectionExperience from '@/components/organisms/section-experience';
import SectionInfo from '@/components/organisms/section-info';
import SectionProjects from '@/components/organisms/section-projects';
import SectionSkills from '@/components/organisms/section-skills';
import SectionSummary from '@/components/organisms/section-summary';
import SectionUI from '@/components/templates/section';
import { Container } from '@mui/material';
import { pick } from 'lodash';

export default function Page(): JSX.Element {
  const sections = [
    {
      key: 'info',
      id: HeaderSectionEnum.Home,
      component: (
        <>
          <SectionInfo {...pick(InfoMocks, 'name', 'role')} />
          <SectionSummary {...pick(InfoMocks, 'summary', 'resume', 'socials')} />
        </>
      )
    },
    { key: 'skills', id: HeaderSectionEnum.Skills, component: <SectionSkills {...pick(InfoMocks, 'techStacks')} /> },
    { key: 'experiences', id: HeaderSectionEnum.Experiences, component: <SectionExperience {...pick(InfoMocks, 'experiences')} /> },
    { key: 'projects', id: HeaderSectionEnum.Projects, component: <SectionProjects {...pick(InfoMocks, 'projects', 'moreLink')} /> },
    { key: 'contact', id: HeaderSectionEnum.Contact, component: <SectionContact {...pick(InfoMocks, 'contact')} /> }
  ];
  return (
    <Container maxWidth='lg'>
      {sections.map((section) => (
        <SectionUI id={section.id} key={section.key} component={section.component} />
      ))}
    </Container>
  );
}
