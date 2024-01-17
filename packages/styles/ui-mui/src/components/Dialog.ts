import { Components, Theme } from '@mui/material/styles';

export default function Dialog(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiDialog: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
