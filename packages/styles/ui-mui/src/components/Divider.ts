import { Components, Theme } from '@mui/material/styles';

export default function Divider(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiDivider: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
