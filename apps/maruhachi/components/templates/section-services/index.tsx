import ServicesProducts from '@components/organisms/services-products';
import ServicesVideo from '@components/organisms/services-video';
import { Grid } from '@mui/material';
import { IImageNext } from 'global';

export type SectionServicesProps = {
  products: {
    icon: IImageNext;
    subtitle: string;
    title: string;
    content: Array<{ key: string; img: IImageNext; icon: IImageNext; title: string; content: string }>;
  };
};

const SectionServices: React.FC<SectionServicesProps> = ({ products }) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <ServicesVideo />
      </Grid>
      <Grid item xs={12}>
        <ServicesProducts i18n={{ products }} />
      </Grid>
    </Grid>
  );
};

export default SectionServices;
