import { configureStore } from '@reduxjs/toolkit'
import cursorReducer from './features/cursor/cursorSclice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      cursor: cursorReducer
    }
  })
}