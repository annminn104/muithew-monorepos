import IntroductionImage from '@components/organisms/introduction-image';
import { Grid } from '@mui/material';
import { IImageNext } from 'global';

type IntroductionProps = {
  images: {
    vertical: IImageNext;
    horizontal: IImageNext;
  };
};

const Introduction: React.FC<IntroductionProps> = ({ images }) => {
  return (
    <Grid container spacing={8}>
      <Grid item xs={6}>
        <IntroductionImage i18n={{ images }} />
      </Grid>
      <Grid item xs={6}>
        CONTENT
      </Grid>
    </Grid>
  );
};

export default Introduction;
