import { Components, Theme } from '@mui/material/styles';

export default function ListSubheader(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiListSubheader: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
