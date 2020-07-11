import { red } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  root: {
    display: "flex",
  },
  palette: {
    primary: {
      main: "#006f3c",
    },
    secondary: {
      main: "#f9a73e",
    },
    error: {
      main: "#bf212f",
    },
    warning: {
      main: "#264b96",
    },
    info: {
      main: "#264b96",
    },
    success: {
      main: "#f9a73e",
    },
    background: {
      default: "#f9a73e"
    }
  },
});

export default theme;
