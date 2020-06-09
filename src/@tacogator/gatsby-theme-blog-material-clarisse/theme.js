import { createMuiTheme, withStyles } from "@material-ui/core";
require("typeface-cooper-hewitt");
require("typeface-aleo");
require("typeface-vt323");

const breakpointValues = {
  xs: 0,
  sm: 600,
  md: 810,
  lg: 1280,
  xl: 1920,
};

// A custom theme for this app
const theme = createMuiTheme({
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
    MuiButton: {
      disableElevation: true,
    },
  },
  shape: {
    borderRadius: 1,
  },
  typography: {
    fontFamily: [
      "Cooper Hewitt",
      "Helvetica Neue",
      "Helvetica",
      "-apple-system",
      "san-serif",
    ],
    button: {
      textTransform: "none",
      fontSize: "1.25rem",
      boxShadow: "none",
      fontFamily: "VT323"
    },
    h1: {
      fontSize: "3.15rem",
      fontWeight: "400",
      fontFamily: "Cooper Hewitt,Helvetica neue,helvetica,sans-serif",
      lineHeight: "1.5",
    },
    h2: {
      fontSize: "1.65rem",
      fontWeight: "600",
      fontFamily: "Cooper Hewitt,Helvetica neue,helvetica,sans-serif",
      lineHeight: "1.5",
      //letterSpacing: "-0.05rem",
      marginBlockStart: "2.5rem",
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: "500",
      fontFamily: "Aleo, Serif",
      letterSpacing: "-0.05rem",
    },
    h6: {
      fontSize: "1.65rem",
      fontWeight: "500",
      fontFamily: "Aleo, Serif",
      lineHeight: "1.5",
      letterSpacing: "-0.05rem",
      "& a": {
        color: "inherit",
        textDecoration: "none",
      },
    },
    body1: {
      fontSize: "1.25rem",
      fontWeight: "400",
      //fontFamily: "Aleo, Serif",
      fontFamily: "Cooper Hewitt,Helvetica neue,helvetica,sans-serif",
      lineHeight: "1.72",
      marginBlockStart: "1rem",
      marginBlockEnd: "1rem",
    },
    body2: {
      fontSize: "1rem",
      fontWeight: "400",
    },
  },
  palette: {
    primary: {
      main: `#FFEA00`,
      light: `#fbe9e7`,
    },
    secondary: {
      main: `#FFEA00`,
      light: `#efebe9`,
    },
    text: {
      primary: "#263238",
      secondary: "#616161",
    },
    error: {
      main: "#00897b",
    },
    background: {
      default: `rgba(253, 254, 254)`,
    },
  },
  breakpoints: { values: breakpointValues },
  overrides: {
    MuiButton: {
      // root: {
      //   borderWidth: "2px"
      // },
      textSizeSmall: {
        fontSize: "1.25rem"
      },
      contained: {
        boxShadow: "none",
      },
      outlined: {
        borderWidth: "2px",
      },
      outlinedPrimary: {
        borderWidth: "2px",
      },
      outlinedSecondary: {
        borderWidth: "2px",
      },
    },
  },
});

export const GlobalCss = withStyles({
  // @global is handled by jss-plugin-global.
  "@global": {
    article: {
      counterReset: "section",
    },
    "article p>a": {
      // use 'article' to restrict styles to post
      "&:visited": {
        color: theme.palette.grey[600],
      },
      "&:hover": {
        background: "#b2ebf2",
      },
    },
    p: {
      ...theme.typography.body1,
      fontSize: "1.35rem",
    },
    "p + p": {
      paddingTop: "1.25rem",
    },
    blockquote: {
      padding: "1.5rem 1.5rem",
    },
    "blockquote p": {
      ...theme.typography.body1,
      textShadow: "0 1px white",
      fontSize: "1.55rem",
    },
    ol: {
      padding: "0.25rem 2rem",
    },
    ul: {
      padding: "0.75rem 2rem",
    },
    "ol li": {
      ...theme.typography.body1,
      lineHeight: "1.25",
    },
    "ul li": {
      ...theme.typography.body1,
      lineHeight: "1.25",
    },
    ".code-block + p": {
      paddingTop: "0.85rem",
    },
    code: {
      fontFamily: "monospace",
      background: "#CFD8DC",
      padding: "4px",
      borderRadius: "4px",
      fontSize: "1.15rem",
      marginBottom: "1.5rem",
    },
    "pre code": {
      background: "inherit",
    },
    ".circle": {
      fontSize: "1.5rem",
      display: "block",
      width: "26px",
      height: "26px",
      background: "#e1f5fe",
      marginBottom: "20px",
      paddingTop: "5px",
      paddingLeft: "10px",
      borderRadius: "5px",
      color: theme.palette.text.secondary,
    },
    ".circle::before": {
      counterIncrement:
        "section" /* Increment the value of section counter by 1 */,
      content: "counter(section)",
    },
  },
})(() => null);

export default theme;
