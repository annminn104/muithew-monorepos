import { Components, Theme } from '@mui/material/styles';

export default function Container(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiContainer: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
