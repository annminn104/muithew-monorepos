import { InfoMocks } from '@/common/mocks';
import SectionInfo from '@/components/organisms/section-info';
import SectionSummary from '@/components/organisms/section-summary';
import { Container } from '@mui/material';
import { pick } from 'lodash';

export default function Page(): JSX.Element {
  return (
    <Container maxWidth='lg'>
      <SectionInfo {...pick(InfoMocks, 'name', 'role')} />
      <SectionSummary content={InfoMocks.summary} />
    </Container>
  );
}
