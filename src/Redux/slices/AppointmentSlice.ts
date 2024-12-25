import { createSlice } from "@reduxjs/toolkit";
import { AppointmentDay } from "../../shared/appointment";
import { useEffect } from "react";

export interface Appointitems {
  id: number;
  day: string;
  time: { t: string; active: boolean }[];
}
// export interface AppointDay {
//   t: string;
//   active: boolean;
// }

export interface Appointstate {
  appointment: Appointitems[];
  dayappointment: { t: string; active: boolean }[];
  day: string;
}
const initialState: Appointstate = {
  appointment: AppointmentDay,
  dayappointment: [{ t: "", active: false }],
  day: "",
};

export const appointSlice = createSlice({
  name: "appoint",
  initialState,
  reducers: {
    Getday: (state, action) => {
      if (action.payload) {
        // console.log(action.payload);

        // console.log(state.appointment);
        const Day = new Date(action.payload).getDay();
        console.log(Day);

        const TimeDay = state.appointment.find((abc) => abc.id === Day);
        console.log(JSON.parse(JSON.stringify(TimeDay)).time);

        if (TimeDay) {
          state.dayappointment = TimeDay?.time;
          state.day = TimeDay.day;
        } else state.dayappointment = [{ t: "", active: false }];
        // console.log(TimeDay?.time);
      }
    },

    SetTrue: (state, action) => {
      console.log(action.payload);
    },

    // Timealloted: (state, action) => {
    //   console.log("called");
    // },
  },
});

export const { DisplayAppointment, Getday, dataaa, Timealloted, SetTrue } =
  appointSlice.actions;

export default appointSlice.reducer;
