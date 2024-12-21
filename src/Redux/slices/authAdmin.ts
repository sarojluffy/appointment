import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface AuthadminItems {
  email: string;
  password: string;
}

export interface AuthadminStates {
  existingadmins: AuthadminItems[];
}
const initialState: AuthadminStates = {
  existingadmins: [],
};

export const authadminSlice = createSlice({
  name: "authadmin",
  initialState,
  reducers: {
    addauthadmin: (state, action) => {
      const em = action.payload.email;
      const pw = action.payload.password;
      const objectData = state.existingadmins.find((abc) => abc.email === em);

      //   console.log(objectData)
      if (objectData) {
        console.log("already exists");
      } else {
        state.existingadmins.push({
          email: em,
          password: pw,
        });
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addauthadmin } = authadminSlice.actions;

export default authadminSlice.reducer;
