import { createSlice } from "@reduxjs/toolkit";
import { AppointmentDay } from "../../shared/appointment";
// import { useEffect } from "react";

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
      // console.log("getdaycalled");
      if (action.payload) {
        const Day = new Date(action.payload).getDay();

        const TimeDay = state.appointment.find((abc) => abc.id === Day);

        if (TimeDay) {
          state.dayappointment = TimeDay?.time;
          state.day = TimeDay.day;
        } else state.dayappointment = [{ t: "", active: false }];
      }
    },

    SetTrue: (state, action) => {
      console.log("setrue called");
      // console.log(action.payload, state.day);
      const timeSelected: string = action.payload;
      console.log(timeSelected)

      const dayy = state.day;
      console.log(dayy, "day")

      if (dayy && timeSelected) {
        const FIlterObject = state.appointment.find((abc) => abc.day === dayy);

        if (FIlterObject) {
          // const filteredTime = FIlterObject.time.find(
          //   (abc) => abc.t === timeSelected
          const filteredTime = FIlterObject.time.map((abc) => {
            if (abc.t === timeSelected) {
              return { ...abc, active: true };
            }
            return abc;
          });
          state.appointment = state.appointment.map((abc) => {
            if (abc.day === dayy) {
              return { ...abc, time: filteredTime };
            }
            return abc;
          });
          // can also be done in a way below

          // const filteredTime = FIlterObject.time.map((abc) => {
          //   if (abc.t === timeSelected) {
          //     abc.active = true; // Update the active property
          //   }
          //   return abc; // Always return the entire object
          // });
          // console.log(filteredTime, "ok");
          // console.log(JSON.parse(JSON.stringify(filteredTime)), "ok");
        } else {
          // console.log("filtereditem not found");
        }

        // console.log(FIlterObject);
      } else {
        // console.log("select a date in calendar");
      }
    },
    SetFalse: (state, action) => {
      console.log("setrue called");
      // console.log(action.payload, state.day);
      const timeSelected: string = action.payload;
      console.log(timeSelected)

      const dayy = state.day;
      console.log(dayy, "day")

      if (dayy && timeSelected) {
        const FIlterObject = state.appointment.find((abc) => abc.day === dayy);

        if (FIlterObject) {
          // const filteredTime = FIlterObject.time.find(
          //   (abc) => abc.t === timeSelected
          const filteredTime = FIlterObject.time.map((abc) => {
            if (abc.t === timeSelected) {
              return { ...abc, active: false };
            }
            return abc;
          });
          state.appointment = state.appointment.map((abc) => {
            if (abc.day === dayy) {
              return { ...abc, time: filteredTime };
            }
            return abc;
          });

        } else {
          // console.log("filtereditem not found");
        }

        // console.log(FIlterObject);
      } else {
        // console.log("select a date in calendar");
      }
    },

    ResetDayData12: (state, action) => {
      const Dayyy = action.payload;

      const ObjectData = state.appointment.find((abc) => abc.day === Dayyy);

      if (ObjectData) {
        const ResetData = ObjectData.time.map((abc) => {
          return { ...abc, active: false };
        });

        if (ResetData)
          state.appointment = state.appointment.map((abc) => {
            if (abc.day === Dayyy) {
              return { ...abc, time: ResetData };
            }
            return abc;
          });
      } else {
        // console.log("no Object data for reset fopund");
      }
    },
  },
});

export const {
  // DisplayAppointment,
  Getday,
  // dataaa,
  // Timealloted,
  SetTrue, SetFalse,
  ResetDayData12,
} = appointSlice.actions;

export default appointSlice.reducer;
