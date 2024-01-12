import { Components, Theme } from '@mui/material/styles';

export default function Breadcrumbs(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiBreadcrumbs: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
