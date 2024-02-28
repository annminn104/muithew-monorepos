import { Components, Theme } from '@mui/material/styles';

export default function Radio(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiRadio: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
