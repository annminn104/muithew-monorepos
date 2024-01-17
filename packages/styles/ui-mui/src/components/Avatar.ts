import { Components, Theme } from '@mui/material/styles';

export default function Avatar(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiAvatar: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
