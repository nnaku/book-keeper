import { action } from "easy-peasy";
import moment from "moment";

export default {
  date: {
    selected: moment(),
    setDate: action((state, payload) => {
      state.selected = moment(payload);
    }),
    today: action((state) => {
      state.selected = moment();
    }),
    nextDay: action((state) => {
      state.selected = moment(state.selected).add(1, "day");
    }),
    previousDay: action((state) => {
      state.selected = moment(state.selected).add(-1, "day");
    }),
  },
  drawer: {
    isOpen: false,
    open: action((state) => {
      state.isOpen = true;
    }),
    close: action((state) => {
      state.isOpen = false;
    }),
    toggle: action((state) => {
      state.isOpen = !state.isOpen;
    }),
  },
};
