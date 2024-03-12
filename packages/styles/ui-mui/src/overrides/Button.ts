import { Components, Theme } from '@mui/material/styles';

export default function Button(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiButton: {
      defaultProps: {},
      styleOverrides: {},
      variants: [
        {
          props: { variant: 'maruhachi' },
          style: {
            backgroundColor: theme.palette.maruhachi['contrastText'],
            color: 'white',
            '&:hover': {
              backgroundColor: theme.palette.maruhachi['contrastText'],
              color: 'white',
              opacity: 0.6
            }
          }
        }
      ]
    }
  };
}
