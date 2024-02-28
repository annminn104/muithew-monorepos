import { Components, Theme } from '@mui/material/styles';

export default function Typography(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiTypography: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
