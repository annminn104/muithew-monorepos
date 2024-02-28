import { Components, Theme } from '@mui/material/styles';

export default function UseMediaQuery(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiUseMediaQuery: {
      defaultProps: {}
    }
  };
}
