/*

This file is planned to contains all custom style to be applied on Material UI Theme;

*/
import { grey, red, blue } from "@material-ui/core/colors";

const myStyles = {
  root: {
    display: "flex",
    backgroundColor: "#c3c3c3"
  },
  grid: {
    width: 1000
  },
  palette: {
    primary: {
      main: blue[500]
    },
    secondary: {
      main: red[500]
    }
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: ['"Lato"', "sans-serif"].join(",")
  },
  overrides: {
    MuiButton: {
      root: {
        border: 0,
        borderRadius: 3,
        position: "fixed",
        color: "white",
        height: 48,
        boxShadow: "0 3px 5px 2px rgba(105, 137, 255, 0.3)",
        padding: "0 24px",
        fontSize: "1rem"
      }
    },
    MuiCssBaseline: {
      "@global": {
        "@font-face": "Raleway"
      }
    }
  }
};

export default myStyles;
