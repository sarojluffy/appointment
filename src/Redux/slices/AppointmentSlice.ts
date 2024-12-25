import { createSlice } from "@reduxjs/toolkit";
import { AppointmentDay } from "../../shared/appointment";
import { useEffect } from "react";

export interface Appointitems {
  id: number;
  day: string;
  time: { t: string; active: boolean }[];
}

export interface Appointstate {
  appointment: Appointitems[];
  dayappointment: Appointitems[];
}
const initialState: Appointstate = {
  appointment: AppointmentDay,
  dayappointment: [
    // {
    //   id: 0,
    //   day: "sunday",
    //   time: [
    //     { t: "10 am", active: false },
    //     { t: "11 am", active: false },
    //     { t: "12 am", active: false },
    //     { t: "01 pm", active: false },
    //     { t: "02 pm", active: false },
    //     { t: "03 pm", active: false },
    //     { t: "04 pm", active: false },
    //     { t: "05 pm", active: false },
    //   ],
    // },
  ],
};

export const appointSlice = createSlice({
  name: "appoint",
  initialState,
  reducers: {
    Getday: (state, action) => {
      console.log("called");
      const dt = new Date(action.payload);

      const dtt = dt.getDay();

      // console.log(dtt);

      const findday: Appointitems | undefined = state.appointment.find(
        (abc) => abc.id === dtt
      );

      if (findday) {
        state.dayappointment = [findday];
      }

      console.log(state.dayappointment, "getday data");
    },

    Timealloted: (state, action) => {
      console.log("called");
    },
  },
});

export const { DisplayAppointment, Getday, dataaa, Timealloted } =
  appointSlice.actions;

export default appointSlice.reducer;
