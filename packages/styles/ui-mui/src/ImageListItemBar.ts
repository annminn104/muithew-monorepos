import { Components, Theme } from '@mui/material/styles';

export default function ImageListItemBar(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiImageListItemBar: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
