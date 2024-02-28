import { Components, Theme } from '@mui/material/styles';

export default function ImageListItem(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiImageListItem: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
