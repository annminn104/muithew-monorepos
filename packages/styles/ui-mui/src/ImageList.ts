import { Components, Theme } from '@mui/material/styles';

export default function ImageList(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiImageList: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
