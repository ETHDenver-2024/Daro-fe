import { createSlice } from '@reduxjs/toolkit'

export const pathSlice = createSlice({
  name: 'path',
  initialState: {
    loc: '/',
  },
  reducers: {
    updatePath: (state, action) => {
      state.value = action.payload
    },
  },
})


export const { updatePath } = pathSlice.actions

export default pathSlice.reducer