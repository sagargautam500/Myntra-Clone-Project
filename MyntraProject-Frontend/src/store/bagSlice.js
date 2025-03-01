import { createSlice } from "@reduxjs/toolkit";

const bagSlice = createSlice({
  name: "bags",
  initialState: [],

  reducers: {
    addBagItem: (state, action) => {
      // const Newitem = action.payload;                 //for first method:Obtina Object
      // return [{...Newitem,id:Date.now()}, ...state]   //for first method
      const Newitem=action.payload;  //obtain object id only
      state.push(Newitem)
    },
    removeBagItem: (state, action) => {
      const newState = state.filter(itemId => itemId != action.payload)
      return newState
    }
  }
})
export const bagsAction = bagSlice.actions;
export default bagSlice;