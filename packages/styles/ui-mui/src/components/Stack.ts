import { Components, Theme } from '@mui/material/styles';

export default function Stack(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiStack: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
