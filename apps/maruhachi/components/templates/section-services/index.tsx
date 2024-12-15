import ServicesProducts from '@components/organisms/services-products';
import ServicesVideo from '@components/organisms/services-video';
import { Grid } from '@mui/material';
import { IImageNext } from 'global';

export type SectionServicesProps = {
  video: {
    title: string;
    button: string;
    videoSrc: string;
  };
  products: {
    icon: IImageNext;
    subtitle: string;
    title: string;
    buy: string;
    content: Array<{
      key: string;
      img: IImageNext;
      icon: IImageNext;
      title: string;
      content: string;
      imgProduct: IImageNext;
      price: string;
      eggName: string;
    }>;
  };
};

const SectionServices: React.FC<SectionServicesProps> = ({ video, products }) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <ServicesVideo i18n={{ video }} />
      </Grid>
      <Grid item xs={12}>
        <ServicesProducts i18n={{ products }} />
      </Grid>
    </Grid>
  );
};

export default SectionServices;
