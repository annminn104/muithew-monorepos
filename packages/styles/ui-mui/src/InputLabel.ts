import { Components, Theme } from '@mui/material/styles';

export default function InputLabel(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiInputLabel: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
