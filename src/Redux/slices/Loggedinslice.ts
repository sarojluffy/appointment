import { createSlice, current } from "@reduxjs/toolkit";

export interface Logitems {
  email: string;
  password: string;
  // activeuser :boolean
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
  currentActiveUser: "",
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
    // adminlogged: (state, action) => {
    //   const em = action.payload.email;
    //   const pw = action.payload.password;
    //   const ac = action.payload.isactive;

    //   console.log(ac);

    //   const objectData = state.active.find((abc) => abc.email === em);

    //   //   console.log(objectData)
    //   if (objectData) {
    //     console.log("already exists");
    //   } else {
    //     state.active.push({
    //       email: em,
    //       password: pw,
    //     });
    //   }
    // },

    bookedinlog: (state, action) => {
      state.bookedD = action.payload;
    },
    editinlog: (state, action) => {
      state.editt = action.payload;
    },

    adminlogged: (state, action) => {
      state.adminactive = action.payload;
    },
    currentuser: (state, action) => {
      state.currentActiveUser = action.payload;

      console.log(state.currentActiveUser);
    },
    // testuser: (state) => {
    //   console.log(state.editt);
    // },
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
  // testuser,
} = LogSlice.actions;

export default LogSlice.reducer;
