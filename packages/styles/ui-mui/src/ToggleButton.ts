import { Components, Theme } from '@mui/material/styles';

export default function ToggleButton(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiToggleButton: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
