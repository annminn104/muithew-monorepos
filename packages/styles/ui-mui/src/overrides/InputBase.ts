import { Components, Theme } from '@mui/material/styles';

export default function InputBase(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiInputBase: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
