import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useStoreState, useStoreActions } from "easy-peasy";
import {
  useMediaQuery,
  Grid,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Hidden,
} from "@material-ui/core";
import { DatePicker } from "@material-ui/pickers";

import MenuIcon from "@material-ui/icons/Menu";
import NextIcon from "@material-ui/icons/NavigateNext";
import PreviousIcon from "@material-ui/icons/NavigateBefore";

const useStyles = makeStyles((theme) => ({
  flexGrow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  datePickerRoot: {
    fontSize: "1.5rem",
    width: 200,
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.2rem",
      width: 110,
    },
  },
  datePickerInput: {
    textAlign: "center",
  },
}));

export default function Header() {
  const classes = useStyles();
  const isXs = useMediaQuery((theme) => theme.breakpoints.only("xs"));
  const selectedDate = useStoreState((s) => s.app.date.selected);
  const dateActions = useStoreActions((s) => s.app.date);
  const drawerActions = useStoreActions((s) => s.app.drawer);

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Grid
          container
          alignItems="center"
          spacing={isXs ? 1 : 2}
          wrap="nowrap"
        >
          <Grid item>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={drawerActions.open}
            >
              <MenuIcon />
            </IconButton>
          </Grid>
          <Hidden only="xs" implementation="css">
            <Grid item>
              <Typography variant="h5">book-keeper</Typography>
            </Grid>
          </Hidden>
          <Grid item className={classes.flexGrow} />
          <Grid item>
            <Grid container alignItems="center" wrap="nowrap">
              <Grid item>
                <IconButton
                  edge="end"
                  color="inherit"
                  aria-label="previous day"
                  onClick={dateActions.previousDay}
                >
                  <PreviousIcon />
                </IconButton>
              </Grid>

              <Grid item>
                <DatePicker
                  InputProps={{
                    disableUnderline: true,
                    classes: {
                      root: classes.datePickerRoot,
                      input: classes.datePickerInput,
                    },
                  }}
                  value={selectedDate}
                  onChange={dateActions.setDate}
                  format={`${isXs ? "dd" : "dddd"} DD.MM`}
                />
              </Grid>
              <Grid item>
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="next day"
                  onClick={dateActions.nextDay}
                >
                  <NextIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
