import React from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, List, SwipeableDrawer } from "@material-ui/core";

import DayIcon from "@material-ui/icons/ViewDay";
import WeekIcon from "@material-ui/icons/ViewWeek";
import MonthIcon from "@material-ui/icons/ViewComfy";
import LogoutIcon from "@material-ui/icons/ExitToApp";
import SettingsIcon from "@material-ui/icons/Settings";
import DrawerListItem from "./DrawerListItem";

const useStyles = makeStyles({
  list: {
    width: 250,
    height: "100vh",
  },
  flexGrow: {
    flexGrow: 1,
  },
});

function AppDrawer() {
  const classes = useStyles();

  const { isOpen } = useStoreState((s) => s.app.drawer);
  const { close } = useStoreActions((s) => s.app.drawer);

  return (
    <SwipeableDrawer anchor="left" open={isOpen} onClose={close}>
      <Grid
        container
        direction="column"
        className={classes.list}
        role="presentation"
        onClick={close}
        onKeyDown={close}
      >
        <Grid item>
          <List>
            <DrawerListItem to="/day" icon={DayIcon}>
              Day
            </DrawerListItem>
            <DrawerListItem to="/week" icon={WeekIcon}>
              Week
            </DrawerListItem>
            <DrawerListItem to="/month" icon={MonthIcon}>
              Week
            </DrawerListItem>
          </List>
        </Grid>

        <Grid item className={classes.flexGrow} />

        <Grid item>
          <List>
            <DrawerListItem to="/settings" icon={SettingsIcon}>
              Settings
            </DrawerListItem>

            <DrawerListItem
              onClick={() => alert("logout missing")}
              icon={LogoutIcon}
            >
              Logout
            </DrawerListItem>
          </List>
        </Grid>
      </Grid>
    </SwipeableDrawer>
  );
}

export default AppDrawer;
