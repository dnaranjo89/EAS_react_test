import { createMuiTheme } from '@material-ui/core/styles';
import white from '@material-ui/core/colors/red';

// Example of theme creation
// https://github.com/mui-org/material-ui/issues/1915#issuecomment-310849153

let theme = createMuiTheme({
  typography: {
    fontFamily:
      '"Montserrat", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica", "Arial", sans-serif',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    color: '#8bc34a',
    body1: {
      lineHeight: `1.5rem`,
    },
    display1: {
      // fontSize: 60,
    },
  },
  palette: {
    type: 'light',
    primary: {
      main: '#4caf50',
    },
    secondary: {
      main: '#f44336',
    },
  },
  overrides: {
    // MuiFormControl: {
    //   root: {
    //     margin: 10,
    //   },
    // },
    // MuiPaper: {
    //   root: {
    //     padding: '0.125rem 1rem',
    //   },
    // },
    MuiButton: {
      root: {
        'text-transform': 'inherit',
      },
    },
  },
});

const fontFamilySecondary =
  '"Fredoka One", -apple-system, BlinkMacSystemFont, "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica", "Arial", sans-serif';
const fontHeader = {
  color: theme.palette.primary.main,
  fontFamily: fontFamilySecondary,
};

theme = {
  ...theme,
  typography: {
    ...theme.typography,
    fontFamilySecondary,
    display4: {
      ...theme.typography.display4,
      ...fontHeader,
      color: white,
      lineHeight: 1,
      fontSize: 20,
    },
    display3: {
      ...theme.typography.display3,
      ...fontHeader,
      fontSize: 48,
    },
    display2: {
      ...theme.typography.display2,
      ...fontHeader,
      fontSize: 42,
    },
    display1: {
      ...theme.typography.display1,
      ...fontHeader,
      // fontSize: 36,
    },
    headline: {
      ...theme.typography.headline,
      fontSize: 20,
      fontWeight: theme.typography.fontWeightLight,
    },
    title: {
      ...theme.typography.title,
      ...fontHeader,
      fontSize: 18,
    },
    subheading: {
      ...theme.typography.subheading,
      fontSize: 18,
    },
    body2: {
      ...theme.typography.body2,
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: 16,
    },
    body1: {
      ...theme.typography.body1,
      fontSize: 14,
    },
  },
};

export default theme;
