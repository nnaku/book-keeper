import React from "react";
import moment from "moment";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  TableContainer,
  Button,
  ButtonGroup,
} from "@material-ui/core";

import TopIcon from "@material-ui/icons/KeyboardArrowUp";
import LeftIcon from "@material-ui/icons/KeyboardArrowLeft";

import DayViewEvent from "./DayViewEvent";

function TimeLabel({ date }) {
  const isOnTheHour = !moment(date).get("minutes");
  return (
    <Typography
      variant={isOnTheHour ? "body1" : "body2"}
      color={isOnTheHour ? "textPrimary" : "textSecondary"}
    >
      {date.format("LT")}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  col: {
    minWidth: 200,
  },
  row: {
    height: 60,
  },
  timeLabelCol: {
    width: 80,
    zIndex: 3,
  },
  bgUnset: {
    backgroundColor: "inherit",
  },
}));

const DayView = React.forwardRef((props, ref) => {
  const classes = useStyles();
  const { timeLineElements, columns, scrollTop, scrollLeft } = props;
  return (
    <TableContainer ref={ref} className={classes.root}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell padding="none" className={classes.timeLabelCol}>
              <ButtonGroup variant="text">
                <Button size="small" onClick={scrollLeft}>
                  <LeftIcon fontSize="small" />
                </Button>
                <Button size="small" onClick={scrollTop}>
                  <TopIcon fontSize="small" />
                </Button>
              </ButtonGroup>
            </TableCell>

            {columns.map((col, i) => (
              <TableCell className={classes.col}>{col.name}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          <tr style={{ visibility: "collapse" }}>
            <td />
            {columns.map((col) => (
              <td style={{ position: "relative" }}>
                {col.events.map((event) => (
                  <DayViewEvent {...event} />
                ))}
              </td>
            ))}
          </tr>
          {timeLineElements.map((date) => (
            <TableRow classes={{ root: classes.row }}>
              <TableCell variant="head">
                <TimeLabel date={date} />
              </TableCell>
              {columns.map((col) => (
                <TableCell
                  onClick={() =>
                    alert(` ${col.id} - ${date.clone().format("LT")}`)
                  }
                />
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
});

export default DayView;
