import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green,
    error: green,
  },
  overrides: {
    MuiFormControl: {
      root: {
        margin: 10,
      },
    },
    MuiPaper: {
      root: {
        padding: '0.125rem 1rem',
      },
    },
    //   MuiButton: {
    //     root: {
    //       background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    //       borderRadius: 3,
    //       border: 0,
    //       color: red,
    //       height: 48,
    //       padding: '0 30px',
    //       boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .30)',
    //     },
    //   },
  },
});

export default theme;