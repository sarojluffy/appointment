import { createSlice, current } from "@reduxjs/toolkit";

export interface Logitems {
  email: string;
  password: string;
}

export interface logstate {
  active: Logitems[];
  adminactive: boolean;
  bookedD: boolean;
  editt: boolean;
  currentActiveUser: string;
}

const initialState: logstate = {
  active: [],
  adminactive: false,
  bookedD: false,
  editt: false,
};

export const LogSlice = createSlice({
  name: "log",
  initialState,
  reducers: {
    addlog: (state, action) => {
      const em = action.payload.email;
      const pw = action.payload.password;
      const ac = action.payload.isactive;

      console.log(ac);

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

    bookedinlog: (state, action) => {
      state.bookedD = action.payload;
    },
    editinlog: (state, action) => {
      state.editt = action.payload;
    },
    currentuser: (state, action) => {
      state.currentActiveUser = action.payload;

      // console.log(state.currentActiveUser)
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addlog,
  logged,
  adminlogged,
  bookedinlog,
  editinlog,
  currentuser,
} = LogSlice.actions;

export default LogSlice.reducer;
