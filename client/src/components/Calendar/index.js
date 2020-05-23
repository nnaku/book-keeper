import React, {
  Suspense,
  lazy,
  useMemo,
  createContext,
  useContext,
} from "react";
import moment from "moment";

const DayView = lazy(() => import("./DayView"));

const CalendarContext = createContext({});

export const useCalendarContext = () => {
  const ctx = useContext(CalendarContext);

  return ctx;
};

function Calendar({ view, date, ...rest }) {
  const ViewComponent = useMemo(() => {
    switch (view) {
      case "day":
        return DayView;
      default:
        throw Error(`Unknown Calendar view prop: ${JSON.stringify(view)}`);
    }
  }, [view]);

  return (
    <Suspense fallback="Calendar">
      <CalendarContext.Provider
        value={{ date: moment(date), view, timespan: rest.timespan }}
      >
        <ViewComponent {...rest} />
      </CalendarContext.Provider>
    </Suspense>
  );
}

export default Calendar;
