import { Components, Theme } from '@mui/material/styles';

export default function ToggleButtonGroup(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiToggleButtonGroup: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
