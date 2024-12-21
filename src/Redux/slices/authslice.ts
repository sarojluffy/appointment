import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Authitems {
  email: string;
  password: string;
}

export interface Authstate {
  existing: Authitems[];
}
const initialState: Authstate = {
  existing: [],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addauth: (state, action) => {
      const em = action.payload.email;
      const pw = action.payload.password;
      const objectData = state.existing.find((abc) => abc.email === em);

      //   console.log(objectData)
      if (objectData) {
        console.log("already exists");
      } else {
        state.existing.push({
          email: em,
          password: pw,
        });
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addauth } = authSlice.actions;

export default authSlice.reducer;