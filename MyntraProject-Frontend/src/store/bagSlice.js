import { createSlice } from "@reduxjs/toolkit";

const bagSlice = createSlice({
  name: "bags",
  initialState: [],

  reducers: {
    addBagItem: (state, action) => {
      const Newitem = action.payload;
      return [{...Newitem,id:Date.now()}, ...state]
    },
    removeBagItem: (state, action) => {
      const newState = state.filter(item => item.id != action.payload)
      return newState
    }
  }
})
export const bagsAction = bagSlice.actions;
export default bagSlice;