import React, { useMemo } from "react";
import moment from "moment";

import { useCalendarContext } from "components/Calendar";

import { DayViewEvent } from "./DayViewEvent";

export default function DayViewEventContainer({ start, end, label }) {
  const { timespan } = useCalendarContext();

  const top = useMemo(() => {
    const startOf = timespan.from.clone();
    if (moment(start).isBefore(startOf)) {
      return 0;
    }

    return start.diff(startOf, "minutes") * 2;
  }, [timespan.from, start]);

  const height = useMemo(() => {
    const startOf = timespan.from.clone();
    const endOf = timespan.to.clone();

    return (
      (moment(end).isAfter(endOf) ? endOf : end).diff(
        startOf.isAfter(start) ? startOf : start,
        "minutes"
      ) * 2
    );
  }, [timespan, start, end]);

  return (
    <DayViewEvent
      top={top}
      height={height}
      start={start}
      end={end}
      label={label}
    />
  );
}
