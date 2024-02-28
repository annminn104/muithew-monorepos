import { Components, Theme } from '@mui/material/styles';

export default function Switch(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiSwitch: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
