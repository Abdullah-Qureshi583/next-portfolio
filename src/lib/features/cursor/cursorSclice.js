import { createSlice } from '@reduxjs/toolkit'

const cursorSlice = createSlice({
  name: 'cursor',
  initialState: {
    value: ""
  },
  reducers: {
   
    setCursorText: (state, action) => {
      state.value = action.payload
    },
    resetCursorText: (state) => {
      state.value = ""
    }
  }
})

export const { setCursorText, resetCursorText } = cursorSlice.actions

export default cursorSlice.reducer