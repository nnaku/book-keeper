import React, { useRef, useMemo } from "react";

import DayView from "./DayView.js";

export default function DayViewContainer({ timespan, events, eventColumns }) {
  const tableRef = useRef();

  const timeLineElements = useMemo(() => {
    const startOfDay = timespan.from.clone();
    const endOfDay = timespan.to.clone();
    const elements = [];
    do {
      elements.push(startOfDay.clone());
      startOfDay.add(30, "minutes");
    } while (startOfDay.isBefore(endOfDay));
    return elements;
  }, [timespan]);

  const columns = useMemo(() => events || eventColumns, [events, eventColumns]);

  const scrollTop = () =>
    tableRef.current.scrollTo({ top: 0, behavior: "smooth" });
  const scrollLeft = () =>
    tableRef.current.scrollTo({ left: 0, behavior: "smooth" });

  return (
    <DayView
      ref={tableRef}
      timeLineElements={timeLineElements}
      scrollTop={scrollTop}
      scrollLeft={scrollLeft}
      columns={columns}
    />
  );
}
