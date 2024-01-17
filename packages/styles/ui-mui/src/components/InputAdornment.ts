import { Components, Theme } from '@mui/material/styles';

export default function InputAdornment(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiInputAdornment: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
