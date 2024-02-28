import { Components, Theme } from '@mui/material/styles';

export default function Input(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiInput: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
