import { createSlice } from "@reduxjs/toolkit";

export interface Booked {
  email: string;
  pet: string;
  issue: string;
  dob: string;
}

export interface Bookedstate {
  bookedpeople: Booked[];
  searchedbookedpeople: Booked[];
}
const initialState: Bookedstate = {
  bookedpeople: [],
  searchedbookedpeople: [],
};

export const BookedSlice = createSlice({
  name: "booked",
  initialState,
  reducers: {
    addbooked: (state, action) => {
      // console.log(state.bookedpeople);

      const em = action.payload.paramsid;
      const pe = action.payload.petsName;
      const is = action.payload.issue;
      const dt = action.payload.dob;

      console.log(dt);
      const objectData = state.bookedpeople.find((abc) => abc.email === em);

      // console.log(objectData);
      if (objectData) {
        objectData.email = em;
        objectData.pet = pe;
        objectData.issue = is;
        objectData.dob = dt;
      } else {
        // console.log("not found");
        state.bookedpeople.push({
          email: em,
          pet: pe,
          issue: is,
          dob: dt,
        });
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
      console.log(searchedkey);
    },

    deletebooked: (state, action) => {
      const em = action.payload;
      state.bookedpeople = state.bookedpeople.filter((abc) => abc.email != em);
      state.searchedbookedpeople = state.bookedpeople.filter(
        (abc) => abc.email != em
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { addbooked, deletebooked, searchbooked } = BookedSlice.actions;

export default BookedSlice.reducer;
