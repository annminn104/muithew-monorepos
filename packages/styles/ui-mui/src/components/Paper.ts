import { Components, Theme } from '@mui/material/styles';

export default function Paper(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiPaper: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
