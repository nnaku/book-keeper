import React, { StrictMode } from "react";
import * as serviceWorker from "./serviceWorker";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { StoreProvider } from "easy-peasy";
import { ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import "moment/locale/fi";
import MomentUtils from "@date-io/moment";
import theme from "theme";
import store from "store";
import Views from "./views";

ReactDOM.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <BrowserRouter>
          <StoreProvider store={store}>
            <CssBaseline />
            <Views />
          </StoreProvider>
        </BrowserRouter>
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  </StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
