import {createMuiTheme} from "@material-ui/core";
import {colors, fontSize} from "./Variables";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
  },
  typography: {
    fontFamily: "Open Sans",
    body1: {
      fontSize: fontSize.regular,
    },
  },
  overrides: {
    MuiFormControlLabel: {
      root: {
        color: colors.grayScaleSemiLightColor,
      },
    },
    MuiRadio: {
      root: {
        padding: 5,
      },
    },
    MuiTextField: {
      root: {
        marginTop: "5px",
        marginBottom: "12px",
      },
    },
  },
});
