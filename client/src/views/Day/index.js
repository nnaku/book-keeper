import React from "react";
import moment from "moment";

import Calendar from "components/Calendar";
import { useStoreState } from "easy-peasy";

function DayView() {
  const { date } = useStoreState((s) => s.app);

  return (
    <Calendar
      date={date.selected}
      view="day"
      timespan={{
        from: moment(date).startOf("day").add(7, "hours"),
        to: moment(date).endOf("day"),
      }}
      eventColumns={[
        {
          name: "Col 1",
          id: "123",
          events: [
            {
              start: moment(date).add(10, "hour"),
              end: moment(date).add(13, "hour"),
              label: "test",
            },
          ],
        },
        {
          name: "Col 2",
          id: "456",
          events: [
            {
              start: moment(date).add(1, "hour"),
              end: moment(date).add(2, "hour"),
              label: "test",
            },
          ],
        },
        {
          name: "Col 3",
          id: "789",
          events: [
            {
              start: moment(date).add(1, "hour"),
              end: moment(date).add(2, "hour"),
              label: "test",
            },
          ],
        },
        {
          name: "Col 4",
          id: "234",
          events: [
            {
              start: moment(date).add(1, "hour"),
              end: moment(date).add(2, "hour"),
              label: "test",
            },
          ],
        },
        {
          name: "Col 5",
          id: "567",
          events: [
            {
              start: moment(date).add(1, "hour"),
              end: moment(date).add(2, "hour"),
              label: "test",
            },
          ],
        },
        {
          name: "Col 6",
          id: "891",
          events: [
            {
              start: moment(date).add(1, "hour"),
              end: moment(date).add(2, "hour"),
              label: "test",
            },
          ],
        },
        {
          name: "Col 7",
          id: "345",
          events: [
            {
              start: moment(date).add(1, "hour"),
              end: moment(date).add(2, "hour"),
              label: "test",
            },
          ],
        },
        {
          name: "Col 8",
          id: "876",
          events: [
            {
              start: moment(date).add(1, "hour"),
              end: moment(date).add(2, "hour"),
              label: "test",
            },
          ],
        },
        {
          name: "Col 9",
          id: "987",
          events: [
            {
              start: moment(date).add(1, "hour"),
              end: moment(date).add(2, "hour"),
              label: "test",
            },
          ],
        },
      ]}
    ></Calendar>
  );
}

export default DayView;
