import { configureStore } from '@reduxjs/toolkit'
import itemSlice from './ItemSlice';

const myntraStore = configureStore({
  reducer: {
    Items: itemSlice.reducer
  }
})

export default myntraStore;