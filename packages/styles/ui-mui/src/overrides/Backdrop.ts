import { Components, Theme } from '@mui/material/styles';

export default function Backdrop(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiBackdrop: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
