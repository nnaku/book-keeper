import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { indigo, purple } from "@material-ui/core/colors";
import { fiFI } from "@material-ui/core/locale";

const theme = createMuiTheme(
  {
    typography: {
      fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue'",
    },
    palette: {
      type: "dark",
      primary: indigo,
      secondary: purple,
    },
  },
  fiFI
);

export default responsiveFontSizes(theme);
