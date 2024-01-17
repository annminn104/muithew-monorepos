import { Components, Theme } from '@mui/material/styles';

export default function TextField(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiTextField: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
