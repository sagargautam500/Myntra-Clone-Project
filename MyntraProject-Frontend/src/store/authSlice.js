/// store/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null, // Retrieve user from localStorage
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.error = null;
      localStorage.setItem("user", JSON.stringify(action.payload)); // Save user to localStorage
    },
    logout: (state) => {
      state.user = null;
      state.error = null;
      localStorage.removeItem("user"); // Clear user from localStorage
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;