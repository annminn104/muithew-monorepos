import { Components, Theme } from '@mui/material/styles';

export default function Modal(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiModal: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
