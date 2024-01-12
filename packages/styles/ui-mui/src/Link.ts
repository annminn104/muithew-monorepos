import { Components, Theme } from '@mui/material/styles';

export default function Link(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiLink: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
