import { Components, Theme } from '@mui/material/styles';
//

export default function Select(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiSelect: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
