import { Components, Theme } from '@mui/material/styles';

export default function Card(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiCard: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
