import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_ITEMS } from "../data/items";

const itemSlice = createSlice({
  name: "Items",
  initialState: DEFAULT_ITEMS,
  reducers: {
    addInitialItem: (state, action) => {
      return state;
    }
  }
})
export const itemAction = itemSlice.actions;

export default itemSlice;