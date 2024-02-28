import { Components, Theme } from '@mui/material/styles';

export default function Checkbox(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiCheckbox: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
