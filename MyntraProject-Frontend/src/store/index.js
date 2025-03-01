import { configureStore } from '@reduxjs/toolkit'
import itemSlice from './ItemSlice';
import fetchStatusSlice from './fetchStatusSlice';
import bagSlice from './bagSlice';

const myntraStore = configureStore({
  reducer: {
    Items: itemSlice.reducer,
    fetchStatus: fetchStatusSlice.reducer,
    bags:bagSlice.reducer,
  }
})

export default myntraStore;