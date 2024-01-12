import { Components, Theme } from '@mui/material/styles';

export default function Tooltip(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiTooltip: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
