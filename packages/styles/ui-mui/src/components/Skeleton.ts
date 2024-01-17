import { Components, Theme } from '@mui/material/styles';

export default function Skeleton(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiSkeleton: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
