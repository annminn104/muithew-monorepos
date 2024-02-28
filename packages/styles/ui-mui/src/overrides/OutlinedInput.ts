import { Components, Theme } from '@mui/material/styles';

export default function OutlinedInput(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiOutlinedInput: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
