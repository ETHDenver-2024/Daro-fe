import { configureStore } from '@reduxjs/toolkit'
import pathReducer from './path/pathSlice'

export default configureStore({
  reducer: {
    path: pathReducer,
  },
})