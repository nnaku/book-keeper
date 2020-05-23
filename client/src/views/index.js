import React, { Suspense, Fragment, lazy } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Toolbar } from "@material-ui/core";
import { Switch, Route } from "react-router-dom";
import Header from "components/Header";
import Drawer from "components/Drawer";

const DayView = lazy(() => import("views/Day"));
const WeekView = lazy(() => import("views/Week"));

const useStyles = makeStyles({
  main: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
  },
});

export default function Root() {
  const classes = useStyles();
  return (
    <Fragment>
      <Header />

      <main className={classes.main}>
        <Toolbar /* header placeholder */ />
        <Suspense fallback="Main">
          <Switch>
            <Route path="/day" component={DayView} />
            <Route path="/week" component={WeekView} />
          </Switch>
        </Suspense>
      </main>

      <Drawer />
    </Fragment>
  );
}
