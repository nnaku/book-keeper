import React, { useMemo } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: ({ top, height }) => ({
    top,
    height,
    visibility: "visible",
    position: "absolute",
    width: "100%",
    padding: [[0, 8]],

    backgroundColor: `${theme.palette.secondary.light}80`,
  }),
}));

export function DayViewEvent({ top, height, start, end, label }) {
  const classes = useStyles({ top, height });
  const startDateStr = useMemo(() => start.format("LT"), [start]);
  const endDateStr = useMemo(() => end.format("LT"), [end]);

  return (
    <Paper className={classes.root}>
      <Grid
        container
        direction="column"
        alignContent="space-between"
        spacing={1}
      >
        <Grid item>
          <Typography
            noWrap
            variant="caption"
          >{`${startDateStr} - ${endDateStr}`}</Typography>
        </Grid>
        <Grid item>
          <Typography noWrap variant="subtitle2">
            {label}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}
