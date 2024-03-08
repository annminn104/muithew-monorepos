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
    subtitle: string;
    title: string;
    description: string;
    images: Array<IImageNext & { key: string; text: string }>;
    notice: string;
    button: string;
  };
};

const SectionIntroduction: React.FC<SectionIntroductionProps> = ({ images, content }) => {
  return (
    <Grid container spacing={8} alignItems='center'>
      <Grid item xs={6}>
        <IntroductionImage i18n={{ images }} />
      </Grid>
      <Grid item xs={6}>
        <IntroductionContent i18n={{ content }} />
      </Grid>
    </Grid>
  );
};

export default SectionIntroduction;
