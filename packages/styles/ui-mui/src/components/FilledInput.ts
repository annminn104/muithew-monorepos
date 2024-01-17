import { Components, Theme } from '@mui/material/styles';

export default function FilledInput(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiFilledInput: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
