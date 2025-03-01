// import { createSlice } from "@reduxjs/toolkit";

// const fetchStatusSlice = createSlice({
//   name: "fetchStatus",
//   initialState: {
//     fetchDone: false,
//     currentlyFetching: false
//   },
//   reducers: {
//     markFetchDone: (state) => {
//       return state.fetchDone = true;
//     },
//     markFetchingStart: (state) => {
//       return state.currentlyFetching = true;
//     },
//     markFetchingStop: (state) => {
//       return state.currentlyFetching = false
//     }
//   }
// })

// export const fetchStatusAction = fetchStatusSlice.actions;
// export default fetchStatusSlice;
import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    fetchDone: false,
    currentlyFetching: false,
  },
  reducers: {
    markFetchDone: (state) => {
      state.fetchDone = true;
    },
    markFetchingStart: (state) => {
      state.currentlyFetching = true;
    },
    markFetchingStop: (state) => {
      state.currentlyFetching = false;
    },
  },
});

export const fetchStatusAction = fetchStatusSlice.actions;
export default fetchStatusSlice;
