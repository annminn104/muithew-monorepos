import { Components, Theme } from '@mui/material/styles';

export default function Collapse(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiCollapse: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
