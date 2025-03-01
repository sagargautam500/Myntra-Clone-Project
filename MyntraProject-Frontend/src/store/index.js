import { configureStore } from '@reduxjs/toolkit'
import itemSlice from './ItemSlice';
import fetchStatusSlice from './fetchStatusSlice';
import bagSlice from './bagSlice';
import authSlice from './authSlice';

const myntraStore = configureStore({
  reducer: {
    Items: itemSlice.reducer,
    fetchStatus: fetchStatusSlice.reducer,
    bags:bagSlice.reducer,
    auth:authSlice.reducer,
  }
})

export default myntraStore;