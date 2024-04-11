import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#ED722E',
      contrastText: '#ffffff',
      dark: '#ef8140',
    },
    secondary: {
      main: '#ff8015',
      contrastText: '#ffffff',
    },
  },
  typography: {
    button: {
      fontFamily: 'Roboto',
    },
    fontFamily: 'Montserrat',
  },
  spacing: (factor: number) => `${0.25 * factor}rem`, // Пример функции для spacing
  shape: {
    borderRadius: 10,
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        color: 'secondary',
      },
    },
  },
});
