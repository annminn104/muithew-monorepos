import { Components, Theme } from '@mui/material/styles';

export default function AccordionSummary(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiAccordionSummary: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
