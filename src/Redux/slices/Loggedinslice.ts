import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Logitems {
  email: string;
  password: string;
}

export interface logstate {
  active: Logitems[];
}
const initialState: logstate = {
  active: [],
};

export const LogSlice = createSlice({
  name: "log",
  initialState,
  reducers: {
    addlog: (state, action) => {
      const em = action.payload.email;
      const pw = action.payload.password;
      const objectData = state.active.find((abc) => abc.email === em);

      //   console.log(objectData)
      if (objectData) {
        console.log("already exists");
      } else {
        state.active.push({
          email: em,
          password: pw,
        });
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addlog } = LogSlice.actions;

export default LogSlice.reducer;
