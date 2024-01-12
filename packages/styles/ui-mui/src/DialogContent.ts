import { Components, Theme } from '@mui/material/styles';

export default function DialogContent(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiDialogContent: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
