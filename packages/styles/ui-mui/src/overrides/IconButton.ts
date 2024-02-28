import { Components, Theme } from '@mui/material/styles';

export default function IconButton(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiIconButton: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
