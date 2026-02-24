import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice'
import contactSice from './contactSlice'

export const store = configureStore({
  reducer: {
    user:userSlice,
    contact:contactSice,
  },
})
