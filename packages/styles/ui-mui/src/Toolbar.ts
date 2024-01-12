import { Components, Theme } from '@mui/material/styles';

export default function Toolbar(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiToolbar: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
