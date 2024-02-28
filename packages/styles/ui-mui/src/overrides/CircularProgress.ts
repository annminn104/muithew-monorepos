import { Components, Theme } from '@mui/material/styles';

export default function CircularProgress(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiCircularProgress: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
