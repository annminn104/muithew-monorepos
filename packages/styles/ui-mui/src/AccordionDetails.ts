import { Components, Theme } from '@mui/material/styles';

export default function AccordionDetails(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiAccordionDetails: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
