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
    MuiRadio: {
      root: {
        padding: 5,
      },
    },
  },
});
