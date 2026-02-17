import { configureStore } from '@reduxjs/toolkit'
import customerSlice from './customerSlice'
import contactSlice from './contactSlice'

export const store = configureStore({
  reducer: {
    customer:customerSlice,
    contact:contactSlice
  },
})
