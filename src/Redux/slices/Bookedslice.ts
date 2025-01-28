import { createSlice } from "@reduxjs/toolkit";

export interface Booked {
  email: string;
  pet: string;
  issue: string;
  dob: number;
  activa: boolean;
  bookedtime: string;
}

export interface Bookedstate {
  bookedpeople: Booked[];
  searchedbookedpeople: Booked[];
  Usercancel: Booked[];
  Bookedhistory: Booked[];
}
const initialState: Bookedstate = {
  bookedpeople: [],
  searchedbookedpeople: [],
  Usercancel: [],
  Bookedhistory: [],
};

export const BookedSlice = createSlice({
  name: "booked",
  initialState,
  reducers: {
    clicked: (state, action) => {
      const em = action.payload;
      const objectData = state.bookedpeople.find((abc) => abc.email === em);
      if (objectData) {
        objectData.activa = false;
      }
    },
    addbooked: (state, action) => {
      // console.log(action.payload);
      const em = action.payload.paramsid;
      const pe = action.payload.petsName;
      const is = action.payload.issue;
      const dt = action.payload.dob;
      const ac = action.payload.activa;
      const btk = action.payload.bookedtime;
      const date = new Date(dt);

      // console.log(date.getDay());

      const objectData = state.bookedpeople.find((abc) => abc.email === em);

      if (objectData) {
        objectData.email = em;
        objectData.pet = pe;
        objectData.issue = is;
        objectData.dob = dt;
        objectData.activa = ac;
        objectData.bookedtime = btk;
      } else {
        state.bookedpeople.push({
          email: em,
          pet: pe,
          issue: is,
          dob: dt,
          activa: ac,
          bookedtime: btk,
        });
      }
    },

    historybooked: (state, action) => {
      // console.log(action.payload);
      const em = action.payload.paramsid;
      const pe = action.payload.petsName;
      const is = action.payload.issue;
      const dt = action.payload.dob;
      const ac = action.payload.activa;
      const btk = action.payload.bookedtime;
      const date = new Date(dt);

      // console.log(date.getDay());

      const objectData = state.Bookedhistory.find((abc) => abc.email === em);

      if (objectData) {
        state.Bookedhistory.push({
          email: em,
          pet: pe,
          issue: is,
          dob: dt,
          activa: ac,
          bookedtime: btk,
        });
      } else {
        // alert("cant add");
      }
    },

    searchbooked: (state, action) => {
      const searchedkey = action.payload;

      state.searchedbookedpeople = state.bookedpeople.filter((abc) =>
        abc.email
          .toLowerCase()
          .replace(/\s/g, "")
          .includes(searchedkey.toLowerCase().replace(/\s/g, ""))
      );
      // console.log(searchedkey);
    },

    deletebooked: (state, action) => {
      const em = action.payload;
      state.bookedpeople = state.bookedpeople.filter((abc) => abc.email != em);
      state.searchedbookedpeople = state.bookedpeople.filter(
        (abc) => abc.email != em
      );
    },

    cancelbooked: (state, action) => {
      // console.log(action.payload, "ko");
      const em = action.payload;
      state.bookedpeople = state.bookedpeople.filter((abc) => abc.email != em);
      // console.log(state.bookedpeople);
    },

    // canceledUsers: (state, action) => {
    //   console.log(action.payload);
    //   // const em = action.payload.paramsid;
    //   // const pe = action.payload.petsName;
    //   // const is = action.payload.issue;
    //   // const dt = action.payload.dob;
    //   // const ac = action.payload.activa;
    //   // const btk = action.payload.bookedtime;
    //   // const date = new Date(dt);
    //   // console.log(em, pe, is, dt, ac, btk, date);

    //   // console.log(em);

    //   // console.log(date.getDay());

    //   // const objectData = state.Bookedhistory.find((abc) => abc.email === em);

    //   // if (objectData) {
    //   //   state.Bookedhistory.push({
    //   //     email: em,
    //   //     pet: pe,
    //   //     issue: is,
    //   //     dob: dt,
    //   //     activa: ac,
    //   //     bookedtime: btk,
    //   //   });
    //   // } else {
    //   //   alert("not found");
    //   // }
    // },
  },
});

export const {
  addbooked,
  deletebooked,
  searchbooked,
  clicked,
  cancelbooked,
  // canceledUsers,
  historybooked,
} = BookedSlice.actions;

export default BookedSlice.reducer;
