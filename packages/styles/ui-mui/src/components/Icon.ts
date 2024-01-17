import { Components, Theme } from '@mui/material/styles';

export default function Icon(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiIcon: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
