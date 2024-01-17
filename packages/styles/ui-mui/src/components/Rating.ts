import { Components, Theme } from '@mui/material/styles';

export default function Rating(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiRating: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
