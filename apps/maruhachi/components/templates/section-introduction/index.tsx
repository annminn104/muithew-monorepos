import IntroductionContent from '@components/organisms/introduction-content';
import IntroductionImage from '@components/organisms/introduction-image';
import { Grid } from '@mui/material';
import { IImageNext } from 'global';

export type SectionIntroductionProps = {
  images: {
    vertical: IImageNext;
    logo: IImageNext;
    horizontal: IImageNext;
  };
  content: {
    button: string;
    section: {
      tab: string;
      tabContent: {
        title: string;
        description: {
          text: string[];
          images: Array<IImageNext & { key: string; text: string }>;
        }[];
      }[];
    }[];
  };
};

const SectionIntroduction: React.FC<SectionIntroductionProps> = ({ images, content }) => {
  return (
    <Grid container spacing={8} alignItems='center' justifyContent='center'>
      <Grid item xs={12} md={8} xl={6}>
        <IntroductionImage i18n={{ images }} />
      </Grid>
      <Grid item xs={12} md={8} xl={6}>
        <IntroductionContent i18n={{ content }} />
      </Grid>
    </Grid>
  );
};

export default SectionIntroduction;
