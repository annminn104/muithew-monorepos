import { Components, Theme } from '@mui/material/styles';

export default function LinearProgress(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiLinearProgress: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
